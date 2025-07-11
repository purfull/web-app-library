import React from "react";
import "./TimerHome.css";

import img1 from "../../../public/images/Ellipse 21.png";
import img2 from "../../../public/images/Ellipse 22.png";
import img3 from "../../../public/images/Ellipse 23.png";
import img4 from "../../../public/images/Ellipse 24.png";
import downloadIcon from "../../../public/icon/Frame (1).png";

const imageList = [img1, img2, img3, img4];

const TimerHome = () => {
  return (
    <>

      <div className="timer-home-container">
        <div className="left-part">
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
                </div>

                <div className="sub-heading">
                  98% of our graduates will recommend us to others <br /> (Source: 2025
                  Graduate Tracer Study)
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
              <img src={downloadIcon} alt="download" />
            </button>
          </div>
        </div>
        <div className="right-part">

          <div className="TimerImage" style={{ backgroundImage: "url('/images/timer-img.png')" }}>

            <div className="counter-box-main">
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

        </div>
        {/* { img portion in mobile   } */}

        <div className="right-part-mobile">

          <div className="mobile-img-comtainer" style={{ backgroundImage: "url('/images/timer-img.png')" }}>
          </div>

          <div className="counter-box-main">
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
      </div>
      <div className="titleBar wraper timerHome-programme-overview page-gap" >
        <div className="heading" >
          <span className="secondary-heading">
            Programme Overview
          </span>
        </div>
        <div className="secondary-paragraph black padding-zero" style={{ width: "70vw" }}><p> Want to become a data expert? Our four-year BSc in Data Science equips you to extract meaningful insights from vast datasets. This programme integrates statistics, machine learning, computer science, and data analytics. You'll develop expertise in Data Processing, Analytics, and Visualisation, mastering Machine Learning, Data Mining, and Big Data Technologies. <br></br><br></br>
          With hands-on experience in AI and cloud computing, plus a Capstone Project and industrial attachment, you'll gain practical, industry-relevant skills. Graduates are well-prepared for dynamic careers as Data Scientists, Business Analysts, or AI Engineers in finance, healthcare, and technology.</p></div>
      </div>
    </>
  );
};

export default TimerHome;
