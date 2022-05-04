import React from 'react';
import ReactDOM from "react-dom";
// import CountdownClock from './Clock/CountdownClock';
// import "./Clock/styles.css";
import { Link } from 'react-router-dom';


const Game = () => {
  return (
      <>

{/* HOW TO REMOVE HEADER FROM THIS PAGE??? */}

      {/* countdown clock to be left aligned (or centered?) and Score right aligned to go at top, just under Navbar  - it is a block element, taking up the full width and right now it is centered but not rendering on the page. it sometimes loads but on a white page.*/}
      {/* <CountdownClock /> */}
    <div>     
      <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Lets Play a Game! Choose length of game:
    </div>

    {/* Show options for a short (7), medium (15), or long (30) game */}
    {/* once selected, have a message like: Get ready! and then the count down clock starts 3 seconds */}

<div>
<h2>Question number</h2>
    {/* FETCH/pull in the question have it hold for a 5 seconds to allow for reading the question*/}

    {/* then FETCH/pull in the answer options each as buttons */}

    {/* as soon as these appear, start the countdown clock again 15 seconds */}
    {/* once an answer is chosen, the clock stops and the next question comes up */}


{/* after the final question, direct to results screen to show the final score and correct answers */}
  
</div>
    
    






    </>

  );
}

export default Game;
