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

      {/* since we have the NavBar, it has the home link, do we really need another home link on the page?  OR Perhaps go home when they hit enter? OR tell them to go back to the home page? */}
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
      </>
    </>
  );
};

export default NotFound;
