import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import CSS file for styling
import Logo from "../Assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-head'>
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <p>ZOX Outfits</p>
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
      </div>
      <ul className="navbar-nav" style={{ display: isOpen ? 'flex' : '' }}>
      
        <li className="nav-item"><Link to="/" className="nav-link" onClick={toggleNavbar}>Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link" onClick={toggleNavbar}>About</Link></li>
        <li className="nav-item"><Link to="/product" className="nav-link" onClick={toggleNavbar}>Products</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link" onClick={toggleNavbar}>Contact</Link></li>
        <li className="nav-item"><Link to="/signup" className="nav-link" onClick={toggleNavbar}>SignUp</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link" onClick={toggleNavbar}>Login</Link></li>
        <li className="nav-item nav-change"><Link to="/cart" className="nav-link " onClick={toggleNavbar}><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
