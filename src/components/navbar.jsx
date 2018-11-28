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
        <Link to="/login" replace>Login</Link>
        <Link to="/sign-up" replace>Sign-up</Link>
        <Link to="/images" replace>Images</Link>

      </nav>
    </header>
  );
};

export default NavBar;
