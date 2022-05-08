import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import "./styles.css";
import Round from '../Gameplay/Round';


function Timer(props) {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [seconds, setSeconds] = useState(0);
  // const [counter, setCounter] = useState(1);  //switched counter to round
  const [round, setRound] = useState(1);
  // const [elapsedTime, setElapsedTime] = useState(0);
  const [score, setScore] = useState(0);
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
  setIsPlaying(false);
  calculateScore();
    console.log("secs: " + currentTime);
    console.log("dur: " + duration);
    console.log("Time Stopped @: " + currentTime);
  };

  const calculateScore = () => {
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
    };

    // When the timer runs out, the score is 17. It should be zero
    //if current time === 0 then score should 0 now 17.

    // const zeroScore = () => {
    //   if (remainingTime === 0 && currentTime ===0) {
    //     const z = ({score} - 17);
    //     const zero = z;
    //     setZero(0);
    //   }
    // }

  
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
                     

 
 return (
 <>

  <div className="timer-wrapper">

{/* this needs to not be here, but need to grab it's value and pass the dynamic-ness of it to Round.js to display. */}
  {/* <p><strong>(dynamic)Round: {(counter.valueOf()).toString()}</strong></p> */}
  {/* <p><strong>(dynamic)Round: {(round.valueOf()).toString()}</strong></p> */}

    <CountdownCircleTimer
    key={key}
    isPlaying={isPlaying}
    duration={duration}  // durationn is a number i.e. duration={5}
    colors={["#0a9396", "#ffb703", "#f77f00", "#ae2012"]}
    colorsTime={[5, 3, 1, 0]}
    
    //  original parameter:   onComplete={() => ({ shouldRepeat: true, delay: 0 })}

    onComplete={() => {
      if(round === 3 && duration === 15) {
        // counter is the number of rounds this needs to be dynamic!!!
        if(round === 3 && duration === 15) {
          setRemainingTime(0);
          setIsPlaying(false);
          // setZero(0);
        } else {
          if (duration === 5) {
            setDuration(15);
          } else {
            setRound(round+1);
            setDuration(5);
          }
        setKey((prevKey) => prevKey + 1);
        }
        
      } else if (difficulty === "Medium") {
        if(round === 3 && duration === 15) {
          setRemainingTime(0);
          setIsPlaying(false);
          // setZero(0);
        } else {
          if (duration === 5) {
            setDuration(15);
          } else {
            setRound(round+1);
            setDuration(5);
          }
        setKey((prevKey) => prevKey + 1);
        }

      } else if (difficulty === "Hard") {
        if(round === 3 && duration === 15) {
          setRemainingTime(0);
          setIsPlaying(false);
          // setZero(0);
        } else {
            if (duration === 5) {
              setDuration(15);
            } else {
              setRound(round+1);
              setDuration(5);
            }
          setKey((prevKey) => prevKey + 1);
        }
      }  
    // if(round === 5) {
    //     setRemainingTime(0);
    //     setIsPlaying(false);
    //   }
      return { shouldRepeat:true, delay: 1.5 }
    }}
  >
    {/* {({ remainingTime }) => remainingTime} */}
    
    {renderTime}
  </CountdownCircleTimer>
</div>

{/* GRAB round and pass to Round.js to display */}
<p id="round">
{currentTime}   Current time (PRINTED OUT) 
{setCurrentTime}
</p>

<div className="round-container">

{/* This stop-timer-button needs to ALSO submit answer !!!*/}
<button type="submit" className="btn btn-primary stop-timer-button" onClick={stopTimer}>Submit</button>
{/* probably dont need a restart button, just here to play with for now */}
<button type="submit" className="btn btn-success stop-button" onClick={restartTimer}>restart</button>

{/* Dont need this bit for functionality, it's just displayed to vew functionality for now.*/}
  <p id="round">
    <br />
      Round: {round} (PRINTED OUT)
    <br />
      Duration Time: {duration - seconds}  (PRINTED OUT)
    <br />
      isPlaying: {isPlaying.toString()} (PRINTED OUT)
    <br />
      SCORE: {score}  (PRINTED OUT)
  </p>

</div>

<Round timerToRound={round}/>
</>
);
      
}

export default Timer;

