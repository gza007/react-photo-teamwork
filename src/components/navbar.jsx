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
              <React.Fragment>
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
                <div>
                  <Link to="/" onClick={onLogout}>
                    Logout
                  </Link>
                </div>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <div>
                  <Link to="/login">
                    Login
                  </Link>
                </div>
                <div>
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
