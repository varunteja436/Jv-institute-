import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Updation.css'; // Assuming you have a CSS file for styling

const Updation = ({ addOrEditUpdation, currentId, updationObjects = {} }) => {
  const initializedFieldValues = {
    name: "",
    age: "",
    department: "",
    telephone: "",
    fee: ""
  };

  const [values, setValues] = useState(initializedFieldValues);

  useEffect(() => {
    if (currentId === "" || !updationObjects[currentId]) {
      setValues(initializedFieldValues);
    } else {
      setValues(updationObjects[currentId]);
    }
  }, [currentId, updationObjects]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
      fee: name === "department" ? (value === "Civil" ? "30000$" : value === "IT" ? "50000$" : "") : values.fee
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditUpdation(values);
    setValues(initializedFieldValues);
    console.log("Form submitted with values:", values);
  };

   return (
    <div>
      <Navbar />
      <div className="form-container">
        <h1>Enter Your Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Enter Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="age">Enter Your Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={values.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="telephone">Enter Your Telephone Number:</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={values.telephone}
              onChange={handleChange}
              placeholder="Enter your telephone number"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="department">Select Your Department:</label>
            <select
              id="department"
              name="department"
              value={values.department}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select department</option>
              <option value="Civil">Civil</option>
              <option value="IT">IT Department</option>
            </select>
          </div>
          {values.department && (
            <div className="form-field">
              <label>Fee:</label>
              <input
                type="text"
                value={values.fee}
                readOnly
              />
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Updation;

