import React, { useState } from "react";
import { Link } from "react-router-dom";
import Score from "./Score";

const FinalResults = () => {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <div></div>

    <div className="container mt-2 mb-4">

    <div style={{fontSize: 30}}className="row">
            <div className="text-center">
              <img src={"images/TP-sm-med.png"} alt="TriviaPillar" style={{width: '90px'}}/>
                 Good Effort!
            </div>
            <div className="text-center">
            Here is your round summary!
            </div>
          </div>
        </div>
      
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="text-center">
              Your Total Score is: <Score currentScore={currentScore} />
            </div>
          </div>

          <div className="col">
            <form className="form-inline">
              <label className="sr-only" for="inlineFormInputName2">
                Enter 3 Initials for the Leaderboards
              </label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="3 Initials"
                maxLength={3}
              />

              <div className="col">
            <button type="submit" className="btn btn-success mb-2">Submit</button>
            </div>
            
            </form>
          </div>
        </div>
      </div>

      <br />

      <div className="text-center">
      <Link to="/gamelength" className="btn btn-danger mb-3 ml-2 ">Play Again</Link>
      </div>

      

      <p>Final Results - this isn't grabbing the the correct score yet.</p>
    </>
  );
};

export default FinalResults;
