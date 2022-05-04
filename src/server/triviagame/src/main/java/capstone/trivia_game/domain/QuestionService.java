package capstone.trivia_game.domain;

import capstone.trivia_game.data.QuestionDatabase;
import capstone.trivia_game.models.Question;

import javax.xml.crypto.Data;
import java.util.List;
import java.util.Random;

public class QuestionService {
    private final QuestionDatabase database;

    public QuestionService(QuestionDatabase database) {
        this.database = database;
    }

    List<Question> findAll(){
        return database.getQuestionList();
    }
    Question getNext(){
        Random rand=new Random();

        if (database.getAvailable().size()==0){
            return null;
        }
        do{
            int randInt= rand.nextInt(database.getAvailable().size());
            if(database.getQuestionList().get(database.getAvailable().get(randInt)).getAnswered()==false){
                return database.getQuestionList().get(database.getAvailable().remove(randInt));
            }
        }while(true);

    }
    int getNumAvailable(){
        return database.getAvailable().size();
    }

    Question getQuestionAt(int index){
        return database.getQuestionList().get(index);
    }
}
