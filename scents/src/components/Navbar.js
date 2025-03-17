// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // To enable navigation with React Router

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Scentify</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/perfumes" className="navbar-link">Perfumes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
