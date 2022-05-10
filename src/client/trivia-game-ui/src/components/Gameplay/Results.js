import React from "react";
import { Link } from "react-router-dom";

const Results = () => {

// write roundResult function: 
//if correct answer = "That's right!"
//if wrong answer = "Nope, wrong answer."
//Then display the {question} and the {correct_answer}
//display their score for this round

//PERHAPS this all goes into Game.js?


  return (
    <>
      <div>Results</div>

      <div>
        {/* run roundResult()  */}
      </div>


      <div>
        <Link to="/game" className="btn btn-success  mb-3 ml-2">
          Next Question
          {/* this needs to just START the NEXT round timer and increment the round right now it just brings you back to Game.js and the timer starts all over again from the first round*/}
        </Link>
      </div>

      
    </>
  );
};

export default Results;

