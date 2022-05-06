//package capstone.trivia_game.controllers;
//
//import capstone.trivia_game.domain.QuestionService;
//import capstone.trivia_game.domain.Result;
//import capstone.trivia_game.models.Question;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/question")
//public class QuestionController {
//
//    private QuestionService service;
//    private List<QuestionService> serviceList = new ArrayList<>();
//
//    // array of question services
//    // when game makes a call, call a particular service within the array
//    // spin up new service each time a new game is made, then purge service from list/array when finished with it
//
//    public QuestionController(QuestionService service) {
//        this.service = service;
//        serviceList.add(service);
//        if(serviceList.size()==1){
//            serviceList.get(0).setId(1);
//        }
//        else {
//            int prevId = serviceList.get(serviceList.size() - 2).getId();
//            serviceList.get(serviceList.size() - 1).setId(prevId + 1);
//        }
//    }
//
//    @GetMapping("/{type}")
//    public Integer getGameId(@PathVariable int type) throws IOException, InterruptedException {
//        QuestionService service = new QuestionService(type);
//        serviceList.add(service);
//        if(serviceList.size()==1){
//            serviceList.get(0).setId(1);
//            return 1;
//        }
//        else {
//            int prevId = serviceList.get(serviceList.size() - 2).getId();
//            serviceList.get(serviceList.size() - 1).setId(prevId + 1);
//            return prevId + 1;
//        }
//    }
//
//    @GetMapping("/next/{id}")
//    public Question getQuestion(@PathVariable int id) {
//        for (int i = 0; i < serviceList.size(); i++) {
//            if (serviceList.get(i).getId() == id) {
//                return serviceList.get(i).getNext();
//            }
//        }
//        return null;
//    }
//
//    @GetMapping("/end/{id}")
//    public List<Question> getEndList(@PathVariable int id) {
//        for (int i = 0; i < serviceList.size(); i++) {
//            if (serviceList.get(i).getId() == id) {
//                return serviceList.get(i).findAll();
//            }
//        }
//        return null;
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Object> update(@PathVariable int id, @RequestBody Question question) {
//        Result<Question> result = new Result<>();
//        for (int i = 0; i < serviceList.size(); i++) {
//            if (serviceList.get(i).getId() == id) {
//                result = serviceList.get(i).updateQuestion(question);
//                break;
//            }
//        }
//        if (result.isSuccess()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return ErrorResponse.build(result);
//    }
//
//}
