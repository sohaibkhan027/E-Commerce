// LogoutModal.js
import React from 'react';
import "./Admin.css"
import LogoutImg from "../../images/log-out.svg"
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducer/authSlice';


const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();



    function handleLogout(){
      dispatch(logout());
      document.body.classList.remove('open');
    }

  return (
    <div className={`modal-dark  ${isOpen ? 'open' : ''}`}>
      <div className="logout-modal">
        <div className="logout-icon">
          <img src={LogoutImg} alt="Logout" />
        </div>
        <div className="Text-and-supporting-text">
          <div className="Text-and-supporting-text-heading">
            Do you want to log out?
          </div>
          <div className="Text-and-supporting-text-paragraph">
            You can always return to your account.
          </div>
        </div>
        <div className="logout-buttons">
          <button className="secondary-Button" onClick={onClose}>Cancel</button>
          <button className="Primary-Button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
