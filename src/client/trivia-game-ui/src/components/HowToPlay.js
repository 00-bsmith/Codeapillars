import React from 'react';

const HowToPlay = () => {
  return (
      <>
      
    <h2>How To Play</h2>
    <div>
      &nbsp;
    </div>
    <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
    <div>
      Welcome, players! This is a brief guide on how to play TriviaPillar.
    </div>

    <br/>
    
    <div>
      First, when you click the button to start a new game, you will be given a choice to play a short, medium, or long game.
    </div>

    <br/>
  
    <div>
      A short game consists of seven rounds, a medium game is fifteen rounds, and a long game has thirty rounds.
    </div>

    <br/>

    <div>
      During each round, you will be asked a single multiple-choice trivia question from any of a number of subjects. 
    </div>

    <br/>

    <div>
      You will first be given five seconds to read the question, and will not be able to answer the question during that time. 
    </div>

    <br/>

    <div>
      After the five seconds have elapsed, you will be given fifteen seconds to select and submit an answer to the question. 
    </div>

    <br/>

    <div>
      If you answer the question correctly, you will be awarded points based on how quickly you answered the question, with your maximum score being 100 points per round. If you answered incorrectly or did not submit an answer in time, you will be awarded zero points.
    </div>

    <br/>

    <div>
      After the final round concludes, you will be shown a list of the questions you were asked, along with the correct answers and your final score.
    </div>

    <br/>

    <div>
      If you receive a high enough final score, you will be prompted to enter your initials and will be shown on our leaderboard!
    </div>

    <br/>
    
    </>
  );
}

export default HowToPlay;