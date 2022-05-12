import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AuthContext from "./AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import jwt_decode from "jwt-decode";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import LeaderBoard from "./components/LeaderBoard";
import Admin from "./components/Admin";
import Game from "./components/Gameplay/Game";
import Results from "./components/Gameplay/Results";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import NavBar from "./components/NavBar";
import { Navbar } from "react-bootstrap";
import GameLength from "./components/Gameplay/GameLength";
import FinalResults from "./components/Gameplay/FinalResults";



const TOKEN_KEY = "user-api-token";

function App() {
  const [user, setUser] = useState(null);

  const [type, setType] = useState(1);


  const login = (token) => {
    console.log(token);
    localStorage.setItem(TOKEN_KEY, token);
    var tokenObj;
    try {
      tokenObj = jwt_decode(token);
    } catch (error) {
      console.log(error);
    }

    console.log(tokenObj);

    const { sub: username, authorities: roleString } = tokenObj;

    const roles = roleString.split(",");

    const user = {
      username,
      roles,
      token,
      hasRole(role) {
        return roles.includes(role);
      },
    };
    console.log(user);

    setUser(user);

    return user;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  const auth = {
    user: user ? { ...user } : null,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/howtoplay">
            {/* <Header /> */}
            <NavBar />
            <HowToPlay />
          </Route>

          <Route path="/hiscore">
            {/* <Header /> */}
              <NavBar />
            <LeaderBoard />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/admin">
            <Navbar />
            <Admin />
          </Route>

          <Route path="/gamelength">
            <NavBar />
            <GameLength 
            type = {type}
            setType = {setType}
            />
          </Route>

          <Route path="/game">
            <NavBar />
            <Game 
            type = {type}
            setType = {setType}
            />
          </Route>

          <Route path="/results">
            <NavBar />
            <Results />
          </Route>

          <Route path="/finalResults">
            <NavBar />
            <FinalResults 
            type = {type}
            // will this work?
            // currentScore = {currentScore}
            // setCurrentScore = {setCurrentScore}
            />
          </Route>



          <Route path="*">
            <NavBar />
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
