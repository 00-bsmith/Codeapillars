import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";

function CountdownClock() {

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

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default CountdownClock;

// import React, { useRef, useState } from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";

// import "./styles.css";

// const CountdownClock = ({ remainingTime }) => {
//   const currentTime = useRef(remainingTime);
//   const prevTime = useRef(null);
//   const isNewTimeFirstTick = useRef(false);
//   const [, setOneLastRerender] = useState(0);

 

//   if (currentTime.current !== remainingTime) {
//     isNewTimeFirstTick.current = true;
//     prevTime.current = currentTime.current;
//     currentTime.current = remainingTime;
//   } else {
//     isNewTimeFirstTick.current = false;
//   }

//   // force one last re-render when the time is over to tirgger the last animation
//   if (remainingTime === 0) {
//     setTimeout(() => {
//       setOneLastRerender((val) => val + 1);
//     }, 20);
//   }

//   const isTimeUp = isNewTimeFirstTick.current;

//   return (
//     <div className="time-wrapper">
//       <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
//         {remainingTime}
//       </div>
//       {prevTime.current !== null && (
//         <div
//           key={prevTime.current}
//           className={`time ${!isTimeUp ? "down" : ""}`}
//         >
//           {prevTime.current}
//         </div>
//       )}
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//     <div className="App">
     
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying
//           duration={10}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           // size={2px}
//           onComplete={() => ({ shouldRepeat: true, delay: 2 })}
//         >
//           {CountdownCircleTimer}
//         </CountdownCircleTimer>
//       </div>
//     </div>
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// export default CountdownClock;