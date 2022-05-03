import React, { useContext, useState } from "react";
// import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import Errors from "./Errors";

const Login = () => {
    // Create default user for useState hook
  const initUser = {
    username: "",
    password: "",
  };

// UseState hooks 
  const [user, setUser] = useState(initUser);
  const [errors, setErrors] = useState([]);

//   Create authcontext object for login process once token is generated
  const auth = useContext(AuthContext);

//   Create history object for navigation
  const history = useHistory();

//   Set user based on input after button is clicked
  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const init = {
      method: "POST", // GET by default
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:8080/authenticate", init)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          return null;
        }
        return Promise.reject("Something unexpected went wrong.");
      })
      .then((data) => {
        if (data) {
          auth.login(data.jwt_token);
          history.push("/");
        } else {
          setErrors(["Login failure"]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2 className="my-4">Login</h2>
      <Errors errors={errors} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
          
        </div>
        
        <div className="mt-5" >
          {/* <button className="btn btn-success mb-3" type="submit">
             Login
          </button>
          {/* <Link to="/admin" className="btn btn-success mb-3" type="submit">
             Login
          </Link> */}
          <Link to="/" className="btn btn-warning  mb-3 ml-2">Cancel
          </Link>
        
        </div>
        
      </form>
    </>
  );
};

export default Login;
