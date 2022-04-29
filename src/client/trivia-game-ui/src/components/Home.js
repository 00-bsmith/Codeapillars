import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

export const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <h2>Home</h2>
      <li>
        <Link to="">New Game</Link>
      </li>
    </>
  );
};

export default Home;
