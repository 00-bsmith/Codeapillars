import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <>
      <div>Results</div>
      <div>
        <Link to="/game" className="btn btn-success  mb-3 ml-2">
          New Game
        </Link>
      </div>
      <div>
        <Link to="/home" className="btn btn-success  mb-3 ml-2">
          Home
        </Link>
      </div>
    </>
  );
};

export default Results;
