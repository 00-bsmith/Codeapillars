import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import Game from "./Game";




export const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <h2 style={{marginLeft: "20px"}}>Home</h2>
      <div>
        <div>
          <img src={"images/TP-sm-med.png"} alt="TriviaPillar" />
      
            <Link to="/game" className="btn btn-success mb-3 ml-2">New Game
            </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
