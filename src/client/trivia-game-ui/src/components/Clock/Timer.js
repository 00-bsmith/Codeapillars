import React from 'react';
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import "./styles.css";


function Timer(props) {

  const [key, setKey] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);

  const [counter, setCounter] = useState(0);

  // const [difficulty, setDifficulty] = useState("Easy");

  const [difficulty, setDifficulty] = useState("Medium");

  // const [difficulty, setDifficulty] = useState("Hard");

  const [duration, setDuration] = useState(5);

  const [remainingTime, setRemainingTime] = useState(duration);

// below is my attempt at dynamic text inside the clock. I don't know what to put in the ()
  // const [timerText, setTimerText] = useState("");



console.log("Counter: " + counter);

console.log("Duration: " + duration);



  const renderTime = ({ remainingTime, shouldRepeat }) => {

    if (remainingTime === 0) {

    return <div className="timer">Time is up!</div>;

    } 



  return (

    <div className="timer">

    {/* Since I couldn't get the text to be dynamic, I chose to have no text */}
    {/* <div className="text">Get Ready...</div> */}
    {/* <div className="text">{timerText}</div> */}

    <div className="value">{remainingTime}</div>

    <div className="text">seconds</div>

    </div>

 );

};

 
 return (
 <>

  <div className="timer-wrapper">

    <CountdownCircleTimer

    key={key}

    isPlaying={isPlaying}

    duration={duration}  // durationn is a number i.e. duration={5}

    colors={["#0a9396", "#ffb703", "#f77f00", "#ae2012"]}

     colorsTime={[5, 3, 1, 0]}
    

    // timerText={timerText}

    //  original parameter:   onComplete={() => ({ shouldRepeat: true, delay: 0 })}

    onComplete={() => {

      if (difficulty === "Easy") {

        if(counter === 1) {

          setRemainingTime(0);

          setIsPlaying(false);

        } else {


          setDuration(duration + 20);

          setKey((prevKey) => prevKey + 1);

          setCounter(1);

          // setTimerText("Guess")  //not sure what should be in the ()

         }

       } else if (difficulty === "Medium") {

         if(counter === 1) {

           setRemainingTime(0);

           setIsPlaying(false);

         } else {

             // originally was (duration + 15) changed to 10 so timer would be 15 seconds.
             // the other two (easy and hard) are not rendering since their useState const is commented out at the top.
           setDuration(duration + 10); 

             setKey((prevKey) => prevKey + 1);

             setCounter(1);

         }

       } else if (difficulty === "Hard") {

         if(counter === 1) {

           setRemainingTime(0);

           setIsPlaying(false);

         } else {

           setDuration(duration + 10);

           setKey((prevKey) => prevKey + 1);

           setCounter(1);

         }

       } 

         if(counter === 1) {

             setRemainingTime(0);

             setIsPlaying(false);

         }

           return { shouldRepeat:true, delay: 0 }

   }}

     >

         {/* {({ remainingTime }) => remainingTime} */}

   

         {renderTime}

       </CountdownCircleTimer>

        {/* this button resets the timer to the second duration amount */}
            {/* <div className="button-wrapper">

              <button onClick={() => setKey((prevKey) => prevKey + 1)}>

              Next Question

              </button>

            </div> */}
         

     </div>

     </>

 );

}



export default Timer;