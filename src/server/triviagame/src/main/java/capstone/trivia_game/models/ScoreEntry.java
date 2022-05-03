package capstone.trivia_game.models;

import java.time.LocalDateTime;

public class ScoreEntry {

    private int scoreId;
    private String initials;
    private int score;
    private LocalDateTime scoreDateTime;


    public ScoreEntry(int scoreId, String initials, int score, LocalDateTime scoreDateTime) {
        this.scoreId = scoreId;
        this.initials = initials;
        this.score = score;
        this.scoreDateTime = scoreDateTime;
    }

    public ScoreEntry() {
    }

    public int getScoreId() {
        return scoreId;
    }

    public void setScoreId(int scoreId) {
        this.scoreId = scoreId;
    }

    public String getInitials() {
        return initials;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public LocalDateTime getScoreDateTime() {
        return scoreDateTime;
    }

    public void setScoreDateTime(LocalDateTime scoreDateTime) {
        this.scoreDateTime = scoreDateTime;
    }
}
