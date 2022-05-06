import React from "react";
import { Link } from "react-router-dom";

const GameLength = () => {
  
  const handleSubmit = async () => {
    //Fetch Http response here
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
          <select id="length" name="length">
            <option value="">[Select Game Length]</option>
            <option value="short">Short (7 Rounds)</option>
            <option value="medium">Medium (15 Rounds)</option>
            <option value="long">Long (30 Rounds)</option>
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
