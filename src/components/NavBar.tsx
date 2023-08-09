import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import "./css/NavBar.css";

// Returns a navigation bar component
const NavBar = () => {
  // Allow navigation to different to pages when clicking on links
  const navigate = useNavigate();

  // Keep track of when to expand the navbar (mobile devices)
  const [navExpanded, setNavExpanded] = useState<boolean>(false);

  return (
    <nav className="nav">
      <div className="nav-menu">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="logo logo-main"
          src="/nhl-logo.png"
          alt="nhl logo"
        />
        <AiOutlineMenu
          className="logo logo-menu"
          onClick={() => setNavExpanded(!navExpanded)}
        ></AiOutlineMenu>
      </div>
      <div className="collapsible-container">
        <div
          className={navExpanded ? "login expanded" : "login"}
          onClick={() => {
            navigate("/login");
            setNavExpanded(false);
          }}
        >
          <AiOutlineUser className="login-logo"></AiOutlineUser>
          Login
        </div>
        <ul
          className={navExpanded ? "list nav-list expanded" : "list nav-list"}
        >
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/games"
              onClick={() => setNavExpanded(false)}
            >
              Games
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/standings"
              onClick={() => setNavExpanded(false)}
            >
              Standings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/teams"
              onClick={() => setNavExpanded(false)}
            >
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/players"
              onClick={() => setNavExpanded(false)}
            >
              Players
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
