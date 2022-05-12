import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

export const Question = (props) => {
//   const [question, setQuestion] = useState([]);
//   const [questionTitle, setQuestionTitle] = useState("");
//   const [answers, setAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
//   const [correctAnswer, setCorrectAnswer] = useState("");
//   const [questionId, setQuestionId] = useState(0);
//   const [pointValue, setPointValue] = useState(0);
//   const [answered, setAnswered] = useState(false);
//   const [correct, setCorrect] = useState(false);
  const [errors, setErrors] = useState([]);

//   const [answer, setAnswer] = useState("");

//   const getData = async () => {
//     fetch(`http://localhost:8080/api/question/${props.gameId}/next`)
//       .then((response) => response.json())
//       .then((data) => {
//         setQuestion(data);
//         console.log(data);
//         props.setQuestionId(data.id);
//         setQuestionTitle(data.question);
//         setAnswers(data.allAnswers);
//         props.setCorrectAnswer(data.allAnswers[0]);
//         setPointValue(data.pointValue);
//         setAnswered(data.answered);
//         setCorrect(data.correct);
//         props.setEarnedPoints(data.earnedPoints);
//       })
//       .catch((error) => console.log(error));
//   };

  useEffect(() => {
    props.getData();
  }, []); //THIS WAS PROCCING EVERY UPDATE
  //now the first question isnt updating

  useEffect(() => {
    shuffle(props.answers);
    setShuffledAnswers(props.answers);
    console.log(props.answers);
    console.log(props.correctAnswer);
  }, [props.correctAnswer]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleChange = (event) => {
    props.setAnswer(event.target.id);
  };

  useEffect(() => {
    console.log(props.questionId);
  }, [props.questionId]);

  useEffect(() => {
    console.log(props.gameId);
  }, [props.gameId]);


//   const handleSubmit = async () => {
//     let tempCorrect = false;
//     console.log("Answer: " + answer);
//     console.log("Correct Answer: " + correctAnswer);
//     if (answer === correctAnswer) {
//       tempCorrect = true;
//       console.log("Correct!");
//     }
//     let tempAnswered = true;
//     console.log("Answered!");

//     const updatedQuestion = {
//       id: questionId,
//       gameId: props.gameId,
//       answered: tempAnswered,
//       correct: tempCorrect,
//       earnedPoints: props.earnedPoints,
//     };
//     console.log(updatedQuestion);
//     const body = JSON.stringify(updatedQuestion);

//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/question/${questionId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: body,
//         }
//       );

//       if (response.status === 204) {
//         console.log("Success");
//         setErrors([]);
//       } else if (response.status === 400) {
//         const data = await response.json();
//         setErrors(data);
//       } else {
//         throw new Error("Server Error: Something unexpected went wrong.");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

  // useEffect(() => {
  //   console.log(answer);
  // }, [answer]);

  return (
    <>
      <div className="container2 mt-2 mb-4">
        <div className="text-center"></div>
        <div className="question">
          <div className="questionTitle">{decode(props.questionTitle)}</div>
        </div>
        <br />

        <div>
          {props.duration === 10 && props.buttonSwitch === false ? (
            <form className="answers">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="answer"
                  id={shuffledAnswers[0]}
                  onChange={handleChange}
                />
                <label class="form-check-label" for="answer">
                  {decode(shuffledAnswers[0])}
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="answer"
                  id={shuffledAnswers[1]}
                  onChange={handleChange}
                />
                <label class="form-check-label" for="answer">
                  {decode(shuffledAnswers[1])}
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="answer"
                  id={shuffledAnswers[2]}
                  onChange={handleChange}
                />
                <label class="form-check-label" for="answer">
                  {decode(shuffledAnswers[2])}
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="answer"
                  id={shuffledAnswers[3]}
                  onChange={handleChange}
                />
                <label class="form-check-label" for="answer">
                  {decode(shuffledAnswers[3])}
                </label>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-success mt-3 mb-3 ml-2"
                  onClick={props.handleQuestionSubmit}
                >
                  Submit Answer
                </button>
              </div>
            </form>
          ) : (
            <div>
              <form className="answers">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="answerDisabled"
                    id="answerDisabled"
                    onChange={handleChange}
                    disabled
                  />
                  <label class="form-check-label" for="answerDisabled">
                    {decode(shuffledAnswers[0])}
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="answerDisabled"
                    id="answerDisabled"
                    onChange={handleChange}
                    disabled
                  />
                  <label class="form-check-label" for="answerDisabled">
                    {decode(shuffledAnswers[1])}
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="answerDisabled"
                    id="answerDisabled"
                    onChange={handleChange}
                    disabled
                  />
                  <label class="form-check-label" for="answerDisabled">
                    {decode(shuffledAnswers[2])}
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="answerDisabled"
                    id="answerDisabled"
                    onChange={handleChange}
                    disabled
                  />
                  <label class="form-check-label" for="answerDisabled">
                    {decode(shuffledAnswers[3])}
                  </label>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="answer"
            onChange={handleChange}
          />
          <label class="form-check-label" for="answer">
            {decode(shuffledAnswers[0])}
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="answer"
            onChange={handleChange}
          />
          <label class="form-check-label" for="answer">
            {decode(shuffledAnswers[1])}
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="answer"
            onChange={handleChange}
          />
          <label class="form-check-label" for="answer">
            {decode(shuffledAnswers[2])}
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="answer"
            onChange={handleChange}
          />
          <label class="form-check-label" for="answer">
            {decode(shuffledAnswers[3])}
          </label>
        </div> */}
      </div>
    </>
  );
};

export default Question;
