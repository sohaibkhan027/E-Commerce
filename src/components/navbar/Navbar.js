import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import CSS file for styling
import Logo from "../Assets/logo.png"
import Sidebar from './Sidebar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setnavBar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  const toggleNavbar = () => {
    setnavBar(!navBar);
  };

  return (
    <div className='nav-head'>
      <nav className="navbar">
        <div className='hambug' >
          <button className="navbar-toggler" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <p>ZOX Outfits</p>
          <button className="navbar-toggler-r" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <ul className="navbar-nav" style={{ display: navBar ? 'flex' : '' }}>
          <li className="nav-item"><Link to="/" className="nav-link" onClick={closeSidebar}>Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link" onClick={closeSidebar}>About</Link></li>
          <li className="nav-item"><Link to="/product" className="nav-link" onClick={closeSidebar}>Products</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeSidebar}>Contact</Link></li>
          <li className="nav-item"><Link to="/signup" className="nav-link" onClick={closeSidebar}>SignUp</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link" onClick={closeSidebar}>Login</Link></li>
          <li className="nav-item nav-change"><Link to="/cart" className="nav-link " onClick={closeSidebar}><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
        </ul>
      </nav>
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Navbar;
