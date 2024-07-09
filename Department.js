import React from "react";
import { Link } from "react-router-dom";
import "./Department.css";
import it from './IT.jpg';
import civil from './civil.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Department() {
  return (
    <div>
      <Navbar />
      
      {}
      <div className="department-container">
        {}
        <div className="Course">
          <h2>IT Department</h2>
          <img src={it} alt="IT Department Logo" className="career-logo" />
          <h3>Highlights of the Department</h3>
          <ul>
            <li>Conducive environment for Academic</li>
            <li>Effective Teaching & Learning Process</li>
            <li>Centers of Excellence</li>
            <li>State of the art computing facilities for R&D and innovation</li>
            <li>Industry training and campus placements</li>
            <li><b>Course Fee: 50,000$</b></li>
          </ul>
        </div>

        {}
        <div className="Course two">
         <h2>Civil Department</h2>
          <img src={civil} alt="Civil Department Logo" className="career-logo" />
          <h3>Highlights of the Department</h3>
          <ul>
            <li>Conducive environment for Academic</li>
            <li>Effective Teaching & Learning Process</li>
            <li>Centers of Excellence</li>
            <li>State of the art computing facilities for R&D and innovation</li>
            <li>Industry training and campus placements</li>
            <li><b>Course Fee: 30,000$</b></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Department;
