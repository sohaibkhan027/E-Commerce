import React, { useState } from 'react';
import './StyleReg.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { message } from 'antd';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpForm } from '../../redux/reducer/RegistrationSlice';
import axios from 'axios';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   password: string;
// }

function Signup() {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const [err ,setErr]= useState('')

  const signupSchema = yup.object().shape({
    name: yup.string().required(' Name is required').matches(/^([a-zA-Z ]+)$/, 'Name must contain only letters and spaces'),
    // name: yup.string().required('name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required(' Phone is required').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    password: yup.string().required('Enter a password')
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be at most 32 characters')
      .matches(/^(?=.*?[#?!@$%^&*-])/, 'Password must contain at least one special character'),
  });

  const users = useSelector((state) => state.user.userAccounts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (values, actions) => {
    console.log('Submitting form...', values);
    try {
      await signupSchema.validate(values, { abortEarly: false });

      // const alreadyUser = users.find((user) => user.email === values.email);
      // if (!alreadyUser) {
        const response = await axios.post('http://localhost:8000/reg/signup', values);
        console.log("response api", response)
    
        if (response.status === 201) {
          // User created successfully
          alert("User added", response.data.message);
          console.log("User added", response.data.message);
          navigate('/login', { replace: true });
        }
      } catch (error) {
        if (error.response && error.response.status === 400 ) {
          // Handle duplicate user error
          // alert(error.response);
          console.log(error.response.data.error);
          setErr(error.response.data.error);
        } else if(error.response.status === 500){
          setErr("phone number already exsist")
          console.log("ok",error.response.data.error)
          // Handle other errors
          console.error(error.response.data.error || 'Something went wrong.');
        }
      } finally {
        actions.setSubmitting(false);
      }
  };

  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Signup</h2>
            <p className='error-message al-user'>{err}</p>
            <Formik
              initialValues={initialValues}
              validationSchema={signupSchema}
              onSubmit={submitForm}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="row row-space">
                    {/* <div className="col-2">
                      <div className="input-group">
                        <label className="label">First name</label>
                        <Field className="input--style-4" type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="div" className="error-message" />
                      </div>
                    </div> */}
                    <div className="col-3">
                      <div className="input-group">
                        <label className="label">Name</label>
                        <Field className="input--style-4" type="text" name="name" />
                        <ErrorMessage name="name" component="div" className="error-message" />
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Email</label>
                        <Field className="input--style-4" type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Phone Number</label>
                        <Field className="input--style-4" type="text" name="phone" />
                        <ErrorMessage name="phone" component="div" className="error-message" />
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
                    <button
                      className="btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <p className='p-button'>Already have an account? <span className='spanButton' onClick={() => {
                      navigate("/login")
                    }}>LOGIN</span></p>

                  </div>
                  <a className='btn btn-blue' href='https://www.facebook.com/'>Login with Facebook</a>
                  <a className='btn btn-non' href='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S637777808%3A1712143599500749&theme=mn&ddm=0'>Login with Google</a>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
