import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ user, isLoggedIn }) => {
  return (
    <header>
      <h1>HawkEye</h1>
      <div className="userControls">
        {
          isLoggedIn &&
          <h2>{user.firstName}</h2>
        }
      </div>
      <nav>
<<<<<<< HEAD
        {
          !isLoggedIn && (
            <React.Fragment>
              <Link to="/login">Login</Link>
              <Link to="/sign-up">Sign-up</Link>
            </React.Fragment>
          )
        }
=======
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign-up</Link>
>>>>>>> 31104b6f8640892ab6c2d1e8e990a8d94d8c3a7b
        <Link to="/images">Images</Link>
        <Link to="/upload-images">Upload an Image</Link>
      </nav>
    </header>
  );
};

export default NavBar;
