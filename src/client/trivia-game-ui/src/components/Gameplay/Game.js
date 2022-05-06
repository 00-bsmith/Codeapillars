import React from "react";
// import CountdownClock from "../Clock/CountdownClock";
import Score from "./Score";
import Round from "./Round";
import Timer from "../Clock/Timer";
// import { CountdownClock2 } from "../Clock/CountdownClock2";

const Game = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Round #</p>
              <Round />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              {/* <CountdownClock /> */}
              <Timer />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Score:</p>
              <Score />
            </div>
          </div>

        </div>
      </div>

    <div>     
      <h4><img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Good Luck!</h4>
    </div>

{/* <h2>Question:</h2> */}
    {/* FETCH/pull in the question have it hold for a 5 seconds to allow for reading the question*/}

    {/* then FETCH/pull in the answer options each as buttons */}

    {/* as soon as these appear, start the countdown clock again 15 seconds */}
    {/* once an answer is chosen, the clock stops and the next question comes up */}


{/* after the final question, direct to results screen to show the final score and correct answers */}

    </>
  );
};
export default Game;
