import React from "react";
import "./bannersection.css";

const BannerSection = () => {
  return (
    <div className="main">
      <div className="banner-container">
        <div className="empty"></div>
        <div className="coloured-bg">
          <div className="left">
            <span className="primary-heading white">
              Are You Ready to Take the{" "}
              <span
                className="primary-heading"
                style={{
                  backgroundColor: "white",
                  color: "#841d2e",
                  marginTop: "10px ",
                }}
              >
                Next Step?
              </span>
            </span>

            <p className="secondary-paragraph white">
              Join thousands of students building their future with Botho
              University Online. Flexible. Affordable. Recognized.
            </p>
            <button className="button-styles">
              Explore Programmes{" "}
              <img
                src="/icon/arrow_forward.png"
                alt=""
                className="arrow-icon"
              />
            </button>
          </div>

          <div className="right">
            <div className="shades">
              {/* <img src="/images/Ellipse 20.png" alt="ellipse20" /> */}
              {/* <img src="/images/Ellipse 19.png" alt="ellipse19" /> */}
              {/* <img src="/images/Ellipse 18.png" alt="ellipse18" /> */}
            </div>
            <img src="/images/graduate.png" alt="graduates_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
