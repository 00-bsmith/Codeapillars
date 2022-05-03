import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

const NotFound = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <h2>Not Found</h2>
      <div>Sorry, the page you're looking for could not be found!</div>
      <>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
      </>
    </>
  );
};

export default NotFound;
