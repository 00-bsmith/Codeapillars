import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AuthContext from "./AuthContext";

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
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/api/agent">
            {auth.user ? <Agents /> : <Redirect to="/login" />}
          </Route>
          <Route path="/agent/add">
            {auth.user ? <AddAgent /> : <Redirect to="/login" />}
          </Route>
          <Route path="/agent/edit/:id">
            {auth.user ? <EditAgent /> : <Redirect to="/login" />}
          </Route>
          <Route path="/agent/delete/:id">
            {auth.user ? <DeleteAgent /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
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
