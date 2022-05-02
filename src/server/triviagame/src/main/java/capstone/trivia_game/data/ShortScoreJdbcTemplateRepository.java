package capstone.trivia_game.data;


import capstone.trivia_game.data.mappers.ScoreMapper;
import capstone.trivia_game.models.ScoreEntry;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

@Repository
public class ShortScoreJdbcTemplateRepository implements ScoreRepository{

    private final JdbcTemplate jdbcTemplate;

    public ShortScoreJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ScoreEntry> findAll() {
        final String sql="select score_id, initials, score, date from short_high_score;";
        return jdbcTemplate.query(sql, new ScoreMapper());
    }

    @Override
    @Transactional
    public List<ScoreEntry> findByInitials(String initials) {
        final String sql = "select score_id, initials, score, date from short_high_score " +
                "where initials = ?;";

        return jdbcTemplate.query(sql, new ScoreMapper(), initials);
    }

    @Override
    @Transactional
    public ScoreEntry findById(int scoreId) {
        final String sql = "select score_id, initials, score, date from short_high_score " +
                "where score_id = ?;";

        ScoreEntry scoreEntry = jdbcTemplate.query(sql, new ScoreMapper(), scoreId).stream()
                .findFirst().orElse(null);


        return scoreEntry;
    }

    @Override
    public ScoreEntry add(ScoreEntry entry) {
        final String sql = "insert into short_high_score (initials, score, date) values (?, ?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection ->{
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            //ps.setInt(1, entry.getScoreId());
            ps.setString(1, entry.getInitials());
            ps.setInt(2, entry.getScore());
            ps.setTimestamp(3, Timestamp.valueOf(entry.getScoreDateTime()));
            return ps;
        }, keyHolder);

        if (rowsAffected <=0){
            return null;
        }
        entry.setScoreId(keyHolder.getKey().intValue());
        return entry;
    }

    @Override
    public boolean update(ScoreEntry entry) {

        final String sql = "update short_high_score set " +
                "initials = ?, " +
                "score = ?, " +
                "date=? " +
                "where score_id = ?;";

        return jdbcTemplate.update(sql,
                entry.getInitials(),
                entry.getScore(),
                Timestamp.valueOf(entry.getScoreDateTime()),
                entry.getScoreId())>0;


    }

    @Override
    @Transactional
    public boolean deleteById(int scoreId) {
        return jdbcTemplate.update("delete from short_high_score where score_id = ?;", scoreId)>0;

    }
}
