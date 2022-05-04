import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import Game from "./Gameplay/Game";



export const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <>
    
      <h2>Home</h2>
      <div>
      <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
        <Link to="/game" className="btn btn-success mb-3 ml-2">New Game
          </Link>
          
      </div>

    </>
  );
};

export default Home;
