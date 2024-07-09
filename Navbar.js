import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import homepage from './homepagesix.jpg';

function Navbar() {
  return (
    <div>
      <div className="new">
        <h4 className="navbar-brand">
          <Link to="/">JV Institute of Technology</Link>
        </h4>
        <ul className="navbar-list">
          <li><h4><Link to="/Login">Login</Link></h4></li>
        </ul>
      </div>
      <div className="navbar-logo-container">
        <img src={homepage} alt="JV Institute of Technology" className="navbar-logo" />
      </div>
      <div className="vjit">
        <h1>WELCOME TO JV INSTITUTE OF TECHNOLOGY</h1>
      </div>
    </div>
  );
}

export default Navbar;
