package capstone.trivia_game.domain;

import capstone.trivia_game.data.QuestionJdbcTemplateRepository;
import capstone.trivia_game.models.Question;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class QuestionSqlServiceTest {

    @Autowired
    QuestionSqlService service;

    @MockBean
    QuestionJdbcTemplateRepository repository;

    @Test
    void shouldFindQuestion() {
        Question expected = makeQuestion();
        when(repository.findById(1)).thenReturn(expected);
        Question actual = service.findByQuestionId(1);
        assertEquals(expected, actual);
    }

    @Test
    void shouldNotAddWhenInvalid() {
        Question question = makeQuestion();
        Result<Question> result = service.add(question);
        assertEquals(ResultType.INVALID, result.getType());

        question.setId(0);
        question.setCorrect(null);
        result = service.add(question);
        assertEquals(ResultType.INVALID, result.getType());

        question.setCorrect(true);
        question.setEarnedPoints(10000);
        result = service.add(question);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldAddWhenValid() {
        Question expected = makeQuestion();
        Question arg = makeQuestion();
        arg.setId(0);

        when(repository.add(arg)).thenReturn(expected);
        Result<Question> result = service.add(arg);
        assertEquals(ResultType.SUCCESS, result.getType());

        assertEquals(expected, result.getPayload());
    }

    Question makeQuestion() {
        Question question = new Question();
        question.setQuestion("Which country will host the 2022 FIFA World Cup?");
        List<String> allAnswers = new ArrayList<>();
        allAnswers.add("Qatar");
        allAnswers.add("USA");
        allAnswers.add("Japan");
        allAnswers.add("Switzerland");
        question.setAllAnswers(allAnswers);
        question.setPointValue(100);
        question.setEarnedPoints(100);
        question.setCorrect(true);
        question.setAnswered(true);
        question.setGameID(1);
        question.setId(1);

        return question;
    }
}