import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";

const CountdownClock = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Start Guessing...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Get Ready</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
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
          {CountdownClock}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default CountdownClock;

