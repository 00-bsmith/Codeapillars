import { useState } from "react";
import { Link } from "react-router-dom";

const GameLength = (props) => {

  const [type, setType] = useState("");
  const [gameId, setGameId] = useState(0)
  const [errors, setErrors] = useState([]);
  
  const handleSubmit = async () => {
    //Fetch Http response here
    try { const response = await fetch(`http://localhost:8080/api/question/build/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.status === 201 || response.status === 400) {
      const data = await response.json();
      // This may be the part that isn't  
      if (data.gameId) {
        setGameId(data.gameId)
        console.log("Game ID:" + gameId);
      } else {
        setErrors(data);
      }
    } else {
      throw new Error("Server Error: Something unexpected went wrong.");
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      <div>
        <h1>
          <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
          Let's Play a Game! Choose length of game:
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="gameLength">Short Game - 7 Rounds</h4>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className="gameLength">Medium Game - 15 Rounds</h4>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className="gameLength">Long Game - 30 Rounds</h4>
          </div>
        </div>

        <br />

        <div className="row">
          <select id="length" name="length" onChange={(event) => setType(event.target.value)}>
            <option value="">[Select Game Length]</option>
            <option value="1">Short (7 Rounds)</option>
            <option value="2">Medium (15 Rounds)</option>
            <option value="3">Long (30 Rounds)</option>
          </select>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col">
            <Link
              to="/game"
              className="btn btn-success mb-3 ml-2"
              type="submit"
              onClick={() => handleSubmit() } // API call here
            >
              Start Game
            </Link>
          </div>
        </div>

    
      </div>
 
    </>
  );
};

export default GameLength;
