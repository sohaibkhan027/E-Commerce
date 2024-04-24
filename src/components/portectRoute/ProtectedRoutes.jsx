import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setUserName} from '../../redux/reducer/authSlice'


const ProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokens = useSelector(state => state.auth.token);
  const authuser = useSelector(state => state.auth);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/protected', {
          headers: {
            'Authorization': `Bearer ${tokens}`,
          },
        });
        const { name } = response.data.user; 
        dispatch(setUserName(name))
        console.log(name);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate('/login');
      }
    };

    if (tokens) {
      fetchData();
    } else {
      navigate('/login');
    }
  }, [tokens, navigate]);

  useEffect(() => {
    if (authuser.isAuthenticated) {
      navigate('/');
    }
  }, [authuser, navigate]);

  // Pass the user's name as a prop to the Component
  return authuser ? <Component /> : null;
};

export default ProtectedRoutes;
