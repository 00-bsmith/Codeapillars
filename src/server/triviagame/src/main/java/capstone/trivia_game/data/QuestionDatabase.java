package capstone.trivia_game.data;

import capstone.trivia_game.models.ImportQuestion;
import capstone.trivia_game.models.Question;
import capstone.trivia_game.models.Results;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

public class QuestionDatabase {

    private List<Question> questionList;
    private int type;//1 short, 2 med, 3 long
    private List<Integer> available;//use this to get available questions vs trying to find ones answered


//      -Short: 7 - 3/3/1
//      -Medium: 15 - 5/7/3
//      -Long: 30 - 10/15/5

    public QuestionDatabase(int type) throws IOException, InterruptedException {
        this.type=type;
        questionList=new ArrayList<>();
        String easy="", medium="", hard="";
        available=new ArrayList<>();
       // var client = HttpClient.newHttpClient();
        if(type==1){
            //need to pull 3 different amounts of Qs and populate the DB
         easy="https://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple";
         medium="https://opentdb.com/api.php?amount=3&difficulty=medium&type=multiple";
         hard="https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple";
            available=new ArrayList<Integer>(){{
                add(0);
                add(1);
                add(2);
                add(3);
                add(4);
                add(5);
                add(6);
            }};
        }
        else if(type==2){
            easy="https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";
            medium="https://opentdb.com/api.php?amount=7&difficulty=medium&type=multiple";
            hard="https://opentdb.com/api.php?amount=3&difficulty=hard&type=multiple";
            available=new ArrayList<Integer>(){{
                add(0);
                add(1);
                add(2);
                add(3);
                add(4);
                add(5);
                add(6);
                add(7);
                add(8);
                add(9);
                add(10);
                add(11);
                add(12);
                add(13);
                add(14);

            }};
        }
        else if(type==3){
            easy="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
            medium="https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
            hard="https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple";
            available=new ArrayList<Integer>(){{
                add(0);
                add(1);
                add(2);
                add(3);
                add(4);
                add(5);
                add(6);
                add(7);
                add(8);
                add(9);
                add(10);
                add(11);
                add(12);
                add(13);
                add(14);
                add(15);
                add(16);
                add(17);
                add(18);
                add(19);
                add(20);
                add(21);
                add(22);
                add(23);
                add(24);
                add(25);
                add(26);
                add(27);
                add(28);
                add(29);

            }};
        }
        else{
        return;
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
        for (int i = 0; i < questionList.size(); i++) {
            questionList.get(i).setId(i);
        }
    }


    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List<Integer> getAvailable() {
        return available;
    }

    public void setAvailable(List<Integer> available) {
        this.available = available;
    }
}
