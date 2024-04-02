import React, { useState } from 'react';
import './ContectUs.css';
import { Button } from 'antd';

const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // You can add your logic here to handle the form submission
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="contact-input" required />
            <label htmlFor="name" className="contact-label">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="contact-input" required />
            <label htmlFor="email" className="contact-label">Your Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="contact-textarea" rows="3" required></textarea>
            <label htmlFor="message" className="contact-label">Message</label>
          </div>
          <Button type="submit" className="contact-button">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
