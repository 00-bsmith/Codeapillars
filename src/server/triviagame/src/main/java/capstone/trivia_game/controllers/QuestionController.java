package capstone.trivia_game.controllers;

import capstone.trivia_game.domain.QuestionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/question")
public class QuestionController {

    private final QuestionService service;

    public QuestionController(QuestionService service) {
        this.service = service;
    }

    // array of question services
    // when game makes a call, call a particular service within the array
    // spin up new service each time a new game is made, then purge service from list/array when finished with it
}
