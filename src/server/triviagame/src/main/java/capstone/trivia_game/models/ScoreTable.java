package capstone.trivia_game.models;
import capstone.trivia_game.models.ScoreEntry;

import java.util.List;
//This may not be needed, just prematurely made this in case it was useful down the road -Bryan
public class ScoreTable {
    List<ScoreEntry> entries;

    public ScoreTable(List<ScoreEntry> entries) {
        this.entries = entries;
    }

    public List<ScoreEntry> getEntries() {
        return entries;
    }

    public void setEntries(List<ScoreEntry> entries) {
        this.entries = entries;
    }
}
