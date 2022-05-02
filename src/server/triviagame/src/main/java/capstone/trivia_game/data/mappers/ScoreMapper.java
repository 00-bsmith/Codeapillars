package capstone.trivia_game.data.mappers;

import capstone.trivia_game.models.ScoreEntry;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ScoreMapper implements RowMapper<ScoreEntry> {

    @Override
    public ScoreEntry mapRow(ResultSet resultSet, int i)throws SQLException{
        ScoreEntry scoreEntry = new ScoreEntry();
        scoreEntry.setScoreId(resultSet.getInt("score_id"));
        scoreEntry.setScore((resultSet.getInt("score")));
        scoreEntry.setInitials(resultSet.getString("initials"));
        if(resultSet.getTimestamp("date")!=null){
            scoreEntry.setScoreDateTime(resultSet.getTimestamp("date").toLocalDateTime());
        }

        return scoreEntry;
    }
}
