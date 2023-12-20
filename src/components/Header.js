import React from "react";
import { Link } from "react-router-dom";
import "./../index.css"

function Header() {
  return (
    <React.Fragment>
      <header className="header-container">
        <div className="header-left">
          <h1><em>Ohp</em></h1>
          <p className="sub-title">Connecting Tattoo Artists & Clients</p>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-in">Log-in</Link>
            </li>
            <li>
              <Link to="/user">User Info</Link>
            </li>

            {/* Add more links as needed */}
          </ul>
          <img src={process.env.PUBLIC_URL + '/assets/skull.png'} alt="header img" />
        </div>
      </header>
      <hr />
    </React.Fragment>
  );
}



export default Header;