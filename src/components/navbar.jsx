import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.scss';


const NavBar = ({ isLoggedIn }) => {
  return (
    <header>
      <h1>HawkEye</h1>
      <nav>
        {
            isLoggedIn ?
              (<Link to="/profile">Profile</Link>) :
              (
                <React.Fragment>
                  <Link to="/login">Login</Link>
                  <Link to="/sign-up">Sign-up</Link>
                </React.Fragment>
              )
          }
        <Link to="/images">Images</Link>
        <Link to="/upload-images">Upload an Image</Link>
      </nav>
    </header>
  );
};

export default NavBar;
