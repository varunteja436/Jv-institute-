import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import admin from './adminlogin.jpg';  
import teacher from './teacherlogin.jpg';
import './Login.css';  
import Navbar from "./Navbar";
import Footer from "./Footer";
import { auth } from '../firebase';  
import { sendPasswordResetEmail } from "firebase/auth";

function Login() {
  const [adminCredentials, setAdminCredentials] = useState({ username: "", password: "" });
  const [teacherCredentials, setTeacherCredentials] = useState({ username: "", password: "" });
  const [adminEmail, setAdminEmail] = useState("");  
  const [teacherEmail, setTeacherEmail] = useState("");  
  const navigate = useNavigate();

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminCredentials({ ...adminCredentials, [name]: value });
  };

  const handleTeacherChange = (e) => {
    const { name, value } = e.target;
    setTeacherCredentials({ ...teacherCredentials, [name]: value });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const { username, password } = adminCredentials;
    if ((username === "Jaspreet" || username === "Varun") && password === "Admin") {
      console.log("Admin login successful:", adminCredentials);
      navigate("/StudentForm");
    } else {
      alert("Invalid admin credentials");
    }
  };

  const handleTeacherSubmit = (e) => {
    e.preventDefault();
    const { username, password } = teacherCredentials;
    if (username === "Pargol" && password === "Admin") {
      console.log("Teacher login successful:", teacherCredentials);
      navigate("/TeacherForm");
    } else {
      alert("Invalid teacher credentials");
    }
  };

  const handleAdminForgotPassword = (e) => {
    e.preventDefault();
    if (adminEmail) {
      sendPasswordResetEmail(auth, adminEmail)
        .then(() => {
          alert("Password reset email sent to Admin!");
          setAdminEmail("");  
        })
        .catch((error) => {
          alert("Error sending password reset email:", error.message);
        });
    } else {
      alert("Please enter the Admin email address.");
    }
  };

  const handleTeacherForgotPassword = (e) => {
    e.preventDefault();
    if (teacherEmail) {
      sendPasswordResetEmail(auth, teacherEmail)
        .then(() => {
          alert("Password reset email sent to Teacher!");
          setTeacherEmail("");
        })
        .catch((error) => {
          alert("Error sending password reset email:", error.message);
        });
    } else {
      alert("Please enter the Teacher email address.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="login-container">
          <h1>Admin Login</h1>
          <div className="login-images">
            <img
              src={admin}
              alt="Admin"
              className="login-image"
            />
          </div>
          <form onSubmit={handleAdminSubmit}>
            <label htmlFor="admin-username">Username:</label>
            <input
              type="text"
              id="admin-username"
              name="username"
              value={adminCredentials.username}
              onChange={handleAdminChange}
              required
            />
            <label htmlFor="admin-password">Password:</label>
            <input
              type="password"
              id="admin-password"
              name="password"
              value={adminCredentials.password}
              onChange={handleAdminChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <form onSubmit={handleAdminForgotPassword} className="forgot-password-form">
            <label htmlFor="admin-email">Admin Email:</label>
            <input
              type="email"
              id="admin-email"
              name="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
          <p>
            Don't have an account? <Link to="/AccountCreation">Register</Link>
          </p>
        </div>

        <div className="login-container">
          <h1>Teacher Login</h1>
          <div className="login-images">
            <img
              src={teacher}
              alt="Teacher"
              className="login-image"
            />
          </div>
          <form onSubmit={handleTeacherSubmit}>
            <label htmlFor="teacher-username">Username:</label>
            <input
              type="text"
              id="teacher-username"
              name="username"
              value={teacherCredentials.username}
              onChange={handleTeacherChange}
              required
            />
            <label htmlFor="teacher-password">Password:</label>
            <input
              type="password"
              id="teacher-password"
              name="password"
              value={teacherCredentials.password}
              onChange={handleTeacherChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <form onSubmit={handleTeacherForgotPassword} className="forgot-password-form">
            <label htmlFor="teacher-email">Teacher Email:</label>
            <input
              type="email"
              id="teacher-email"
              name="email"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
          <p>
            Don't have an account? <Link to="/AccountCreation">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
