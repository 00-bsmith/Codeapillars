package capstone.trivia_game.domain;

import capstone.trivia_game.data.ShortScoreJdbcTemplateRepository;
import capstone.trivia_game.models.ScoreEntry;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class LongScoreServiceTest {
    @Autowired
    ShortScoreService service;

    @MockBean
    ShortScoreJdbcTemplateRepository repository;

    @Test
    void shouldFindSRB() {
        ScoreEntry expected = makeScoreEntry();
        when(repository.findById(1)).thenReturn(expected);
        ScoreEntry actual = service.findById(1);
        assertEquals(expected, actual);
    }

    @Test
    void shouldNotAddWhenInvalid() {
        ScoreEntry scoreEntry = makeScoreEntry();
        Result<ScoreEntry> result = service.add(scoreEntry);
        assertEquals(ResultType.INVALID, result.getType());

        scoreEntry.setScoreId(0);
        scoreEntry.setScore(10000);
        result = service.add(scoreEntry);
        assertEquals(ResultType.INVALID, result.getType());

        scoreEntry.setScore(500);
        scoreEntry.setInitials("s3x");
        result = service.add(scoreEntry);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldAddWhenValid() {
        ScoreEntry expected = makeScoreEntry();
        ScoreEntry arg = makeScoreEntry();
        arg.setScoreId(0);

        when(repository.add(arg)).thenReturn(expected);
        Result<ScoreEntry> result = service.add(arg);
        assertEquals(ResultType.SUCCESS, result.getType());

        assertEquals(expected, result.getPayload());
    }

    ScoreEntry makeScoreEntry() {
        ScoreEntry scoreEntry = new ScoreEntry();
        scoreEntry.setScoreId(1);
        scoreEntry.setScore(500);
        scoreEntry.setInitials("SRB");
        scoreEntry.setScoreDateTime(LocalDateTime.now());
        return scoreEntry;
    }
}