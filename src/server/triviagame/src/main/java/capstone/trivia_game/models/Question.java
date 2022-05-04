package capstone.trivia_game.models;

import java.util.List;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Question {
    private int pointValue;
    private List<String> allAnswers; //Might use this for pulling out and randomizing order of answers
    //allAnswers[0] will always be the right answer
    private String question;
    private Boolean answered;
    private Boolean correct;
    private int earnedPoints;

    public Question(int pointValue, List<String> allAnswers, String question, Boolean answered, Boolean correct, int earnedPoints) {
        this.pointValue = pointValue;
        this.allAnswers = allAnswers;
        this.question = question;
        this.answered = answered;
        this.correct = correct;
        this.earnedPoints = earnedPoints;
    }

    public int getPointValue() {
        return pointValue;
    }

    public void setPointValue(int pointValue) {
        this.pointValue = pointValue;
    }

    public List<String> getAllAnswers() {
        return allAnswers;
    }

    public void setAllAnswers(List<String> allAnswers) {
        this.allAnswers = allAnswers;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Boolean getAnswered() {
        return answered;
    }

    public void setAnswered(Boolean answered) {
        this.answered = answered;
    }

    public Boolean getCorrect() {
        return correct;
    }

    public void setCorrect(Boolean correct) {
        this.correct = correct;
    }

    public int getEarnedPoints() {
        return earnedPoints;
    }

    public void setEarnedPoints(int earnedPoints) {
        this.earnedPoints = earnedPoints;
    }

    public Question(ImportQuestion iq){
        pointValue=100;
        this.question= iq.getQuestion();
        answered=false;
        correct=false;
        earnedPoints=0;
        this.allAnswers=new ArrayList<>();
        this.allAnswers.add(iq.getCorrect_answer());
        this.allAnswers.addAll(Arrays.asList(iq.getIncorrect_answers()));
    }
    public Question(){};

    static public List<Question> listFunction(ImportQuestion[] iq){
        List<Question> list = new ArrayList<>();
        for (int i = 0; i < iq.length; i++) {
            list.add(i,new Question(iq[i]));
        }
        return list;
    }

}