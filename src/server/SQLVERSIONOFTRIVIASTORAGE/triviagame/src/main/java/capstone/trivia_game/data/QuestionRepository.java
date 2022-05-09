package capstone.trivia_game.data;

import capstone.trivia_game.models.Question;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

public interface QuestionRepository {

    int buildGame(int type) throws IOException, InterruptedException;

    List<Question> getAll();
    List<Question> getAvailableFromGame(int id);
    Question findById(int id);
    List<Question> findByGameId(int id);
    boolean update(Question question);
    @Transactional
    boolean deleteByGame(int id);
    Question add(Question question);
    Question getNext(int gameId);
}
