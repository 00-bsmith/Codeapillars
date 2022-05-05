import React from "react";

const GameLength = () => {
  return (
    <>
      <div>GameLength</div>

      {/* Perhaps have a switch here for the different cases of game length to choose from and the API calls they each will make */}

      <div>
        <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
        Let's Play a Game! Choose length of game:
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
        <div>
          <button type="submit">Submit</button>
        </div>
      

      {/* Show options for a short (7), medium (15), or long (30) game */}
      {/* once selected, have a message like: Get ready! and then the count down clock starts 3 seconds */}
    </>
  );
};

export default GameLength;
