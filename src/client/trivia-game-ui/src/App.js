import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AuthContext from "./AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import jwt_decode from "jwt-decode";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeaderBoard from "./components/LeaderBoard";
import Admin from "./components/Admin";
import Game from "./components/Game";
import Results from "./components/Results";
import HowToPlay from "./components/HowToPlay";

import Game from "./components/Game";
import HowToPlay from "./components/HowToPlay";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin";


const TOKEN_KEY = "user-api-token";

function App() {
  const [user, setUser] = useState(null);

  const login = (token) => {
    console.log(token);
    localStorage.setItem(TOKEN_KEY, token);
    var tokenObj;
    try {
      tokenObj = jwt_decode(token);
    } catch(error) {
      console.log(error);
    }
    
    console.log(tokenObj);

    const { sub: username, authorities: roleString } = tokenObj;

    const roles = roleString.split(',');

    const user = {
      username,
      roles,
      token,
      hasRole(role) {
        return roles.includes(role);
      }
    }
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
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>


          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/game">
            <Game />
          </Route>

          <Route path="/results">
            <Results />
          </Route>

          <Route path="/howtoplay">
            <HowToPlay />
          </Route>

          <Route path="/hiscore">
            <LeaderBoard />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
