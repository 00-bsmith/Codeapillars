import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";


export const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <h2>Home</h2>
      <div>
        {/* Need to fill in where this links to */}
        {/* do we want this here, in the body of Home or in the NavBar? */}
        <Link to="" className="btn btn-success  mb-3 ml-2">New Game
          </Link>
      </div>

      {/* this next div and image was an experiment */}
      <div>
      <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      <p>
        Hi! I am the TriviaPillar, and I challenge you to a game of wits!
      </p>
      </div>
    </>
  );
};

export default Home;
