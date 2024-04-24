import React, { useEffect } from 'react';
import './StyleReg.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  message } from 'antd';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signInForm } from '../../redux/reducer/RegistrationSlice';
import { loginSuccess,loginFailure } from '../../redux/reducer/authSlice';
import axios from 'axios';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .max(32, 'Password must be at most 32 characters')
            .matches(/^(?=.*?[#?!@$%^&*-])/, 'Password must contain at least one special character'),
  });

  // const users = useSelector(state => state.user.userAccounts);
  const tokens = useSelector(state => state.auth.token);

  console.log("token",tokens);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async (values, actions) => {
    try {
      await loginSchema.validate(values, { abortEarly: false });
      const res = await axios.post('http://localhost:8000/reg/login', values);
      dispatch(loginSuccess({ token: res.data.token, user: res.data.user }));
      message.success('Login successful');
      navigate('/');
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || 'Email or Password in not Valid';
        message.error(errorMessage);

      } else if (error.request) {
        message.error('No response received from server. Please try again later.');
        
      } else {
        message.error('An error occurred. Please try again later.');
      }
      dispatch(loginFailure(error.message));
    } finally {
      actions.setSubmitting(false);
    }
  };
  



  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Login</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="row row-space">
                    <div className="col-3">
                      <div className="input-group">
                        <label className="label">Email</label>
                        <Field className="input--style-4" type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-3">
                      <div className="input-group">
                        <label className="label">Password</label>
                        <Field className="input--style-4" type="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error-message" />
                      </div>
                    </div>
                  </div>
                  <div className="p-t-15">
                    <button className="btn" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                    <p className='p-button'>Do have an account? <span className='spanButton' onClick={()=>{
        navigate("/signup")
      }}>SIGNUP</span></p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


     // console.log("token",token);
      // if (token) {
      //   dispatch(setToken(token)); // Dispatch action to set token in Redux store
      //   localStorage.setItem("token", token);
      //   navigate("/show");
      // }
      // const matchedUser = users.find(user => user.email === values.email && user.password === values.password);

      // if (matchedUser) {

      //   // Dispatch login action
      //   dispatch(signInForm(matchedUser)); 
      //   message.success('Login successful');
      //   navigate('/');

      // } else {
      //   // If user is not found or credentials are invalid
      //   message.error('Invalid email or password');
      // }