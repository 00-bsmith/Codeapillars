import React from "react";
import Score from "./Score";
import Round from "./Round";
import Timer from "../Clock/Timer";
// import Question from "./Question";

const Game = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Round #</p>
              <Round />
              {/* Perhaps pass dynamic {round} to be displayed here directly rather than pass to Round.js first?? */}
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
              <p className="columnHeader">Total Score:</p>
              <Score />
              {/* Dynamic {score} will need to go first to Score.js to be added to previous score and then displayed as Total Score...OR can that be done here as well? */}
            </div>
          </div>

        </div>
      </div>

    <div>     
      <h4><img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Good Luck!</h4>
    </div>


    </>
  );
};
export default Game;
