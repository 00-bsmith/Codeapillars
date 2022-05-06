//package capstone.trivia_game.domain;
//
////import capstone.trivia_game.data.QuestionDatabase;
//import capstone.trivia_game.models.Question;
//import org.junit.jupiter.api.Test;
//
//import java.io.IOException;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class QuestionServiceTest {
//
////    @Test
////    void findAll() throws IOException, InterruptedException {
////        QuestionService service=new QuestionService(new QuestionDatabase(1));
////        assertEquals(service.findAll().size(),7);
////    }
////
////    @Test
////    void getNext() throws IOException, InterruptedException {
////        QuestionService service=new QuestionService(new QuestionDatabase(1));
////        int current=service.getNumAvailable();
////        Question next = service.getNext();
////        int less = service.getNumAvailable();
////        assertNotNull(next);
////        assertTrue(less<current);
////        next.setAnswered(true);
////        next.setCorrect(true);
////        next.setEarnedPoints(95);
////        System.out.println("done");
////    }
//
//    @Test
//    void getNumAvailable() {
//    }
//}