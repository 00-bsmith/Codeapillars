package capstone.trivia_game.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Results {
    @JsonProperty("results")
    private JsonNode results;

    public JsonNode getResults() {
        return results;
    }

    public void setResults(JsonNode results) {
        this.results = results;
    }
}
