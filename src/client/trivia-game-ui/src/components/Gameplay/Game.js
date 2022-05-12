import React, { useEffect, useState } from "react";
import Score from "./Score";
import Round from "./Round";
import Timer from "../Clock/Timer";
import Question from "../Gameplay/Question";
import "./Game.css";
import FinalResults from "./FinalResults";
import { Link } from "react-router-dom";

const Game = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentRound, SetCurrentRound] = useState(1);

  const [gameId, setGameId] = useState(0);
  const [errors, setErrors] = useState([]);

  const [questionSwitch, setQuestionSwitch] = useState(0);
  const [buttonSwitch, setButtonSwitch] = useState(false);
  // Hooks from Timer.js (being passed down as props)
  const [currentTime, setCurrentTime] = React.useState(0);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [round, setRound] = React.useState(1);
  const [score, setScore] = React.useState(0);

  const [difficulty, setDifficulty] = useState("Hard");

  const [duration, setDuration] = useState(5);
  const [remainingTime, setRemainingTime] = useState(duration);

  // Hooks and functions from Question.js (being passed down as props)
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [answers, setAnswers] = useState([]);
  const [pointValue, setPointValue] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  let globalScore=0;

  




  const stopTimer = () => {
    setSeconds(currentTime);
    if (isPlaying === true) {
      calculateScore();
    }
    setIsPlaying(false);
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      if (duration === 10) {
        setCurrentTime(0);
        console.log("Time is up!");
      }

      return <div className="timer">Time is Up!</div>;
    }
    setCurrentTime(remainingTime);

    if (duration === 5) {
      return (
        <div className="timer">
          <div className="text">Read Question</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    } else {
      return (
        <div className="timer">
          <div className="text">Choose Answer</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    }
  };

  const calculateScore = () => {
    if (duration === 10) {
      if (currentTime === 0) {
        globalScore = 0;
        getScore(globalScore);
      } else {
        const time = duration - Math.round(currentTime);
        console.log("Time: " + time);
        console.log("current time: " + currentTime);
        console.log("seconds: " + seconds);
        console.log("reamaining time: " + remainingTime);
        const a = time / duration;
        console.log("a: " + a);
        const b = a / 1.2;
        console.log("b: " + b);
        const c = 1 - b;
        console.log("c: " + c);
        const d = c * 100;
        console.log("d: " + d);
        //let score = d;
        globalScore = d;
        globalScore = Math.round(globalScore);
        // setScore(Math.round(score));
        getScore(globalScore);
      }
    }
  };

  const handleQuestionSubmit = async () => {
    setButtonSwitch(true);
    //stopTimer();

    let tempCorrect = false;
    console.log("Answer: " + answer);
    console.log("Correct Answer: " + correctAnswer);
    if (answer === correctAnswer) {
      tempCorrect = true;
      console.log("Correct!");
      calculateScore();
    } else {
      globalScore = 0;
    }
    let tempAnswered = true;



    
    let updatedQuestion = {
      id: questionId,
      gameId: gameId,
      answered: true,
      correct: tempCorrect,
      earnedPoints: globalScore,
    };
    console.log(updatedQuestion);

    const body = JSON.stringify(updatedQuestion);

    try {
      const response = await fetch(
        `http://localhost:8080/api/question/${questionId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        }
      );

      if (response.status === 204) {
        console.log("Success");
        setErrors([]);
      } else if (response.status === 400) {
        const data = await response.json();
        setErrors(data);
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    console.log("Getting data...");
    
    fetch(`http://localhost:8080/api/question/${gameId}/next`)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
        console.log(data);
        setQuestionId(data.id);
        setQuestionTitle(data.question);
        setAnswers(data.allAnswers);
        setCorrectAnswer(data.allAnswers[0]);
        setPointValue(data.pointValue);
        setAnswered(data.answered);
        setCorrect(data.correct);
        setEarnedPoints(data.earnedPoints);
      })
      .catch((error) => console.log(error));
    setButtonSwitch(false);

  };

  // Functions from Timer.js (being passed down as props)

  // probably wont need this restart functionality here. Perhaps on the results page to get next question?

  // not sure about this reset. Currently it isn't working here.
  let finalResultsSwitch = false;
  const playRound = () => {
    // there is no current difficulty, this can be modified in future iterations to include easy, medium and hard, changing the larger duration number accordingly.
    console.log("Playing round");
    let roundCount;
    if (props.type === 1) {
      roundCount = 7;
    } else if (props.type === 2) {
      roundCount = 15;
    } else if (props.type === 3) {
      roundCount = 30;
    }
    if (round === roundCount && duration === 10) {//if the round is the last one and the duration is 10 seconds
     
      if(buttonSwitch===false){//
       console.log("endGame Submit");
       finalResultsSwitch = true;
      handleQuestionSubmit();
      }
      //getData(); // the very last qustion doesn't need to fetch data again
      setRemainingTime(0);
      setIsPlaying(false);
    } else {//if the round is not the last one
     
      if (duration === 5) {//if the duration is 5 seconds
        
        setDuration(10);
      } else {//if the duration is 10 seconds
       
        if(buttonSwitch===false){
          console.log("Midgame submit");
          handleQuestionSubmit();
          //getData();//try this here
          }
          console.log("Calling getData");
        getData();//this is the one that fetches the next question
        setRound(round + 1);
        setDuration(5);
        getRound(round);
      }
      setKey((prevKey) => prevKey + 1);
    }
  };

  const getScore = (newScore) => {
    setCurrentScore(currentScore + newScore);
  };

  const getRound = (round) => {
    SetCurrentRound(round + 1);
  };
  //////////////////////

  const buildGame = async () => {
    //Fetch Http response here
    try {
      const response = await fetch(
        `http://localhost:8080/api/question/build/${props.type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 400) {
        const data = await response.json();
        console.log(data);
        if (data !== 0) {
          setGameId(data);
          if (data) {
            
          }
        } else {
          setErrors(data);
        }
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }


  };

  useEffect(() => {
    buildGame();
  }, []);

  useEffect(() => {
    if (gameId !== 0) {
      setQuestionSwitch(1);
    }
  }, [gameId]);

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Round #</p>
              <Round currentRound={currentRound} />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <p className="columnHeader">Total Score:</p>
              <Score currentScore={currentScore} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <Timer
                // Pass through useState variables as props
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                key={key}
                setKey={setKey}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                seconds={seconds}
                setSeconds={setSeconds}
                round={round}
                setRound={setRound}
                score={score}
                setScore={setScore}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                duration={duration}
                setDuration={setDuration}
                remainingTime={remainingTime}
                setRemainingTime={setRemainingTime}
                type={props.type}
                // Pass through methods as props
                getScore={getScore}
                getRound={getRound}
                stopTimer={stopTimer}
                calculateScore={calculateScore}
                renderTime={renderTime}
                playRound={playRound}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>
          <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
          Good Luck!
        </h4>
      </div>

      <div className="col">
            {/* <img src={"images/TP-sm-med.png"}  alt="TriviaPillar" /> */}
            <Link to="/finalResults" className="btn btn-danger mb-3 ml-2">Final Results</Link>
          </div>

      {questionSwitch === 1 ? (
        <div className="container mt-4">
          <div className="row">
            <Question
              gameId={gameId}
              duration={duration}
              earnedPoints={earnedPoints}
              setEarnedPoints={setEarnedPoints}
              questionId={questionId}
              setQuestionId={setQuestionId}
              correctAnswer={correctAnswer}
              setCorrectAnswer={setCorrectAnswer}
              answer={answer}
              setAnswer={setAnswer}
              question={question}
              setQuestion={setQuestion}
              answers={answers}
              answered={answered}
              correct={correct}
              questionTitle={questionTitle}
              buttonSwitch={buttonSwitch}
              getData={getData}
              handleQuestionSubmit={handleQuestionSubmit}
            />
            {/* <AnswerOptions /> */}
          </div>
        </div>
      ) : (
        "Getting question..."
      )}

      {finalResultsSwitch === true ? (
        <div className="row">
          <div className="col">
            <Link
              to={`/finalResults`}
              className="btn btn-success mb-3 ml-2"
              type="submit"
            >
              Start Game
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* // write roundResult function:  */}
      {/* if correct answer = "That's right!" */}
      {/* if wrong answer = "Nope, wrong answer." */}
      {/* Then display the {question} and the {correct_answer} */}
      {/* /display their score for this round */}
      {/*       Next Question
          {/* this needs to just START the NEXT round timer and increment the round*/}
    </>
  );
};
export default Game;

/* <div className="container mt-2">
        <div className="row">
          <div className="col xs={2} md={3}">
            <div className="text-center">
              <p className="columnHeader">Round #</p>
              <Round currentRound={currentRound} />
            </div>
          </div>

          <div className="col xs={1} md={3}">
            <div className="text-center">
              <Timer getScore={getScore} getRound={getRound} />
            </div>
          </div>

          <div className="col xs={2} md={3}">
            <div className="text-center">
              <p className="columnHeader">Total Score:</p>
              <Score currentScore={currentScore} />
            </div>
          </div>
        </div>
      </div> */
