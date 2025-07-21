import React, { useEffect, useRef } from "react";
import "./rednav.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const RedNavbar = () => {

  const navigate = useNavigate();
  const mobileNavRef = useRef(null);

   const handleWhyClick = () => {
    navigate("/");
    window.scrollTo(0, window.innerHeight);
  };

  const handleFeeClick = () => {
    navigate("/all-fee");
    window.scrollTo(0, 0);
  };

   useEffect(() => {
  const footer = document.querySelector(".footer-main-con");

  if (footer && mobileNavRef.current) {
    ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => gsap.to(mobileNavRef.current, { autoAlpha: 0 }), // hides
      onLeaveBack: () => gsap.to(mobileNavRef.current, { autoAlpha: 1 }) // shows
    });
  }

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}, []);


  return (
    <div className="red-container">
      <div className="red-head">
        <span className="welcome">
          Welcome to
          <span className="white-text"> BOTHO UNIVERSITY</span>
        </span>
        <div className="details">
          <span>@ onlineadmissions@bothouniversity.ac.bw</span>
          <div className="" style={{display: "flex", alignItems: "center"}}>
            
          <img src="/icon/whatsapp.png" alt="whatsapp" style={{marginRight: '4px'}} />
          <span>+267 77 017 160</span>
          </div>
        </div>
      </div>
      <div className="red-head-mobile" ref={mobileNavRef}>
        <span className="welcome"
            onClick={handleWhyClick}
            style={{ cursor: "pointer" }}>
          why BU?
        </span>
        <span style={{color:"gray"}}>|</span>
        <span className="welcome" 
            onClick={handleFeeClick}
            style={{ cursor: "pointer" }}>
          Fee
        </span>
      </div>
    </div>
  );
};

export default RedNavbar;
