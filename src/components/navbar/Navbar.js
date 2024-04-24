import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from "../Assets/logo.png";
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userName = useSelector(state => state.auth.userName);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const itemsInCart = useSelector(state => state.cart.cartItem);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setNavBar(!navBar);
  };

  const toggleNavbar = () => {
    setNavBar(!navBar);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='nav-head'>
      <nav className="navbar">
        <div className='hambug'>
          <button className="navbar-toggler" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <p>ZOX Outfits</p>
          <button className="navbar-toggler-r" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className="navbar-nav" style={{ display: navBar ? 'flex' : '' }}>
          <li className="nav-item"><Link to="/" className="nav-link" onClick={closeSidebar}>Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link" onClick={closeSidebar}>About</Link></li>
          <li className="nav-item"><Link to="/product" className="nav-link" onClick={closeSidebar}>Products</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeSidebar}>Contact</Link></li>
          {isAuthenticated ? (
            <>
              <li className="nav-item"><p className="nav-link">{userName}</p></li>
              <li className="nav-item"><button className="nav-link" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li className="nav-item"><Link to="/signup" className="nav-link" onClick={closeSidebar}>SignUp</Link></li>
              <li className="nav-item"><Link to="/login" className="nav-link" onClick={closeSidebar}>Login</Link></li>
            </>
          )}
          <li className="nav-item nav-change d-block ">
            <Link to="/cart" className="nav-link" >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cart-items'>{itemsInCart.length}</span>
            </Link>
          </li>
        </ul>
        <div className="nav-item nav-change e-block">
            <Link to="/cart" className="nav-link" >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cart-items e-item'>{itemsInCart.length}</span>
            </Link>
          </div>
      </nav>
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Navbar;
