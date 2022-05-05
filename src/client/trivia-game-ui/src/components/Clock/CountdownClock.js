import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";
import { CountdownClock2 } from "./CountdownClock2";

function CountdownClock() {

  const CountdownClock = ({ remainingTime }) => {
    if (remainingTime === 0) {
    //   return <div className="timer">Start Guessing...</div>;
    // }
    return <CountdownClock2 />
  }
  
    return (
      <div className="timer">
        <div className="text">Get Ready</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

 
  return (
    <div className="App">    
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#94d2bd", "#ffb703", "#f77f00", "#ae2012"]}
          colorsTime={[10, 7, 6, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 0 })}
          // need to switch to CountdownClock2 as soon as this one finishes
        >
          {CountdownClock}
          
        </CountdownCircleTimer>
      </div>
    </div>
  );


}

export default CountdownClock;

