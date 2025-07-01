import React from "react";
import "./bannersection.css";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="empty"></div>
      <div className="coloured-bg">
        <div className="left">
          <span className="primary-heading white">
            Are You Ready to Take the
          </span>
          <span
            className="primary-heading"
            style={{ backgroundColor: "white", color: "#841d2e" }}
          >
            Next Step?
          </span>
          <p className="secondary-paragraph white">
            Join thousands of students building their future with Botho
            University Online. Flexible. Affordable. Recognized.
          </p>
          <button className="primary-button">Explore Programmes</button>
        </div>
        <div className="right">
          {/* <div className="shades">
                        <img src="/images/Ellipse 20.png" alt="ellipse20" />
                        <img src="/images/Ellipse 19.png" alt="ellipse19" />
                        <img src="/images/Ellipse 18.png" alt="ellipse18" />
                    </div> */}
          <img src="/imgs/graduate.png" alt="graduates_image" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
