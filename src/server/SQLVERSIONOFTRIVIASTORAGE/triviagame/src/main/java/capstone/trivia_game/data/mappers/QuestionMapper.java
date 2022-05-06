package capstone.trivia_game.data.mappers;

import capstone.trivia_game.models.Question;
import capstone.trivia_game.models.ScoreEntry;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class QuestionMapper implements RowMapper<Question> {

    @Override
    public Question mapRow(ResultSet resultSet, int i)throws SQLException{
        Question question = new Question();
        question.setId(resultSet.getInt("question_id"));
        question.setQuestion(resultSet.getString("question"));
        question.setCorrect(resultSet.getBoolean("correct"));
        question.setAnswered(resultSet.getBoolean("answered"));
        question.setEarnedPoints(resultSet.getInt("earned_points"));
        List<String> answers=new ArrayList<>();
        answers.add(resultSet.getString("correct_answer"));
        answers.add(resultSet.getString("incorrect_answer_1"));
        answers.add(resultSet.getString("incorrect_answer_2"));
        answers.add(resultSet.getString("incorrect_answer_3"));
        question.setAllAnswers(answers);
        question.setGameID(resultSet.getInt("game_id"));


        return question;
    }

}
