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

        if (question == null) {
            result.addMessage("Question cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(question.getQuestion())) {
            result.addMessage("Question is required", ResultType.INVALID);
        }

        for (String answer : question.getAllAnswers()) {
            if (Validations.isNullOrBlank(answer)) {
                result.addMessage("Four answers are required", ResultType.INVALID);
            }
        }
        return result;
    }
}
