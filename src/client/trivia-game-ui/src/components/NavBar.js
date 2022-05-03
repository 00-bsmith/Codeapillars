import { Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from "../AuthContext";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";



const NavBar = () => {

  const auth = useContext(AuthContext);
  return (
      <>
      {!auth.user && (
        <>
    <Navbar bg="dark" variant="dark" sticky="top" mt-n1>
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">

            <Link to="/" className="nav-link">Home</Link>

{/* Need to link both leaderboard and How to Play */}
            <Link to="/hiscore" className="nav-link">Leaderboard</Link>
      
            <Link to="/rules" className="nav-link">How to Play</Link>

{/* Need to fill in where this links to   AND do we want this here in the NavBar or in the body of Home?*/}
            <Link to="" className="nav-link btn btn-success ml-2">New Game</Link>

            <Link to="/login" className="nav-link">Admin Login</Link>
          </Nav>
      </Container>
    </Navbar>

        </>
      )}

    {auth.user && (
      <>
     

  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>

      <Navbar.Brand href="/"></Navbar.Brand>

        <Nav className="me-auto">

          <Link to="/" className="nav-link">Home</Link>

          <Link to="/agents" className="nav-link">Agents</Link>

          <Nav.Link Link to="/" className="nav-link" onClick={() => auth.logout()} >Admin Logout</Nav.Link>
      </Nav>


      <Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Admin Signed in as: <a href="#login">{auth.user.username}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Nav>

    </Container>
  </Navbar>

    </>
    )}
  </>
  );
};

export default NavBar;