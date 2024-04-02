import React from 'react';
import './StyleReg.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, message } from 'antd';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpForm } from '../../redux/reducer/RegistrationSlice';

function Signup() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  };

  const signupSchema = yup.object().shape({
    firstName: yup.string().required('First name is required').matches(/^[a-zA-Z]+$/, 'First name must contain only letters'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string(),
    password: yup.string().required('Enter a password')
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be at most 32 characters')
      .matches(/^(?=.*?[#?!@$%^&*-])/, 'Password must contain at least one special character'),
  });

  const users = useSelector(state => state.user.userAccounts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (values, actions) => {
    console.log('Submitting form...', values);
    try {
      await signupSchema.validate(values, { abortEarly: false });

      const alreadyUser = users.find(user => user.email === values.email);
      if (!alreadyUser) {
        dispatch(signUpForm(values));
        navigate('/login', { replace: true });
      } else {
        message.error('User already exists');
      }
    } catch (error) {
      let errorMessages = error.inner.map(err => err.message).join('\n');
      message.error(errorMessages.trim());
    } finally {
      actions.setSubmitting(false); // Ensure that the form is always set to not submitting
    }
  };

  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={signupSchema}
              onSubmit={submitForm}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">First name</label>
                        <Field className="input--style-4" type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Last name</label>
                        <Field className="input--style-4" type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="div" className="error-message" />
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

export default Signup;
