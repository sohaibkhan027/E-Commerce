import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { message } from 'antd';
// import './Components.css';

const AddProduct = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    description: '',
    price: '',
    stock: '',
    image: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    // stock: Yup.number().positive('Stock must be positive'),
    image: Yup.mixed().required('Image is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('stock', values.stock);
      formData.append('filename', values.image);

      const response = await axios.post('http://localhost:8000/product/addproduct', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        messageApi.open({
          type: 'success',
          content: 'Product Added',
        });
        resetForm();
        // navigate('/productlist');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      {contextHolder}
      <h2>Add Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label>Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <Field type="number" name="price" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>
            {/* <div className="form-group">
              <label>Stock:</label>
              <Field type="number" name="stock" />
              <ErrorMessage name="stock" component="div" className="error-message" />
            </div> */}
            <div className="form-group">
        <label>Stock:</label>
        <div>
          <label htmlFor="newArrival1" >New Arrival Option 1</label>
          <Field type="radio" className='radios' id="newArrival1" name="radio" value="newArrival1" />
        </div>
        <div>
          <label htmlFor="newArrival2" >New Arrival Option 2</label>
          <Field type="radio" className='radios' id="newArrival2" name="radio" value="newArrival2" />
        </div>
        <div>
          <label htmlFor="newArrival3" >New Arrival Option 3</label>
          <Field type="radio" className='radios' id="newArrival3" name="radio" value="newArrival3" />
        </div>
        <ErrorMessage name="radio" component="div" className="error-message" />
      </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                type="file"
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="image" component="div" className="error-message" />
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
