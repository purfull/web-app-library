import React from "react";
import "./bannersection.css";

const BannerSection = ({
  bannerImage,
  headingText,
  highlightedText,
  paragraphText,
  trailingText,
  backgroundColor,
}) => {
  return (
    <div className="main">
      <div className="banner-container">
        <div className="empty"></div>
        <div
          className="coloured-bg"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="left">
            <span className="primary-heading white">
              {headingText}{" "}
              <span
                className="primary-heading"
                style={{
                  backgroundColor: "white",
                  color: "#841d2e",
                  marginTop: "10px ",
                }}
              >
                {highlightedText}
              </span>{" "}
              {trailingText}
            </span>

            <p className="secondary-paragraph white">{paragraphText}</p>
            <button className="primary-button">
              Enquire Now{" "}
              <img
                src="/icon/arrow_forward.png"
                alt=""
                className="arrow-icon-banner"
              />
            </button>
          </div>

          <div className="right">
            <div className="shades">
              {/* <img src="/images/Ellipse 20.png" alt="ellipse20" /> */}
              {/* <img src="/images/Ellipse 19.png" alt="ellipse19" /> */}
              {/* <img src="/images/Ellipse 18.png" alt="ellipse18" /> */}
            </div>
            <img src={bannerImage} alt="graduates_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
