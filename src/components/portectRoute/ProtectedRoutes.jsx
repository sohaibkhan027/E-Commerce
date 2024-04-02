import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = (props) => {
    const {Component}= props
    const navigate = useNavigate();
    const loguser = useSelector(state => state.user);
    console.log("user logged in",loguser);
    useEffect(() => {
        console.log('User:', loguser); // Log the user
        if (!loguser.isAuthenticated) {
          console.log('User not authenticated, redirecting to login');
          navigate("/login");
        }
      }, [loguser, navigate]);
    
      return loguser ? <Component /> : null;
}

export default ProtectedRoutes