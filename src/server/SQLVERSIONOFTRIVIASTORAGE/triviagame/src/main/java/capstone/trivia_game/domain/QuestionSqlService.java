package capstone.trivia_game.domain;

import capstone.trivia_game.data.QuestionRepository;
import capstone.trivia_game.models.Question;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionSqlService {

    private final QuestionRepository repository;
    private final int MAX_SCORE = 100;

    public QuestionSqlService(QuestionRepository repository) {
        this.repository = repository;
    }

    public int buildGame(int type) throws IOException, InterruptedException {
        return repository.buildGame(type);
    }

    public List<Question> getAll() {
        return repository.getAll();
    }

    public List<Question> getAvailableFromGame(int gameId) {
        return repository.getAvailableFromGame(gameId);
    }

    public Question findByQuestionId(int questionId) {
        return repository.findById(questionId);
    }

    public List<Question> findByGameId(int gameId) {
        return repository.findByGameId(gameId);
    }

    public Result<Question> update(Question question) {
        Result<Question> result = validate(question);
        if (!result.isSuccess()) {
            return result;
        }

        if (question.getId() <= 0) {
            result.addMessage("Question ID must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(question)) {
            String msg = String.format("questionId: %s, not found", question.getId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteByGame(int gameId) {
        return repository.deleteByGame(gameId);
    }

    public Result<Question> add(Question question) {
        Result<Question> result = validate(question);
        if (!result.isSuccess()) {
            return result;
        }

        if (question.getId() != 0) {
            result.addMessage("questionId cannot be set for `add` operation)", ResultType.INVALID);
            return result;
        }

        question = repository.add(question);
        result.setPayload(question);
        return result;
    }

    private Result<Question> validate(Question question) {
        Result<Question> result = new Result<>();

//        if (question == null) {
//            result.addMessage("Question cannot be null", ResultType.INVALID);
//            return result;
//        }
//
//        if (Validations.isNullOrBlank(question.getQuestion())) {
//            result.addMessage("Question is required", ResultType.INVALID);
//        }
//
//        if (question.getAllAnswers() == null) {
//            result.addMessage("Question must have answers", ResultType.INVALID);
//        }
//
//        if (question.getAllAnswers().size() != 4) {
//            result.addMessage("Question must have four answers", ResultType.INVALID);
//        }
//
//        for (String answer : question.getAllAnswers()) {
//            if (Validations.isNullOrBlank(answer)) {
//                result.addMessage("Four answers are required", ResultType.INVALID);
//            }
//        }

//        if (question.getGameID() <= 0) {
//            result.addMessage("Question must have valid Game ID", ResultType.INVALID);
//        }

        if (question.getCorrect() == null) {
            result.addMessage("Question must be correct or incorrect", ResultType.INVALID);
        }

//        if (question.getAnswered() == null) {
//            result.addMessage("Question must be answered or unanswered", ResultType.INVALID);
//        }

        if (question.getEarnedPoints() < 0 || question.getEarnedPoints() > MAX_SCORE) {
            result.addMessage("Question must have earned valid points", ResultType.INVALID);
        }

//        if (question.getPointValue() != MAX_SCORE) {
//            result.addMessage("Question must have consistent max score", ResultType.INVALID);
//        }

        return result;
    }

    public Question getNext(int gameId){
        return  repository.getNext(gameId);
    }
}
