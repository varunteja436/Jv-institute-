import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
      </div>

      <div className="left">
        <Link to="/CopyrightPage">Copyright@2024 JV Instsitute</Link>
      </div>

      <div className="center">
        <Link to="/AboutUs">About Us</Link>
      </div>
      <div className="right">
        <Link to="/TermsAndConditions">Terms and Conditions</Link>
      </div>
    </div>
  );
}

export default Footer;
