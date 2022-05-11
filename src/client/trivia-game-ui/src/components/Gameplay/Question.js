import React, { useEffect, useState } from "react";

export const Question = (props) => {
  const [question, setQuestion] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [answers, setAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionId, setQuestionId] = useState(0);
  const [pointValue, setPointValue] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [errors, setErrors] = useState([]);

  const [answer, setAnswer] = useState("");

  const getData = async () => {
    fetch(`http://localhost:8080/api/question/${props.gameId}/next`)
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
  };

  // attempt at fixing the HTML entities...see AnswerOptions.js
  // const entities = () => {
  //   '&#039;': "'",
  //   '&quot;': '"',
  // }

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
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
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
    setAnswer(event.target.id);
  };

  useEffect(() => {
    console.log(questionId);
  }, [questionId]);

  useEffect(() => {
    console.log(props.gameId);
  }, [props.gameId]);

  useEffect(() => {
    console.log(answered);
  }, [answered]);

  useEffect(() => {
    console.log(correct);
  }, [correct]);

  const handleSubmit = async () => {
      let tempCorrect = false
      console.log("Answer: " + answer);
      console.log("Correct Answer: " + correctAnswer);
    if (answer === correctAnswer) {
        tempCorrect = true;
        console.log("Correct!");
    }
    let tempAnswered = true;
    console.log("Answered!");

    const updatedQuestion = {
      id: questionId,
      gameId: props.gameId,
      answered: tempAnswered,
      correct: tempCorrect,
      earnedPoints: earnedPoints
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
          body: body
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

  // useEffect(() => {
  //   console.log(answer);
  // }, [answer]);

  return (
    <>
      <div className="container2 mt-2 mb-4">
        <div className="text-center"></div>
        <div className="question">
          <div className="questionTitle">{questionTitle}</div>
        </div>
        <br />
        {props.duration === 15 ? (
          <div>
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
                  {shuffledAnswers[0]}
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
                  {shuffledAnswers[1]}
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
                  {shuffledAnswers[2]}
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
                  {shuffledAnswers[3]}
                </label>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-success mb-3 ml-2"
                  onClick={handleSubmit}
                >
                  Submit Answer
                </button>
              </div>
            </form>
          </div>
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
                  {shuffledAnswers[0]}
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
                  {shuffledAnswers[1]}
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
                  {shuffledAnswers[2]}
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
                  {shuffledAnswers[3]}
                </label>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Here is the Bootstrap version of radio buttons */}
      {/* Disabled version. Can this be called during the 5 second timer, and then switch to not-diabled for the 15 second timer? */}
      {/* <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="answerDisabled"
          id="answerDisabled"
          disabled
        />
        <label class="form-check-label" for="answerDisabled">
          {shuffledAnswers[0]}
        </label>
      </div> */}
      {/* duplicate this for the three other answers */}
    </>
  );
};

export default Question;
