package capstone.trivia_game.data;

import capstone.trivia_game.models.ScoreEntry;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ShortScoreJdbcTemplateRepositoryTest {

    @Autowired
    ShortScoreJdbcTemplateRepository repository;
    //known good state isnt hard coded
    //use this
    /*
    * insert into short_high_score (initials, score, date) values ("BJS", "1021", now());
insert into short_high_score (initials, score, date) values ("2FH", "1025", now());
insert into short_high_score (initials, score, date) values ("2FH", "988", now());
    * */

    @Test
    void findAll() {
        List<ScoreEntry> entries = repository.findAll();
        assertNotNull(entries);
        assertEquals(entries.size(), 3);
    }

    //where operations are case insensitive, so 2FH=2fh
    @Test
    void findByInitials() {
        List<ScoreEntry> entries = repository.findByInitials("2FH");
        assertNotNull(entries);
        assertEquals(entries.size(), 2);

        entries = repository.findByInitials("Kek");
        assertEquals(entries.size(), 0);
    }

    @Test
    void findById() {
        ScoreEntry entry = repository.findById(1);
        assertNotNull(entry);
        assertEquals(1021, entry.getScore());

        entry = repository.findById(1000);
        assertNull(entry);
    }

    @Test
    void add() {
        ScoreEntry entry = new ScoreEntry();
        entry.setScore(2000);
        entry.setInitials("n3w");
        entry.setScoreDateTime(LocalDateTime.now());
        ScoreEntry actual = repository.add(entry);
        assertNotNull(actual);
        assertEquals(actual.getScoreId(), 4);
    }

    @Test
    void update() {
        ScoreEntry entry = repository.findById(4);
        entry.setScore(2222);
        assertTrue(repository.update(entry));
    }

    @Test
    void deleteById() {
        assertTrue(repository.deleteById(4));
        assertFalse(repository.deleteById(1000));
    }
}