package capstone.trivia_game.data;

import capstone.trivia_game.data.mappers.QuestionMapper;
import capstone.trivia_game.models.ImportQuestion;
import capstone.trivia_game.models.Question;
import capstone.trivia_game.models.Results;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Repository
public class QuestionJdbcTemplateRepository implements QuestionRepository{

    private final JdbcTemplate jdbcTemplate;
    public QuestionJdbcTemplateRepository(JdbcTemplate jdbcTemplate){this.jdbcTemplate=jdbcTemplate;}


    @Override
    public int buildGame(int type) throws IOException, InterruptedException {//the int return is intended to be the next gameID
        List<Question> questionList=new ArrayList<>();
        String easy="", medium="", hard="";
        if(type==1){
            easy="https://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple";
            medium="https://opentdb.com/api.php?amount=3&difficulty=medium&type=multiple";
            hard="https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple";
        }
        else if(type==2){
            easy="https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";
            medium="https://opentdb.com/api.php?amount=7&difficulty=medium&type=multiple";
            hard="https://opentdb.com/api.php?amount=3&difficulty=hard&type=multiple";
        }
        else if(type==3){
            easy="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
            medium="https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
            hard="https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple";
        }
        else{
            return -1;
        }
        HttpRequest easyReq = HttpRequest.newBuilder(URI.create(easy))
                .GET()
                .build();
        HttpResponse<String> easyResp = HttpClient
                .newBuilder()
                .build()
                .send(easyReq, HttpResponse.BodyHandlers.ofString());
        ObjectMapper objectMapper = new ObjectMapper();
        String json= easyResp.body();
        Results easyResult = objectMapper.readValue(json, Results.class);
        ImportQuestion[] easyIQ=objectMapper.readValue(easyResult.getResults().toString(), ImportQuestion[].class);
        List<Question> easyList=Question.listFunction(easyIQ);// first of 3 lists
        ///////
        HttpRequest medReq= HttpRequest.newBuilder(URI.create(medium))
                .GET()
                .build();
        HttpResponse<String> medRespo=HttpClient.newBuilder()
                .build()
                .send(medReq, HttpResponse.BodyHandlers.ofString());
        json=medRespo.body();
        Results medResult = objectMapper.readValue(json, Results.class);
        ImportQuestion[] medIQ=objectMapper.readValue(medResult.getResults().toString(), ImportQuestion[].class);
        List<Question> medList=Question.listFunction(medIQ);
        ///////////
        HttpRequest hardReq= HttpRequest.newBuilder(URI.create(hard))
                .GET()
                .build();
        HttpResponse<String> hardRespo=HttpClient.newBuilder()
                .build()
                .send(hardReq, HttpResponse.BodyHandlers.ofString());
        json=hardRespo.body();
        Results hardResult = objectMapper.readValue(json, Results.class);
        ImportQuestion[] hardIQ=objectMapper.readValue(hardResult.getResults().toString(), ImportQuestion[].class);
        List<Question> hardList=Question.listFunction(hardIQ);

        questionList.addAll(easyList);
        questionList.addAll(medList);
        questionList.addAll(hardList);
        //GET NEW GAME ID FIRST BEFORE ADDING TO THE DATABASE
        String sql;
        int max_id;
        try {
            sql = "select MAX(game_id) from game_storage;";
            max_id = jdbcTemplate.queryForObject(sql, int.class);
        }catch(NullPointerException ex){
            max_id=0;
        }

        for (Question question:
             questionList) {
            question.setGameID(max_id+1);
            add(question);
        }

        //RETURN NEW GAME ID
        return max_id+1;
    }

    @Override
    public List<Question> getAll() {
        final String sql="select question_id, question, correct, answered, earned_points, correct_answer, " +
                "incorrect_answer_1, incorrect_answer_2, incorrect_answer_3, game_id from game_storage;";
        return jdbcTemplate.query(sql, new QuestionMapper());
    }

    @Override
    public List<Question> getAvailableFromGame(int id) {
        final String sql="select question_id, question, correct, answered, earned_points, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3, game_id from game_storage " +
                "where game_id= ? and answered = false;";
        return jdbcTemplate.query(sql, new QuestionMapper(), id);
    }

    @Override
    public Question findById(int id) {
        final String sql="select question_id, question, correct, answered, earned_points, correct_answer, " +
                "incorrect_answer_1, incorrect_answer_2, incorrect_answer_3, game_id from game_storage " +
                "where question_id = ?;";
        return jdbcTemplate.query(sql, new QuestionMapper(), id).stream()
                .findFirst().orElse(null);
    }

    @Override
    public List<Question> findByGameId(int id) {
        final String sql="select question_id, question, correct, answered, earned_points, correct_answer, " +
                "incorrect_answer_1, incorrect_answer_2, incorrect_answer_3, game_id from game_storage " +
                "where game_id = ?";
        return jdbcTemplate.query(sql, new QuestionMapper(), id);
    }

    @Override
    public boolean update(Question question) {

        final String sql="update game_storage set " +
                "correct = ?, " +
                "answered = ?, " +
                "earned_points = ? " +
                "where question_id = ?;";

        return jdbcTemplate.update(sql,
                question.getCorrect(),
                question.getAnswered(),
                question.getEarnedPoints(),
                question.getId())>0;



    }

    @Override
    @Transactional
    public boolean deleteByGame(int id) {
        return jdbcTemplate.update("delete from game_storage where game_id=?;", id)>0;
    }

    @Override
    public Question add(Question question){
        final String sql="insert into game_storage (game_id, question, correct, answered, earned_points, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) " +
                "values (?, ?, ?, ?, ?, ?, ?, ?, ?);";

        KeyHolder keyHolder=new GeneratedKeyHolder();
        int rowsAffected=jdbcTemplate.update(connection->{
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, question.getGameID());
            ps.setString(2,question.getQuestion());
            ps.setBoolean(3,question.getCorrect());
            ps.setBoolean(4,question.getAnswered());
            ps.setInt(5,question.getEarnedPoints());
            ps.setString(6,question.getAllAnswers().get(0));
            ps.setString(7,question.getAllAnswers().get(1));
            ps.setString(8,question.getAllAnswers().get(2));
            ps.setString(9,question.getAllAnswers().get(3));
            return ps;
        },keyHolder);
        if (rowsAffected <=0){
            return null;
        }
        question.setId(keyHolder.getKey().intValue());
        return question;
    }
}
