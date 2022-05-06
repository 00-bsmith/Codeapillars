package capstone.trivia_game.data;

import capstone.trivia_game.models.Question;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class QuestionJdbcTemplateRepositoryTest {

    @Autowired
    QuestionJdbcTemplateRepository repository;

    @Test
    void getAll() {
        List<Question> all = repository.getAll();
        assertNotNull(all);
        assertTrue(all.size()>0);
    }

    @Test
    void getAvailableFromGame() {
        List<Question> game=repository.getAvailableFromGame(1);
        assertNotNull(game);
        assertEquals(1,game.size());
    }

    @Test
    void findById() {
        Question question=repository.findById(1);
        assertNotNull(question);
        assertEquals(question.getCorrect(),false);
    }

    @Test
    void findByGameId() {
        List<Question> game=repository.findByGameId(1);
        assertNotNull(game);
        assertEquals(game.size(),2);
    }

    @Test
    void update() {
        Question question=new Question();
        question.setId(3);
        question.setGameID(2);
        question.setEarnedPoints(0);
        question.setAnswered(true);
        question.setCorrect(false);
        assertTrue(repository.update(question));
    }

    @Test
    void deleteByGame() {
    }

    @Test
    void add() {
        Question question=new Question();
        question.setGameID(2);
        question.setEarnedPoints(0);
        question.setAnswered(true);
        question.setCorrect(false);
        question.setQuestion("Nothing new");
        List<String> answers=new ArrayList<>();
        answers.add("One");
        answers.add("two");
        answers.add("five");
        answers.add("DOOM");
        question.setAllAnswers(answers);
        Question out = repository.add(question);
        assertNotNull(out);
        assertTrue(out.getId()>0);
    }

    @Test
    void buildGame() throws IOException, InterruptedException {
        repository.buildGame(1);
        List<Question>all=repository.getAll();
        System.out.println(all);
    }
}