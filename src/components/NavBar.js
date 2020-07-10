import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  return (
    <div className="navbar">
      <li className="navbar-link"><NavLink to="/home">Home</NavLink></li>
      <li className="navbar-link"><NavLink to="/login">Login</NavLink></li>
      <li className="navbar-link"><NavLink to="/profile" >Profile</NavLink></li>
      <li className="navbar-link"><NavLink to="/budget" >Budget Tracker</NavLink></li>
    </div>
  );
};

export default NavBar;