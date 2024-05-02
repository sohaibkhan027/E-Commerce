// DeleteAccountModal.js
import React from 'react';
import Delete from "../../images/trash.svg"
// import './Admin.css';
import { logout } from '../../redux/reducer/authSlice';



const DeleteAccountModal = ({ isOpen, onClose }) => {

    function handleDeleteAccount(){
        console.log("ok");
    }
  return (
    <div className={`modal-dark ${isOpen ? 'open' : ''}`}>
      <div className="logout-modal">
        <div className="logout-icon">
          <img src={Delete} alt="Delete Account" />
        </div>
        <div className="Text-and-supporting-text">
          <div className="Text-and-supporting-text-heading">
            Do you want to delete your account?
          </div>
          <div className="Text-and-supporting-text-paragraph">
            This action is irreversible. You will lose all your data.
          </div>
        </div>
        <div className="logout-buttons">
          <button className="secondary-Button" onClick={onClose}>Cancel</button>
          <button className="Primary-Button primary-color" onClick={handleDeleteAccount}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
