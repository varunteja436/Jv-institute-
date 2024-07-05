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
