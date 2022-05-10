import React, { useEffect, useState } from "react";
import Score from "./Score";
import Round from "./Round";
import Timer from "../Clock/Timer";
import Question from "../Gameplay/Question";
import "./Game.css";

const Game = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentRound, SetCurrentRound] = useState(1);
  

  const [gameId, setGameId] = useState(0);
  const [errors, setErrors] = useState([]);

  const [questionSwitch, setQuestionSwitch] = useState(0);

  const getScore = (newScore) => {
    setCurrentScore(currentScore + newScore);
  };

  const getRound = (round) => {
    SetCurrentRound(round + 1);
  };

  const buildGame = async () => {
    //Fetch Http response here
    try {
      const response = await fetch(
        `http://localhost:8080/api/question/build/${props.type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 400) {
        const data = await response.json();
        console.log(data);
        // This may be the part that isn't
        if (data != 0) {
          setGameId(data);
          if (data) {
            // console.log("Game ID: " + data);
          }
        } else {
          setErrors(data);
        }
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }

    // fetch(
    //   `http://localhost:8080/api/question/build/${props.type}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then((response) => response.json())
    // .then((data) => setGameId(data))
    // .catch((error) => console.log(error));
  };

  useEffect(() => {
    buildGame();
    console.log("type: " + props.type);
  }, []);

  useEffect(() => {
    console.log("Game ID: " + gameId);
    if (gameId !== 0) {
      setQuestionSwitch(1);
    }
  }, [gameId])

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Round #</p>
              <Round currentRound={currentRound} />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <Timer getScore={getScore} getRound={getRound} />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Total Score:</p>
              <Score currentScore={currentScore} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>
          <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
          Good Luck!
        </h4>
      </div>

      {questionSwitch === 1 ? (
        <div className="container mt-4">
          <div className="row">
            <Question gameId={gameId} />
            {/* <AnswerOptions /> */}
          </div>
        </div>
      ) : (
        "Getting question..."
      )}
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
