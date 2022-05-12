import React, { useState } from "react";
import { Link } from "react-router-dom";
import Score from "./Score";

const FinalResults = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [initials, setInitials] = useState("");
  const [errors, setErrors] = useState([]);

  let length;
  let buttonSwitch = false;

  if (props.type1 === 1) {
    length = "short";
    console.log("Length: Short");
  } else if (props.type1 === 2) {
    length = "medium";
    console.log("Length: Medium");
  } else if (props.type1 === 3) {
    length = "long";
    console.log("Length: Long");
  }

  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  }

  var date = new Date();
  // date.toISOString(); //"2011-12-19T15:28:46.493Z"
  var date2 = date.toISOString().slice(0, -5);

  const handleSubmit = async () => {
    let scoreEntry = {
      initials: initials,
      score: props.currentScore,
      scoreDateTime: date2
    };

    const body = JSON.stringify(scoreEntry);

    try {
      const response = await fetch(
        `http://localhost:8080/api/score/${length}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        }
      );

      if (response.status === 201 || response.status === 400) {
        const data = await response.json();
        console.log(data);
        if (data != 0) {
          buttonSwitch = true;
        } else {
          setErrors(data);
        }
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
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
            Here is your game summary!
            </div>
          </div>
        </div>
      
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="text-center">
              Your Total Score is: <Score currentScore={props.currentScore} />
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
                onChange={handleChangeInitials}
              />
            {(buttonSwitch == false) ? (
              <div className="col">
              <button type="button" className="btn btn-success mb-2" onClick={handleSubmit}>Submit</button>
              </div>
            ) : ""}
            
            </form>
          </div>
        </div>
      </div>

      <br />

      <div className="text-center">
      <Link to="/gamelength" className="btn btn-danger mb-3 ml-2 ">Play Again</Link>
      </div>

      <p>Final Results - this isn't grabbing the the correct score yet.</p>

      <div  className="container2 mt-2 mb-4">
        <div className="text-center">
           Placeholder for the final results:

           <h2 style={{ margin: "16px" }} className="my-4">
        Final Results
        <hr />
      </h2>
      {/* <table className="table table-striped table-hover " > */}
      <table className="table table-borderless table-hover " >
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Correct Answer</th>
            <th scope="col">Round Score</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {/* {shortScoreEntries.map((shortScoreEntry) => (
            <tr key={shortScoreEntry.score}>
              <td>{shortScoreEntry.initials}</td>
              <td>{shortScoreEntry.score}</td>
              <td>{shortScoreEntry.scoreDateTime}</td>
              <td></td>
            </tr>
          ))} */}
          </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FinalResults;
