import React from "react";
import { Link } from "react-router-dom";
import "./../index.css"

function Header() {
  return (
    <React.Fragment>
      <header className="header-container">
        <div className="header-left">
          <h1>Ohp - Connecting Tattoo Artists & Clients</h1>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </header>
      <hr />
    </React.Fragment>
  );
}

export default Header;