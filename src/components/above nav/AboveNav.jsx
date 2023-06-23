import React from 'react';
import './aboveNav.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='abovenav'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right-side">
        <span>Shakeel Khuhro</span>
      </div>
    </div>
  );
};

export default Navbar;
