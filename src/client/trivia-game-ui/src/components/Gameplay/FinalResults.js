import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Score from "./Score";

const FinalResults = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [initials, setInitials] = useState("");
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState([])
  const [errors, setErrors] = useState([]);
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const [globalTotalPoints, setGlobalTotalPoints] = useState(0);
  const apiUrl = window.API_URL;
  let length;

  if (props.type == 1) {
    length = "short";
    //console.log("Length: Short");
  } else if (props.type == 2) {
    length = "medium";
    //console.log("Length: Medium");
  } else if (props.type == 3) {
    length = "long";
   // console.log("Length: Long");
  }

  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  }

  var date = new Date();
  // date.toISOString(); //"2011-12-19T15:28:46.493Z"
  var date2 = date.toISOString().slice(0, -5);

  const handleSubmit = async () => {
    setButtonSwitch(true);
    let scoreEntry = {
      initials: initials,
      score: globalTotalPoints,
      scoreDateTime: date2
    };

    const body = JSON.stringify(scoreEntry);

    try {
      const response = await fetch(
        `${apiUrl}/score/${length}`,
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
       // console.log(data);
        if (data != 0) {
          setButtonSwitch(true);
        } else {
          setErrors(data);
        }
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
    // console.log(error);
    }
  }
let jsonArray;
let totalPoints=0;
  const getData = async () => {
    // console.log("Getting data...");
    
    fetch(`${apiUrl}/question/game/${props.gameId}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        jsonArray=JSON.parse(JSON.stringify(data));
        for(let i=0;i<jsonArray.length;i++){
         // console.log("Adding: "+jsonArray[i].earnedPoints);
          totalPoints+=jsonArray[i].earnedPoints;
         // console.log("Total: "+totalPoints);
          setGlobalTotalPoints(totalPoints);
         // console.log("Global Total: "+globalTotalPoints);
        }
        
      })
      .catch((error) => console.log(error));
      //console.log(totalPoints);
      // console.log("GLOBAL: "+globalTotalPoints);
  };

  useEffect(() => {
    getData();
  }, []);


  
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
              Your Total Score is: <Score currentScore={globalTotalPoints} />
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
            ) : <></>}
            
            </form>
          </div>
        </div>
      </div>

      <br />

      <div className="text-center">
      <Link to="/gamelength" className="btn btn-danger mb-3 ml-2 ">Play Again</Link>
      </div>

    

      <div  className="container2 mt-2 mb-4">
        <div className="text-center">

           <h2 style={{ margin: "16px" }} className="my-4">
        Final Results
        <hr />
      </h2>
      
      <table className="table table-borderless table-hover" >
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Correct Answer</th>
            <th scope="col">Points Scored</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody >
          {questions.map((question) => (
            <tr key={question.id}>
              <td >{decode(question.question)}</td>
              <td>{decode(question.allAnswers[0])}</td>
              <td>{question.earnedPoints}</td>
              <td></td>
            </tr>
          ))}
          </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FinalResults;
