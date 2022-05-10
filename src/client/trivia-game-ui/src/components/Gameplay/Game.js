import React, { useState } from "react";
import Score from "./Score";
import Round from "./Round";
import Timer from "../Clock/Timer";
import Question from "../Gameplay/Question";
import './Game.css';
import { Link } from "react-router-dom";



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

     
    <div style={{display: 'flex', justifyContent: 'center'}}>  
      <h4><img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Good Luck!</h4>
    </div>
    

<div className="container mt-4">
    <div className="row">
      {/* <Question /> */}
      {/* <AnswerOptions /> */}
    </div>
 </div>

{/* // write roundResult function:  */}
{/* if correct answer = "That's right!" */}
{/* if wrong answer = "Nope, wrong answer." */}
{/* Then display the {question} and the {correct_answer} */}
{/* /display their score for this round */}
{/*       Next Question
          {/* this needs to just START the NEXT round timer and increment the round*/} 


 {/* These buttons being here stopped the timer from working correctly */}
 {/* <div className="row">

<div className="col">
  <p>These buttons are here just to access the pages for styling and functionality</p>
</div>
  <div className="col">
      <Link to="/results" className="btn btn-warning mb-3 ml-2">Results</Link>
    </div>
  
  <div className="col">
      <Link to="/finalResults" className="btn btn-danger mb-3 ml-2">Final Results</Link>
    </div>
</div>   */}

    </>
  );
};
export default Game;
