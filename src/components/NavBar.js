import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li><NavLink to="/">Login</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/budget">Budget Tracker</NavLink></li>
    </div>
  );
};

export default NavBar;