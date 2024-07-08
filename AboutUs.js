import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <div className="aboutus-content">
        <h1>Welcome to JV Institute of Technology</h1>
        <p>
          <strong>Established in 2011,</strong> JV Institute of Technology started with a modest campus and a vision to provide exceptional education. Our journey began with a small, dedicated space, and we have since expanded into a state-of-the-art campus that reflects our commitment to excellence.
        </p>
        
        <h2>Our Campus</h2>
        <p>
          Over the years, our campus has grown to feature <strong>modern classrooms</strong> equipped with the latest technology, designed to facilitate an engaging and effective learning experience. We are proud of our <strong>state-of-the-art facilities</strong> that support academic and personal growth.
        </p>
        
        <h2>Our Faculty</h2>
        <p>
          We take pride in our <strong>world-class faculty</strong>, who bring a diverse range of expertise and a passion for teaching. Our faculty members are dedicated to providing high-quality education and inspiring our students to achieve their best.
        </p>
        
        <h2>Campus Life</h2>
        <p>
          At JV Institute of Technology, we believe that education extends beyond the classroom. Our students actively participate in a variety of <strong>sports activities</strong> and celebrate numerous <strong>festivities</strong> throughout the year, fostering a vibrant and inclusive campus life.
        </p>
        
        <h2>Join Us</h2>
        <p>
          We are dedicated to nurturing both academic and personal growth. Our facilities and programs are designed to support our students' success and prepare them for future challenges. Join us at JV Institute of Technology and become part of a community dedicated to innovation, learning, and achievement.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
