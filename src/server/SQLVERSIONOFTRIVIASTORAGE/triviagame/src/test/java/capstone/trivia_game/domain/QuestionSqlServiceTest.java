package capstone.trivia_game.domain;

import capstone.trivia_game.data.QuestionJdbcTemplateRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuestionSqlServiceTest {

    @Autowired
    QuestionSqlService service;

    @MockBean
    QuestionJdbcTemplateRepository repository;

    @Test
    void shouldBuildGame() throws IOException, InterruptedException {
//        int builtGameId = service.buildGame(1);
//        int expected = 7;
//        int actual = repository.findByGameId(builtGameId).size();
//        assertEquals(expected, actual);
    }
}