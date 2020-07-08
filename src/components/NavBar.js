import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {


  return (
    <div className="navbar">
      <li className="navbar-link"><NavLink to="/" activeStyle={{
        fontFamily: 'Lato',
        fontWeight: 'light',
        color: 'white'
      }}>Login</NavLink></li>
      <li className="navbar-link"><NavLink to="/profile" activeStyle={{
        fontFamily: 'Lato',
        fontWeight: 'light',
        color: 'white'
      }} >Profile</NavLink></li>
      <li className="navbar-link"><NavLink to="/budget" activeStyle={{
        fontFamily: 'Lato',
        fontWeight: 'light',
        color: 'white'
      }}>Budget Tracker</NavLink></li>
    </div>
  );
};

export default NavBar;