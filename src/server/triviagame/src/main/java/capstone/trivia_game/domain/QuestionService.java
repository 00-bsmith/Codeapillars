package capstone.trivia_game.domain;

import capstone.trivia_game.data.QuestionDatabase;
import capstone.trivia_game.models.Question;

import javax.xml.crypto.Data;
import java.io.IOException;
import java.util.List;
import java.util.Random;

public class QuestionService {
    private final QuestionDatabase database;
    private int id;

    public QuestionService(QuestionDatabase database) {
        this.database = database;
    }
    public QuestionService(int type) throws IOException, InterruptedException {
        this.database=new QuestionDatabase(type);
    }

    List<Question> findAll(){
        return database.getQuestionList();
    }
    Question getNext(){
        Random rand=new Random();
        int precaution=0;

        if (database.getAvailable().size()==0){
            return null;
        }
        do{
            int randInt= rand.nextInt(database.getAvailable().size());
            if(database.getQuestionList().get(database.getAvailable().get(randInt)).getAnswered()==false){
                return database.getQuestionList().get(database.getAvailable().remove(randInt));
            }
            precaution++;
        }while(precaution<3);
        return null;
    }
    int getNumAvailable(){
        return database.getAvailable().size();
    }

    Question getQuestionAt(int index){
        return database.getQuestionList().get(index);
    }

    void updateQuestion(int index, Boolean answered, Boolean correct, int earnedPoints){
       Question question = database.getQuestionList().get(index);
       question.setAnswered(answered);
       question.setCorrect(correct);
       question.setEarnedPoints(earnedPoints);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
