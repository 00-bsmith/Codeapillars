package capstone.trivia_game.data;


import capstone.trivia_game.data.mappers.ScoreMapper;
import capstone.trivia_game.models.ScoreEntry;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class ShortScoreJdbcTemplateRepository implements ScoreRepository{

    private final JdbcTemplate jdbcTemplate;

    public ShortScoreJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ScoreEntry> findAll() {
        final String sql="select scoreId, initials, score, date from short_high_score;";
        return jdbcTemplate.query(sql, new ScoreMapper());
    }

    @Override
    @Transactional
    public List<ScoreEntry> findByInitials(String initials) {
        final String sql = "select scoreId, initials, score, date from short_high_score " +
                "where initials = ?;";

        return jdbcTemplate.query(sql, new ScoreMapper(), initials);
    }

    @Override
    @Transactional
    public ScoreEntry findById(int scoreId) {
        final String sql = "select scoreId, initials, score, date from short_high_score " +
                "where scoreId = ?;";

        ScoreEntry scoreEntry = jdbcTemplate.query(sql, new ScoreMapper(), scoreId).stream()
                .findFirst().orElse(null);


        return scoreEntry;
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
    @Transactional
    public boolean deleteById(int scoreId) {
        return false;
    }
}
