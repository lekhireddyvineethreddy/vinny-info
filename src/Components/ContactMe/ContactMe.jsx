import React, { useState } from "react";
import axios from "axios";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://my-portfoilo-bcf99-default-rtdb.firebaseio.com/contacts.json', formData);
      
      // Clear the form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: ''
      });

      // Set submission status to indicate success
      setSubmissionStatus('success');

      // Show success alert
      alert('Your message has been successfully submitted!');
    } catch (error) {
      // Set submission status to indicate failure
      setSubmissionStatus('error');

      // Show error alert
      alert('Oops! Something went wrong. Please try again later.');
      console.error('Error submitting data to Firebase:', error);
    }
  };

  return (
    <div className="container my-5 py-5 text-center" id="contactme">
      <h3 className="mt-3 py-5">
        Contact <span>Me</span>!!
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="First name"
              aria-label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="Last name"
              aria-label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row g-3 align-items-center pt-3 justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="Mobile"
              aria-label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="email"
              className="formControl"
              placeholder="Email"
              aria-label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row g-3 pt-3 align-items-center justify-content-center">
          <div className="col-10 col-lg-6">
            <textarea
              className="formControl"
              placeholder="Message"
              aria-label="Message"
              rows="10"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="button mt-5">
          Send Message🫣
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
