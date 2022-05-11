import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <>
      <div>Results</div>

{/* need to tell player if they answered correctly, and show the question with the correct answer, and their score for the round */}
      <div>
        <Link to="/game" className="btn btn-success  mb-3 ml-2">
          Next Question=Restart
        </Link>
      </div>

      {/* maybe we wont need this link */}
      <div>
        <Link to="/home" className="btn btn-warning  mb-3 ml-2">
          Home
        </Link>
      </div>
    </>
  );
};

export default Results;

