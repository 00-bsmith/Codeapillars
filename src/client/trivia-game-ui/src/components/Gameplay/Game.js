import React from "react";
import CountdownClock from "../Clock/CountdownClock";
import Score from "./Score";
import Round from "./Round";
import { CountdownClock2 } from "../Clock/CountdownClock2";

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
              <CountdownClock />
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

    <div className="col">
    <div className='text-center'>
      <CountdownClock />
      {/* currentClock == currentClock ? <CountdownClock /> : <CountdownClock2 /> */}
    
      </div>
    </>
  );
};
export default Game;
