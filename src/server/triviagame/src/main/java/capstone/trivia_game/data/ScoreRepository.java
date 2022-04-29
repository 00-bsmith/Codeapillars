package capstone.trivia_game.data;

import capstone.trivia_game.models.ScoreEntry;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ScoreRepository {

    List<ScoreEntry> findAll();

    List<ScoreEntry> findByInitials(String initials);

    ScoreEntry findById(int scoreId);

    boolean add (ScoreEntry entry);

    boolean update (ScoreEntry entry);

    @Transactional
    boolean deleteById(int scoreId);
}
