import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <header>
      <h1>HawkEye</h1>
      <nav>
        <Link to="/login" replace>Login</Link>
        <Link to="/sign-up" replace>Sign-up</Link>
        <Link to="/images" replace>Images</Link>

      </nav>
    </header>
  );
};

export default NavBar;
