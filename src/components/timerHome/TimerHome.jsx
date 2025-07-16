import React from "react";
import "./TimerHome.css";

import img1 from "/images/Ellipse 21.png";
import img2 from "/images/Ellipse 22.png";
import img3 from "/images/Ellipse 23.png";
import img4 from "/images/Ellipse 24.png";
import downloadIcon from "/icon/Frame (1).png";

const imageList = [img1, img2, img3, img4];

const TimerHome = ({
  data,
  programOverview
}) => {
  return (
    <>

      <div className="timer-home-container">
        <div className="left-part">
          <div className="row-grid">
            <div className="primary-heading black">
              {data?.question}
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
                <h3>{data?.minPeriod} years</h3>
                <p>Minimum Period</p>
              </div>
              <div>
                <h3>{data?.maxPeriod}  years</h3>
                <p>Maximum Period</p>
              </div>
              <div>
                <h3>{data?.programmeCredit} </h3>
                <p>Fees per Programme Credit</p>
              </div>
            </div>
            <div className="grid-2">
              <div>
                <h3>{data?.totalProgrammeCredit} </h3>
                <p>Total Programmes Credits</p>
              </div>
              <div>
                <h3>{data?.noOfModules} </h3>
                <p>Number of Modules</p>
              </div>
              <div>
                <h3>{data?.totalFee} </h3>
                <p>Total Tuition Fee</p>
              </div>
            </div>
          </div>
          {data?.cta && <div className="forButton">
            <button className="secondary-button">
              <span>Apply Now</span>
              <img
                className="secondary-arrow-styles"
                src="/icon/maroon-arrow.png"
                alt="arrow-forward"
              />
            </button>
            <button className="download-button" style={{padding: "0 12px"}}>
              <span className="button-text" >Download Programme Module</span>
              <img src={downloadIcon} alt="download" />
            </button>
          </div>}
        </div>
        <div className="right-part">

          <div className="TimerImage" style={{ borderRadius: "8px", backgroundImage: `url('${data?.image}')` }}>

            {data?.timer && <div className="counter-box-main">
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
            </div>}
          </div>

        </div>
        {/* { img portion in mobile   } */}

        <div className="right-part-mobile">

          <div className="mobile-img-comtainer" style={{ backgroundImage: `url('${data?.image}')` }}>
          </div>

          {data?.timer && <div className="counter-box-main">
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
          </div>}


        </div>
      </div>
      {programOverview && <div className="titleBar wraper timerHome-programme-overview page-gap" >
        <div className="heading" >
          <span className="secondary-heading">
            Programme Overview
          </span>
        </div>
       <div className="secondary-paragraph black padding-zero" style={{ width: "70vw" }}>
  <div dangerouslySetInnerHTML={{ __html: programOverview }} />
</div>
      </div>}
    </>
  );
};

export default TimerHome;
