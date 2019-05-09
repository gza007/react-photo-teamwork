import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <h1>Team 2 Photo App</h1>
      <nav className="nav">
        {
          isLoggedIn ?
            (
              <div className="nav-bar">
                <div>
                  <Link to="/">
                    Home
                  </Link>
                </div>
                <div>
                  <Link to="/gallery">
                    Gallery
                  </Link>
                </div>
                <div>
                  <Link to="/upload">
                    Upload image
                  </Link>
                </div>
                <div className="logout">
                  <Link to="/" onClick={onLogout}>
                    Logout
                  </Link>
                </div>
              </div>
            ) :
            (
              <React.Fragment>
                <div className="login-button">
                  <Link to="/login">
                    Login
                  </Link>
                </div>
                <div className="signup">
                  <Link to="/sign-up">
                    Sign-Up
                  </Link>
                </div>
              </React.Fragment>
            )
        }
      </nav>
    </header>
  );
};

export default NavBar;
