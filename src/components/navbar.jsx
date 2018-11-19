import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <h1>HawkEye</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default NavBar;
