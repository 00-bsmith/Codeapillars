import React, { useState } from 'react';
import Score from './Score';

const FinalResults = () => {

  const [currentScore, setCurrentScore] = useState(0);

  
  return (
      <>
    <div>Final Results</div>

    <div className="container mt-2">

    <div className="row">
            <div className="text-center">
              <img src={"images/TP-sm-med.png"} alt="TriviaPillar" style={{width: '90px'}}/>
                 Good Effort! Here is your game summary!
            </div>
          </div>

        <div className="row">
          <div className="col">
            <div className="text-center">
              <p>Your Total Score is: <Score currentScore={currentScore}/></p>
            </div>
          </div>



        </div>
      </div>

     
  



    </>
  )
}

export default FinalResults