import React from "react";
import "./TimerHome.css";

import img1 from "../../../public/images/Ellipse 21.png";
import img2 from "../../../public/images/Ellipse 22.png";
import img3 from "../../../public/images/Ellipse 23.png";
import img4 from "../../../public/images/Ellipse 24.png";

const imageList = [img1, img2, img3, img4];

const TimerHome = () => {
  return (
    <div className="timer-home-container">
      <div className="left">
        <div className="row-grid">
          <div className="primary-heading black">
            Bachelor of Science in Data Science
          </div>
          <div className="image-portion">
            <div className="dynamic-image">
              {imageList.map((src, index) => (
                <img
                  key={index}
                  className="dynamic-img"
                  src={src}
                  alt={`Ellipse ${index + 21}`}
                />
              ))}

              <div className="sub-heading">
                98% of our graduates will recommend us to others (Source: 2025
                Graduate Tracer Study)
              </div>
            </div>
          </div>
        </div>
        <div className="col-grid">
          <div className="grid-1">
            <div>
              <h3>4 years</h3>
              <p>Minimum Period</p>
            </div>
            <div>
              <h3>6 years</h3>
              <p>Maximum Period</p>
            </div>
            <div>
              <h3>$13</h3>
              <p>Fees per Programme Credit</p>
            </div>
          </div>
          <div className="grid-2">
            <div>
              <h3>495</h3>
              <p>Total Programmes Credits</p>
            </div>
            <div>
              <h3>35 (27 core + 8 elective)</h3>
              <p>Number of Modules</p>
            </div>
            <div>
              <h3>$6435</h3>
              <p>Total Tuition Fee</p>
            </div>
          </div>
        </div>
        <div className="forButton">
          <button className="secondary-button">
            <span>Apply Now</span>
            <img
              className="secondary-arrow-styles"
              src="/icon/maroon-arrow.png"
              alt="arrow-forward"
            />
          </button>
          <button className="download-button">
            <span className="button-text">Download Programme Module</span>
            <img src="/icon/download.png" alt="download" />
          </button>
        </div>
      </div>
      <div className="right">
        <div className="TimerImage">
          <img className="img" src="\images\TimerImage.png" alt="TimerImage" />
        </div>
        <div className="countdown-box">
          <div className="timer-row">
            <div className="time-block">
              <h2>20</h2>
              <span>Days</span>
            </div>
            <div className="time-block">
              <h2>30</h2>
              <span>Hours</span>
            </div>
            <div className="time-block">
              <h2>55</h2>
              <span>Minutes</span>
            </div>
            <div className="time-block">
              <h2>20</h2>
              <span>Seconds</span>
            </div>
          </div>
          <div className="start-date">
            <i className="fa fa-info-circle" /> Start By: 30 June 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerHome;
