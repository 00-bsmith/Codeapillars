import React, { useState } from "react";
import Score from "./Score";
import Round from "./Round";
import Timer from "../Clock/Timer";
import Question from "../Gameplay/Question";
import './Game.css';


const Game = () => {

  const [currentScore, setCurrentScore] = useState(0);
  const [currentRound, SetCurrentRound] = useState(1);

  const getScore = (newScore) => {
    setCurrentScore(currentScore + newScore);

  }

  const getRound = (round) => {
    SetCurrentRound(round + 1);
  }

  return (
    <>
      <div className="container mt-2">
        <div className="row">

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Round #</p>
              <Round currentRound={currentRound}/>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <Timer getScore={getScore} getRound={getRound}/>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Total Score:</p>
              <Score currentScore={currentScore}/>
            </div>
          </div>

        </div>
      </div>

    <div>     
      <h4><img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Good Luck!</h4>
    </div>


<div className="container mt-4">
    <div className="row">
      {/* <Question /> */}
    </div>
 </div>

    </>
  );
};
export default Game;
