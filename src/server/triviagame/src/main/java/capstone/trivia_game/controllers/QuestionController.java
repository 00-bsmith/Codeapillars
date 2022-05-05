package capstone.trivia_game.controllers;

import capstone.trivia_game.domain.QuestionService;
import capstone.trivia_game.models.Question;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/question")
public class QuestionController {

    private final QuestionService service;
    private List<QuestionService> serviceList;

    // array of question services
    // when game makes a call, call a particular service within the array
    // spin up new service each time a new game is made, then purge service from list/array when finished with it

    public QuestionController(QuestionService service) {
        this.service = service;
        serviceList.add(service);
        if(serviceList.size()==1){
            serviceList.get(0).setId(1);
        }
        else {
            int prevId = serviceList.get(serviceList.size() - 2).getId();
            serviceList.get(serviceList.size() - 1).setId(prevId + 1);
        }
    }



}
