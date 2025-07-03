import React from "react";
import "./rednav.css";
const RedNavbar = () => {
  return (
    <div className="red-container">
      <div className="red-head">
        <span className="welcome">
          Welcome to
          <span className="white-text"> BOTHO UNIVERSITY</span>
        </span>
        <div className="details">
          <span>@ onlineadmissions@bothouniversity.ac.bw</span>
          <img src="/icon/whatsapp.png" alt="whatsapp" />
          <span>+267 77 017 160</span>
        </div>
      </div>
    </div>
  );
};

export default RedNavbar;
