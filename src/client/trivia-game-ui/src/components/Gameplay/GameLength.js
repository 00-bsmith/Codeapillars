import React from 'react';
import { Link } from 'react-router-dom';
  
const GameLength = () => {
  return (
    <>
    <div>     
    <h1><img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      Let's Play a Game! Choose length of game:</h1>
    </div>

    <div className="container">
      <div className="row">
          <div className="col"><h4 className='gameLength'>Short Game - 7 Questions</h4></div>
      </div>

      <div className="row">
        <div className="col">
          <h4 className='gameLength'>Medium Game - 15 Questions</h4>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h4 className='gameLength'>Long Game - 30 Questions</h4>
        </div>
      </div>



      <div>
          <label htmlFor="length">Length</label>
          <select id="length" name="length">
            <option value="">[Select Game Length]</option>
            <option value="chemistry">Short (7 Rounds)</option>
            <option value="philosophy">Medium (15 Rounds)</option>
            <option value="math">Long (30 Rounds)</option>
          </select>
        </div>

        {/* <div>
          <button type="submit">Submit</button>
        </div> */}
      
      <br />

        <div className="row">
          <div className="col">
            <Link to="/game" className="btn btn-success mb-3 ml-2">Start Game</Link>
          </div>
        </div>

    </div>
      
        {/* <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
        Let's Play a Game! Choose length of game:
      </div>
      <div>&nbsp;</div>
      <div>
        <label htmlFor="length">Length</label>
        <select id="length" name="length">
          <option value="">[Select Game Length]</option>
          <option value="short">Short (7 Rounds)</option>
          <option value="medium">Medium (15 Rounds)</option>
          <option value="long">Long (30 Rounds)</option>
        </select>
      </div>
      <div>&nbsp;</div>
      <button className="btn btn-success mb-3" type="submit">
        Submit
      </button> */}

      {/* Show options for a short (7), medium (15), or long (30) game */}
      {/* once selected, have a message like: Get ready! and then the count down clock starts 3 seconds */}
    </>
  );
};

export default GameLength;
