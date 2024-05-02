import React, { useState } from 'react';
// import './Admin.css';
import trash from '../../images/trash.svg';
import logout from '../../images/log-out.svg';
import DeleteAccountModal from './Delete';
import LogoutModal from './Logout';

function Models({onClose}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
    document.body.classList.add('open'); // Add 'open' class to body
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    document.body.classList.remove('open'); // Remove 'open' class from body
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
    document.body.classList.add('open'); // Add 'open' class to body
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
    document.body.classList.remove('open'); // Remove 'open' class from body
  };

  return (
    <>
      <div className="modal-transparent">
        <div className="settings-popup">
          <div className="setting-content">
            <div className="setting-modal-header">
              <div className="modal-header-container">
                <h5 className="modal-title">Settings</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose} style={{ border: 'none' }}/>
              </div>
            </div>
            <div className="setting-modal-body">
              <div className="modal-body-text-container">
                <span className="modal-body-text-header">Notifications</span>
                <span className="modal-body-text-paragraph">You can turn off notifications</span>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
            <div className="setting-modal-footer">
              <button type="button" onClick={openLogoutModal} className="Secondary-button2" style={{ width: '45%' }}>
                <img src={logout} alt="Logout" />
                <span>Logout</span>
              </button>
              <button type="button" onClick={openDeleteModal} className="Secondary-button2">
                <img src={trash} alt="Delete Account" />
                <span>Delete Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {isDeleteModalOpen && <DeleteAccountModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />}

      {/* Logout Modal */}
      {isLogoutModalOpen && <LogoutModal isOpen={isLogoutModalOpen} onClose={closeLogoutModal} />}
    </>
  );
}

export default Models;
