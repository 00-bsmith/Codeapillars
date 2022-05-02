import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <ul>
        {/* Link to main landing page */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Link to leaderboard */}
        <li>
          <Link to="/hiscore">Leaderboard</Link>
        </li>
        {/* Additional links here */}
        
      </ul>
    </>
  );
};

export default NavBar;
