package capstone.trivia_game.data;

import capstone.trivia_game.models.ScoreEntry;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LongScoreJdbcTemplateRepository implements ScoreRepository{
    @Override
    public List<ScoreEntry> findAll() {


        return null;
    }

    @Override
    public List<ScoreEntry> findByInitials(String initials) {
        return null;
    }

    @Override
    public ScoreEntry findById(int scoreId) {
        return null;
    }

    @Override
    public boolean add(ScoreEntry entry) {
        return false;
    }

    @Override
    public boolean update(ScoreEntry entry) {
        return false;
    }

    @Override
    public boolean deleteById(int scoreId) {
        return false;
    }
}
