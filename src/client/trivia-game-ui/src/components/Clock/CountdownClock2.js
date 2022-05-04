import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CountdownClock from "./CountdownClock";

export function CountdownClock2() {

  const CountdownClock2 = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too Late</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Guess</div>
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
          duration={15}
          // size={2px}
          colors={["#94d2bd", "#ffb703", "#f77f00", "#ae2012"]}
          colorsTime={[10, 7, 6, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        >
          {CountdownClock2}
        </CountdownCircleTimer>
      </div>
    </div>
  );

  }