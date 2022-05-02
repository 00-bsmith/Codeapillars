package capstone.trivia_game.controllers;

import capstone.trivia_game.domain.LongScoreService;
import capstone.trivia_game.domain.MediumScoreService;
import capstone.trivia_game.domain.ShortScoreService;
import capstone.trivia_game.models.ScoreEntry;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import capstone.trivia_game.domain.Result;

import java.util.List;

@RestController
@RequestMapping("/api/score")
public class ScoreController {
    private final ShortScoreService shortService;
    private final MediumScoreService mediumService;
    private final LongScoreService longService;

    public ScoreController(ShortScoreService shortService, MediumScoreService mediumService, LongScoreService longService){
        this.shortService=shortService;
        this.mediumService=mediumService;
        this.longService=longService;
    }

    @GetMapping("/{length}")
    public List<ScoreEntry> findAll(@PathVariable String length){
        if(length.equalsIgnoreCase("short")){
            return shortService.findAll();
        }
        else if(length.equalsIgnoreCase("medium")){
            return mediumService.findAll();
        }
        else if(length.equalsIgnoreCase("long")){
            return longService.findAll();
        }
        else{
            return null;
        }

    }

    @GetMapping("/{length}/{scoreId}")
    public ScoreEntry findById(@PathVariable String length, @PathVariable int scoreId){
        if(length.equalsIgnoreCase("short")){
            return shortService.findById(scoreId);
        }
        else if(length.equalsIgnoreCase("medium")){
            return mediumService.findById(scoreId);
        }
        else if(length.equalsIgnoreCase("long")){
            return longService.findById(scoreId);
        }
        else{
            return null;
        }
    }


    @PostMapping("/{length}")
    public ResponseEntity<Object> add(@PathVariable String length, @RequestBody ScoreEntry scoreEntry){
        if(length.equalsIgnoreCase("short")){
            Result<ScoreEntry> result=shortService.add(scoreEntry);
            if (result.isSuccess()) {
                return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
            }
        }
        else if(length.equalsIgnoreCase("medium")){
            Result<ScoreEntry> result=mediumService.add(scoreEntry);
            if (result.isSuccess()) {
                return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
            }
        }
        else if(length.equalsIgnoreCase("long")){
            Result<ScoreEntry> result=longService.add(scoreEntry);
            if (result.isSuccess()) {
                return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
            }
        }
        return ErrorResponse.build(result);
    }




    @PutMapping("/{length}/{scoreId}")
    public ResponseEntity<Object> update(@PathVariable String length, @PathVariable int scoreId, @RequestBody ScoreEntry scoreEntry){
        if(scoreId!=scoreEntry.getScoreId()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }


        if(length.equalsIgnoreCase("short")){
            Result<ScoreEntry> result= shortService.update(scoreEntry);
            if (result.isSuccess()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }
        else if(length.equalsIgnoreCase("medium")){
            Result<ScoreEntry> result= mediumService.update(scoreEntry);
            if (result.isSuccess()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }
        else if(length.equalsIgnoreCase("long")){
            Result<ScoreEntry> result= longService.update(scoreEntry);
            if (result.isSuccess()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }
        return ErrorResponse.build(result);

    }

    @DeleteMapping("/{length}/{scoreId}")
    public ResponseEntity<Void> deleteById(@PathVariable String length, @PathVariable int scoreId){
        if(length.equalsIgnoreCase("short")){
            if (shortService.deleteById(scoreId)) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }
        else if(length.equalsIgnoreCase("medium")){
            if (mediumService.deleteById(scoreId)) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }
        else if(length.equalsIgnoreCase("long")){
            if (longService.deleteById(scoreId)) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }



}
