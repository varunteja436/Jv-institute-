import React from "react";
import { Link } from "react-router-dom";

import department from './departments.png';
import events from './admin.jpg';
import studentlogin from './slogin.jpg';
import payment from './pay.jpg';
import Indoor from './enquiry.jpg';
import './Mainpage.css'; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import cone from './homepageseven.jpg';

function Mainpage() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="line">
          <div className="career-container">
            <img src={cone} alt="Career Logo" className="career-logo" />
            <p>
              <Link to="/Campus">Campus</Link><br />
              At JV Institute of Technology, your journey towards a promising career begins.<br />
              JV is not just an educational institution;<br />
              it's a platform that nurtures your talents,<br />
              hones your skills, and equips you for a successful future.
            </p>
          </div>

          <div className="Department">
            <img src={department} alt="Department Logo" className="career-logo" />
            <p>
              <Link to="/Department">Department</Link><br />
              At GNIT, your journey towards a promising career begins.<br />
              GNIT is not just an educational institution;<br />
              it's a platform that nurtures your talents,<br />
              hones your skills, and equips you for a successful future.
            </p>
          </div>
        </div>

        <div className="line">
          <div className="teacher">
            <img src={events} alt="Admin/Teaching Logo" className="career-logo" />
            <p>
              <Link to="/Events">College Events</Link><br />
              At GNIT, your journey towards a promising career begins.<br />
              GNIT is not just an educational institution;<br />
              it's a platform that nurtures your talents,<br />
              hones your skills, and equips you for a successful future.
            </p>
          </div>
          <div className="slogin">
            <img src={studentlogin} alt="Student Login Logo" className="career-logo" />
            <p>
              <Link to="/Updation">Student Login</Link><br />
              At GNIT, your journey towards a promising career begins.<br />
              GNIT is not just an educational institution;<br />
              it's a platform that nurtures your talents,<br />
              hones your skills, and equips you for a successful future.
            </p>
          </div>
        </div>

        <div className="line">
          <div className="payment">
            <img src={payment} alt="Tuition Fee Payment Logo" className="career-logo" />
            <p>
              <Link to="/Tution">Tuition Fee Payment</Link><br />
              At GNIT, your journey towards a promising career begins.<br />
              GNIT is not just an educational institution;<br />
              it's a platform that nurtures your talents,<br />
              hones your skills, and equips you for a successful future.
            </p>
          </div>

          <div className="enquiry">
            <img src={Indoor} alt="Student Enquiry Logo" className="career-logo" />
            <p>
              <Link to="/Indoorgames">College Indoor Games  </Link><br />
              At GNIT, your journey towards a promising career begins.<br />
              GNIT is not just an educational institution;<br />
              it's a platform that nurtures your talents,<br />
              hones your skills, and equips you for a successful future.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mainpage;
