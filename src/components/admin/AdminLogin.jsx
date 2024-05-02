// import React, { useEffect } from 'react';
// import './StyleReg.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  message } from 'antd';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
// import { signInForm } from '../../redux/reducer/RegistrationSlice';
import { loginSuccess,loginFailure } from '../../redux/reducer/authSlice';
import axios from 'axios';

function AdminLogin() {
  const initialValues = {
    email: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    email: yup.string().required('username is required'),
        password: yup.string().required('Password is required')
            // .min(8, 'Password must be at least 8 characters')
            // .max(32, 'Password must be at most 32 characters')
            // .matches(/^(?=.*?[#?!@$%^&*-])/, 'Password must contain at least one special character'),
  });

  // const users = useSelector(state => state.user.userAccounts);
//   const tokens = useSelector(state => state.auth.user);

  // console.log("token",tokens);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async (values, actions) => {
    try {
      await loginSchema.validate(values, { abortEarly: false });
      const res = await axios.post('http://localhost:8000/reg/login', values);
      console.log("res", res);
      const userData = res.data.user;
      const resData = userData.role
      console.log("resData",userData);
      if(resData === "superadmin"){
        dispatch(loginSuccess({ token: res.data.token, user:  userData }));
        message.success('Login successful');
        navigate('/admindashboard');
 }

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
            <h2 className="title">Superadmin</h2>
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
                        <label className="label">Username</label>
                        <Field className="input--style-4" type="text" name="email" />
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

export default AdminLogin;
