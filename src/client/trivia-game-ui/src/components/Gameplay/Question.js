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
    <div className="container2 mt-2 mb-4">
        <div className="text-center"></div>
      <div className="question">
        <div className="questionTitle">{questionTitle}</div>
      </div>
<br/>

      <div className="row">
          <form className="answers">
              <div>
              <label><input type="radio" value={shuffledAnswers[0]} name="answer"/>
              &nbsp;{shuffledAnswers[0]}</label>
              </div>
              <div>
              <label><input type="radio" value={shuffledAnswers[1]} name="answer"/>
              &nbsp;{shuffledAnswers[1]}</label>
              </div>
              <div>
              <label><input type="radio" value={shuffledAnswers[2]} name="answer"/>
              &nbsp;{shuffledAnswers[2]}</label>
              </div>
              <div>
              <label><input type="radio" value={shuffledAnswers[3]} name="answer"/>
              &nbsp;{shuffledAnswers[3]}</label>
              </div>
          </form>

      </div>
    </div>
{/* Here is the Bootstrap version of radio buttons */}

<div class="form-check">
  <input class="form-check-input" type="radio" name="answer" id="answer"/>
  <label class="form-check-label" for="answer">
  {shuffledAnswers[0]}
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="answer" id="answer"/>
  <label class="form-check-label" for="answer">
  {shuffledAnswers[1]}
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="answer" id="answer"/>
  <label class="form-check-label" for="answer">
  {shuffledAnswers[2]}
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="answer" id="answer"/>
  <label class="form-check-label" for="answer">
  {shuffledAnswers[3]}
  </label>
</div>
{/* Disabled version. Can this be called during the 5 second timer, and then switch to not-diabled for the 15 second timer? */}
<div class="form-check">
  <input class="form-check-input" type="radio" name="answerDisabled" id="answerDisabled" disabled/>
  <label class="form-check-label" for="answerDisabled">
  {shuffledAnswers[0]}
  </label>
</div>
{/* duplicate this for the three other answers */}
    
    </>
  );
};

export default Question;
