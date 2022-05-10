import React, { useEffect, useState } from "react";

export const Question = (props) => {
  const [question, setQuestion] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [answers, setAnswers] = useState([]);
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
  }, [correctAnswer]);

  return (
    <>
      <div className="question">
        <div className="questionTitle">{questionTitle}</div>
      </div>

      <div>
          
      </div>
    </>
  );
};

export default Question;
// this is code from the quizbee app. The app had both question and the answer options displaying together. This is here for reference. Perhaps we can pull out what we need for the answer options and build up the AnswerOptions.js

// const Question = ({question, options, selected}) => {
//   const [answer, setAnswer] = useState(options);
//   return (
//     <div className="question">
//       <div className="question">{question}</div>
//       {answer.map((text, index) => (
//         <button
//           key={index}
//           className="answerBtn"
//           onClick={() => {
//             setAnswer([text]);
//             selected(text);
//           }}
//         >
//           {text}
//         </button>
//       ))}
//     </div>
//   );
// };
