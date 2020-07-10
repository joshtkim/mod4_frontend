import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  const style = {
    fontFamily: 'Lato'
  }

  return (
    <div className="navbar">
      <div className='welcome'>
        <p>Welcome Eric</p>
      </div>
      <li className="navbar-link"><NavLink to="/home">Home</NavLink></li>
      <li className="navbar-link"><NavLink to="/login">Login</NavLink></li>
      <li className="navbar-link"><NavLink to="/profile" >Profile</NavLink></li>
      <li className="navbar-link"><NavLink to="/budget" >Budget Tracker</NavLink></li>
    </div>
  );
};

export default NavBar;