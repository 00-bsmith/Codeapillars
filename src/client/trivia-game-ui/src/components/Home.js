import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
// import { gsap } from "gsap";



export const Home = () => {
  const auth = useContext(AuthContext);

// GreenSock===================
  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#0a9396" });
  // };
  
  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#f77f00" });
  // };
// GreenSock===================

  return (
    <>
    
    <div className="container">
      <div className="row">
          <div className="col"><h1 className='highScore'>Welcome to TriviaPillar!</h1></div>
      </div>

      <div className="row">
        <div className="col">
          <h4 className='highScore'>Click above to learn How to Play.</h4>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h4 className='highScore'>Let's play a game!</h4>
        </div>
      </div>
      
      <br />

        <div className="row">
        <div className="col">
          {/* <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}> */}
            {/* <img src={"images/TP-sm-med.png"}  alt="TriviaPillar" /> */}
            <Link to="/gamelength" className="btn btn-success mb-3 ml-2">New Game</Link>
          </div>
        </div>


    </div>
      
    </>
  );
};

export default Home;
