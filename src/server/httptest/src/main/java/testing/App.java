package testing;

import com.fasterxml.jackson.databind.ObjectMapper;
import testing.models.ImportQuestion;
import testing.models.Question;
import testing.models.Results;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;
import java.net.ProxySelector;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.function.Supplier;

//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.google.gson.Gson;
//import com.google.gson.JsonElement;
////import com.google.gson.stream.JsonReader;
////import com.google.gson.JsonObject;
//import testing.models.ImportQuestion;
//import testing.models.Question;
//
//import javax.json.Json;
//import javax.json.JsonObject;
//import javax.json.JsonReader;


public class App {
    public static void main(String[] args) throws IOException, InterruptedException {
        var client = HttpClient.newHttpClient();
        String url="https://opentdb.com/api.php?amount=7";
        HttpRequest request = HttpRequest.newBuilder(URI.create(url))
                .GET()
                .build();
        System.out.println(request);
        HttpResponse<String> response = HttpClient
                .newBuilder()
                .build()
                .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response);
        System.out.println(response.body());

        //Jackson attempt
//        ObjectMapper objectMapper = new ObjectMapper();
//        JsonNode tree = objectMapper.readTree(response.body());
//       // System.out.println(tree);
//        System.out.println("1");
//        //JsonNode node = tree.at("/results");
//        JsonNode node = tree.at("/results/category");
//        System.out.println("2");
//        //ImportQuestion importQuestion= objectMapper.treeToValue(node, ImportQuestion.class);
//        ImportQuestion importQuestion = objectMapper.treeToValue(node, ImportQuestion.class);
//        System.out.println("3");
        //System.out.println(importQuestion.getQuestion());

        //Gson
//        ImportQuestion question = new Gson().fromJson(response.body(), ImportQuestion.class);
//        new Gson().
//        System.out.println(question.getQuestion());

        //json reader
//        try {
//            InputStream is= new ByteArrayInputStream(response.body().getBytes("UTF-8"));
//            System.out.println("1");
//            JsonReader jsonReader = Json.createReader(is);
//            System.out.println("2");
//            JsonObject Obj = jsonReader.readObject();
//            System.out.println("3");
//            jsonReader.close();
//            System.out.println("4");
//            System.out.println(Obj.getString("category"));
//        } catch (Exception ex){
//            System.out.println("FAILURE");
//        }
        ObjectMapper objectMapper = new ObjectMapper();
        String json= response.body();
        Results results = objectMapper.readValue(json, Results.class);

        ImportQuestion[] importQuestion=objectMapper.readValue(results.getResults().toString(), ImportQuestion[].class);
      //  System.out.println(importQuestion[0].getQuestion());

        Question question=new Question(importQuestion[0]);
        System.out.println(question.getQuestion());
        System.out.println(question.getAllAnswers());

       // Question[] questionArray = arrayFunction(importQuestion);
        //List<Question> questionList = listFunction(importQuestion);
        System.out.println("Done");
        List<Question> list2= Question.listFunction(importQuestion);
        System.out.println("done 2");


    }

//   static Question[] arrayFunction(ImportQuestion[] iq){
//        Question[] returnArray = new Question[iq.length];
//
//        return returnArray;
//    }
//    static List<Question> listFunction(ImportQuestion[] iq){
//        List<Question> list = new ArrayList<>();
//        for (int i = 0; i < iq.length; i++) {
//            list.add(i,new Question(iq[i]));
//        }
//        return list;
//    }
}
