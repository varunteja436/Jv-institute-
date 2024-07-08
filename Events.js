import React from "react";
import Navbar from "./Navbar";

import annual from './annual.jpg'; 
import fest from './fest.png'; 
import "./Events.css";
import Footer from "./Footer";

function Campus() {
  return (
    <div>
      <Navbar />
      <div className="campus-container">
        <div className="event">
          <img src={annual} alt="Annual Event" className="event-logo" />
          <p>At JV Institute of Technology, our exciting college events<br />
            and dedicated organizers work tirelessly to create<br />
            a lively and engaging atmosphere,<br />
            ensuring that our students have ample opportunities<br />
            to showcase their talents, network with peers, and build lasting memories.
          </p>
        </div>
        <div className="event">
          <img src={fest} alt="Fest" className="event-logo" />
          <p>At JV Institute of Technology, our electrifying DJ nights<br />
            and dedicated event planners work tirelessly to create<br />
            an unforgettable experience,<br />
            ensuring that our students can unwind, dance, and enjoy<br />
            vibrant music and a lively atmosphere.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Campus;
