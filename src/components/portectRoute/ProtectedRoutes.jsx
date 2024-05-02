// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
import Login from '../signup/Login';
import AdminLogin from '../admin/AdminLogin';

// import {setUserName} from '../../redux/reducer/authSlice'


const ProtectedRoutes = ({ Component }) => {
  const tokens = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  console.log("usersss",user.data);
  // console.log("tokens",tokens);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // if(tokens || )
  
  const RenderComponent = tokens ? <Component /> : <Login /> ;

  return RenderComponent;

}


export default ProtectedRoutes;
