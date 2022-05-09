import React from "react";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";

function Timer(props) {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [seconds, setSeconds] = useState(0);
  // const [counter, setCounter] = useState(1);  //switched counter to round
  const [round, setRound] = React.useState(1);
  // const [elapsedTime, setElapsedTime] = useState(0);
  const [score, setScore] = React.useState(0);

  // NEED to find a way to set the final score to 0 if 0 time is left
  const [zero, setZero] = useState(0);

  // const [difficulty, setDifficulty] = useState("Easy");
  // const [difficulty, setDifficulty] = useState("Medium");
  const [difficulty, setDifficulty] = useState("Hard");

  const [duration, setDuration] = useState(5);
  const [remainingTime, setRemainingTime] = useState(duration);

  console.log("Round: " + round);
  console.log("Duration: " + duration);

  const stopTimer = () => {
    setSeconds(currentTime);
    if (isPlaying === true) {
      calculateScore();
    }
    setIsPlaying(false);
    console.log("secs: " + currentTime);
    console.log("dur: " + duration);
    console.log("Time Stopped @: " + currentTime);
  };

  const calculateScore = () => {
    if (duration === 15) {
      const time = duration - currentTime;
      const a = time / duration;
      console.log("a: " + a);
      const b = a / 1.2;
      console.log("b: " + b);
      const c = 1 - b;
      console.log("c: " + c);
      const d = c * 100;
      console.log("d: " + d);
      const score = d;
      console.log("a: " + a);
      setScore(Math.round(score));
      props.getScore(Math.round(score));
    }
  };

  // probably wont need this restart functionality here. Perhaps on the results page to get next question? 
  const restartTimer = () => {
    setCurrentTime(seconds);
    setIsPlaying(true);
  };

  // not sure about this reset. Currently it isn't working here.
  const resetTimer = () => {
    setIsPlaying(true);
    setDuration(15);
  };

  const renderTime = ({ remainingTime }) => {
    setCurrentTime(remainingTime);
    if (remainingTime === 0) {
      return <div className="timer">Time is Up!</div>;
    }
    if (duration === 5) {
      return (
        <div className="timer">
          <div className="text">Read Question</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    } else {
      return (
        <div className="timer">
          <div className="text">Choose Answer</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    }
  };

  // Open the console to check the value for currentTime
  console.log(currentTime);


const playRound = () => {
  // there is no current difficulty, this can be modified in future iterations to include easy, medium and hard, changing the larger duration number accordingly.
  if (difficulty === "Hard") {
    if(round === 3 && duration === 15) {
      setRemainingTime(0);
      setIsPlaying(false);
    } else {
        if (duration === 5) {
          setDuration(15);
        } else {
          setRound(round+1);
          setDuration(5)
          props.getRound(round);
        }
      setKey((prevKey) => prevKey + 1);
    }
  } 
}

  
 return (
 <>

  <div className="timer-wrapper">
 
    <CountdownCircleTimer
    key={key}
    isPlaying={isPlaying}
    duration={duration}  // durationn is a number i.e. duration={5}
    colors={["#0a9396", "#ffb703", "#f77f00", "#ae2012"]}
    colorsTime={[5, 3, 1, 0]}
    
    //  original parameter:   onComplete={() => ({ shouldRepeat: true, delay: 0 })}

    onComplete={() => {

      playRound();
      if(round === 5 && duration === 15) {

      } 
    
      return { shouldRepeat: true, delay: 1.5 };
    }}
        >

      {renderTime}
     </CountdownCircleTimer>

      </div>
      <div style={{margin: "18px"}} className="round-container">
        {/* This stop-timer-button needs to ALSO submit answer !!!*/}
        <button
          type="submit"
          className="btn btn-success stop-timer-button"
          onClick={stopTimer}
        >
          Submit
        </button>
        {/* probably dont need a restart button, just here to play with for now */}
        <button
          type="submit"
          className="btn btn-warning stop-button"
          onClick={restartTimer}
        >
          restart
        </button>

        {/* Dont need this bit for functionality, it's just displayed to vew functionality for now.*/}
        {/* <p id="round">
          <br />
          Round: {round} (PRINTED OUT)
          <br />
          Duration Time: {duration - seconds} (PRINTED OUT)
          <br />
          isPlaying: {isPlaying.toString()} (PRINTED OUT)
          <br />
          SCORE: {score} (PRINTED OUT)
        </p> */}
      </div>
    </>
  );
}

export default Timer;
