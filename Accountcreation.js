import React, { useState } from 'react';
import './AccountCreation.css';
import Navbar from './Navbar';
    import Footer from './Footer';

const AccountCreation = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && type && phoneNumber && password) {
   
      setRegistrationStatus('Account Created Successfully');
    } else {
      setRegistrationStatus('Please fill in all fields');
    }
  };

  return (
    <div>
      <Navbar />
    <div className="account-creation-container">
      <h1>Create Your Account</h1>
      <form className="account-creation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
             />
        </div>
        <div className="form-group">
          <label htmlFor="type">Enter Your Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="" disabled>Select Type</option>
            <option value="Sub Admin">Sub Admin</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Enter Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password"
          />
        </div>
        <button type="submit">Register</button>
        </form>
      {registrationStatus && <p className="registration-status">{registrationStatus}</p>}
    </div>
    <Footer />
    </div>
  );
};

export default AccountCreation;
