import React, { useEffect, useState } from "react";

export const Question = (props) => {
  const [question, setQuestion] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [answers, setAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  //   const [otherAnswers, setOtherAnswers] = useState([]);
  const [pointValue, setPointValue] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);



  const [answer, setAnswer] = useState("");

  const getData = async () => {
    fetch(`http://localhost:8080/api/question/${props.gameId}/next`)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
        setQuestionTitle(data.question);
        setAnswers(data.allAnswers);
        setCorrectAnswer(data.allAnswers[0]);
        setPointValue(data.pointValue);
        setAnswered(data.answered);
        setCorrect(data.correct);
        setEarnedPoints(data.earnedPoints);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    console.log(question);
  }, []);

  useEffect(() => {
    console.log(correctAnswer);
    console.log(answers);
    shuffle(answers);
    setShuffledAnswers(answers);
    console.log(answers);
    console.log(correctAnswer);
  }, [correctAnswer]);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <>
      <div className="question">
        <div className="questionTitle">{questionTitle}</div>
      </div>

      <div>
          <form className="answers">
              <label><input type="radio" value={shuffledAnswers[0]} name="1"/>{shuffledAnswers[0]}</label>
              <label><input type="radio" value={shuffledAnswers[1]} name="2"/>{shuffledAnswers[1]}</label>
              <label><input type="radio" value={shuffledAnswers[2]} name="3"/>{shuffledAnswers[2]}</label>
              <label><input type="radio" value={shuffledAnswers[3]} name="4"/>{shuffledAnswers[3]}</label>
          </form>
      </div>
    </>
  );
};

export default Question;
