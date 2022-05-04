import React from 'react';
import ReactDOM from "react-dom";
import CountdownClock from './Clock/CountdownClock';


const Game = () => {
  return (
      <>

<div className="container">
  <div className="row">

    <div className="col">
      <div className='text-center'>
      Round #
      </div>
    </div>

    <div className="col">
    <div className='text-center'>
      <CountdownClock />
      </div>
    </div>

    <div className="col">
      <div className='text-center'>
      Score:
      </div>
    </div>

  </div>
</div>


    <div>     
      <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Let's Play a Game! Choose length of game:
    </div>

    {/* Show options for a short (7), medium (15), or long (30) game */}
    {/* once selected, have a message like: Get ready! and then the count down clock starts 3 seconds */}

<div>
<h2>Question:</h2>
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
