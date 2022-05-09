package capstone.trivia_game.controllers;

import capstone.trivia_game.domain.QuestionSqlService;
import capstone.trivia_game.domain.Result;
import capstone.trivia_game.domain.ResultType;
import capstone.trivia_game.models.Question;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/question")
public class QuestionSqlController {

    private final QuestionSqlService service;

    public QuestionSqlController(QuestionSqlService service) {
        this.service = service;
    }


    @GetMapping
    public List<Question> getAll() {
        return service.getAll();
    }

    @GetMapping("/available/{gameId}")
    public List<Question> getAvailableFromGame(@PathVariable int gameId) {
        return service.getAvailableFromGame(gameId);
    }

    //Todo: Check why nonexistent IDs return 200 for findByQuestionId
//    @GetMapping("/{questionId}")
//    public Question findByQuestionId(@PathVariable int questionId) {
//        return service.findByQuestionId(questionId);
//    }
    @GetMapping("/{questionId}")
    public ResponseEntity<Question> findByQuestionId(@PathVariable int questionId) {
        if(service.findByQuestionId(questionId)==null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
       else{
           return new ResponseEntity<>(service.findByQuestionId(questionId), HttpStatus.OK);
        }
    }

    //Todo: Check why nonexistent IDs return 200 for findByGameId
//    @GetMapping("/game/{gameId}")
//    public List<Question> findByGameId(@PathVariable int gameId) {
//        return service.findByGameId(gameId);
//    }
    @GetMapping("/game/{gameId}")
    public ResponseEntity<Object> findByGameId(@PathVariable int gameId) {
        if(service.findByGameId(gameId)==null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        else{
            return new ResponseEntity<>(service.findByGameId(gameId), HttpStatus.OK);
        }

    }

    @PostMapping("/build/{type}")
    public ResponseEntity<Object> buildGame(@PathVariable int type) throws IOException, InterruptedException {
        int gameId = service.buildGame(type);
        if (gameId > 0) {
            return new ResponseEntity<>(gameId, HttpStatus.CREATED);
        }
        Result<Question> result = new Result<>();
        result.addMessage("Error building new game", ResultType.INVALID);
        return ErrorResponse.build(result);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Question question) {
        Result<Question> result = service.add(question);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{questionId}")
    public ResponseEntity<Object> update(@PathVariable int questionId, @RequestBody Question question) {
        if (questionId != question.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Question> result = service.update(question);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{gameId}")
    public ResponseEntity<Void> deleteByGame(@PathVariable int gameId) {
        if (service.deleteByGame(gameId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{gameId}/next")
    public ResponseEntity<Question> getNext(@PathVariable int gameId){
        if(service.getNext(gameId)==null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        else{
            return new ResponseEntity<>(service.getNext(gameId), HttpStatus.OK);
        }
    }
}
