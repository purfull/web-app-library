// import React from "react";
// import "./TimerHome.css";

// import img1 from "/images/Ellipse 21.png";
// import img2 from "/images/Ellipse 22.png";
// import img3 from "/images/Ellipse 23.png";
// import img4 from "/images/Ellipse 24.png";
// import downloadIcon from "/icon/Frame (1).png";

// const imageList = [img1, img2, img3, img4];

// const TimerHome = ({ data, programOverview }) => {
//   const handleEnq = () => {

//   window.open('https://bothouniversity.academiaerp.com/applicant-portal/#/auth/login', '_blank', 'noopener,noreferrer');

//   }

//   return (
//     <>
//       <div className="timer-home-container">
//         <div className="left-part">
//           <div className="row-grid">
//             <div className="primary-heading black">{data?.question}</div>
//             <div className="image-portion">
//               <div className="dynamic-image">
//                 {imageList.map((src, index) => (
//                   <img
//                     key={index}
//                     className="dynamic-img"
//                     src={src}
//                     alt={`Ellipse ${index + 21}`}
//                   />
//                 ))}
//               </div>

//               <div className="sub-heading">
//                 98% of our graduates will recommend us to others <br /> (Source:
//                 2025 Graduate Tracer Study)
//               </div>
//             </div>
//           </div>
//           <div className="col-grid">
//             <div className="grid-1">
//               <div>
//                 <h3>{data?.minPeriod} years</h3>
//                 <p>Minimum Period</p>
//               </div>
//               <div>
//                 <h3>{data?.maxPeriod} years</h3>
//                 <p>Maximum Period</p>
//               </div>
//               <div>
//                 <h3>{data?.programmeCredit} </h3>
//                 <p>Fees per Programme Credit</p>
//               </div>
//             </div>
//             <div className="grid-2">
//               <div>
//                 <h3>{data?.totalProgrammeCredit} </h3>
//                 <p>Total Programmes Credits</p>
//               </div>
//               <div>
//                 <h3>{data?.noOfModules} </h3>
//                 <p>Number of Modules</p>
//               </div>
//               <div>
//                 <h3>{data?.totalFee} </h3>
//                 <p>Total Tuition Fee</p>
//               </div>
//             </div>
//           </div>
//           {data?.cta && (
//             <div className="forButton">
//               <button className="secondary-button" onClick={handleEnq}>
//                 <span>Apply Now</span>
//                 <img
//                   className="secondary-arrow-styles"
//                   src="/icon/maroon-arrow.png"
//                   alt="arrow-forward"
//                 />
//               </button>
//               <button className="download-button" style={{ paddingLeft: "12px", paddingRight: "12px" }}>
//                 <span className="button-text">Download Programme Module</span>
//                 <img src={downloadIcon} alt="download" />
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="right-part">
//           <div
//             className="TimerImage"
//             style={{
//               borderRadius: "8px",
//               backgroundImage: `url('${data?.image}')`,
//             }}
//           >
//             {data?.timer && (
//               <div className="counter-box-main">
//                 <div className="countdown-box">
//                   <div className="timer-row">
//                     <div className="time-block">
//                       <h2>20</h2>
//                       <span>Days</span>
//                     </div>
//                     <div className="time-block">
//                       <h2>30</h2>
//                       <span>Hours</span>
//                     </div>
//                     <div className="time-block">
//                       <h2>55</h2>
//                       <span>Minutes</span>
//                     </div>
//                     <div className="time-block">
//                       <h2>20</h2>
//                       <span>Seconds</span>
//                     </div>
//                   </div>
//                   <div className="start-date">
//                     <i className="fa fa-info-circle" /> Start By: 30 June 2025
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* { img portion in mobile   } */}

//         <div className="right-part-mobile">
//           <div
//             className="mobile-img-comtainer"
//             style={{ backgroundImage: `url('${data?.image}')` }}
//           ></div>

//           {data?.timer && (
//             <div className="counter-box-main">
//               <div className="countdown-box">
//                 <div className="timer-row">
//                   <div className="time-block">
//                     <h2>20</h2>
//                     <span>Days</span>
//                   </div>
//                   <div className="time-block">
//                     <h2>30</h2>
//                     <span>Hours</span>
//                   </div>
//                   <div className="time-block">
//                     <h2>55</h2>
//                     <span>Minutes</span>
//                   </div>
//                   <div className="time-block">
//                     <h2>20</h2>
//                     <span>Seconds</span>
//                   </div>
//                 </div>
//                 <div className="start-date">
//                   <i className="fa fa-info-circle" /> Start By: 30 June 2025
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {programOverview && (
//         <div className="titleBar wraper timerHome-programme-overview page-gap">
//           <div className="heading">
//             <span className="secondary-heading">Programme Overview</span>
//           </div>
//           <div
//             className="secondary-paragraph black padding-zero overview-content"
//             // style={{ width: "70vw" }}
//           >
//             <div dangerouslySetInnerHTML={{ __html: programOverview }} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TimerHome;

//suthan code start
// import React, { useState, useEffect } from "react";
// import "./TimerHome.css";

// import img1 from "/images/Ellipse 21.png";
// import img2 from "/images/Ellipse 22.png";
// import img3 from "/images/Ellipse 23.png";
// import img4 from "/images/Ellipse 24.png";
// import downloadIcon from "/icon/Frame (1).png";

// const imageList = [img1, img2, img3, img4];

// const TimerHome = ({ data, programOverview }) => {
//   const [timeLeft, setTimeLeft] = useState({});
//   const [nearestStartDate, setNearestStartDate] = useState(null);
//   // const launchDate = new Date(data?.launchDate).getTime();
//   const launchDate = ["13-01", "10-04"];

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date().getTime();

//       // Convert "DD-MM" strings into valid Date objects for current year

//       const launchDatesTimestamps = launchDate
//         .map(dateStr => {
//           const [day, month] = dateStr.split("-");
//           const thisYear = new Date().getFullYear();
//           const fullDate = new Date(`${day}-${month}-${thisYear}`);
//           return fullDate.getTime();
//         })
//         .filter(timestamp => timestamp > now) // future only
//         .sort((a, b) => a - b);               // nearest first

//       const nearestDate = launchDatesTimestamps[0];

//       if (!nearestDate) return;

//       const diff = nearestDate - now;

//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((diff / (1000 * 60)) % 60);
//       const seconds = Math.floor((diff / 1000) % 60);

//       setTimeLeft({ days, hours, minutes, seconds });
//       setNearestStartDate(new Date(nearestDate));

//     };

//     updateTime(); // Run once immediately
//     const timer = setInterval(updateTime, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnq = () => {
//     window.open(
//       "https://bothouniversity.academiaerp.com/applicant-portal/#/auth/login",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };
//   const download = (url) => {
//     if (!url) return;

//     // Ensure the URL is absolute
//     const fullUrl = url.startsWith("http") ? url : `https://${url}`;

//     window.open(fullUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <>
//       <div className="timer-home-container">
//         <div className="left-part">
//           <div className="row-grid">
//             <div className="primary-heading black">{data?.question}</div>
//             <div className="image-portion">
//               <div className="dynamic-image">
//                 {imageList.map((src, index) => (
//                   <img
//                     key={index}
//                     className="dynamic-img"
//                     src={src}
//                     alt={`Ellipse ${index + 21}`}
//                   />
//                 ))}
//               </div>

//               <div className="sub-heading">
//                 98% of our graduates will recommend us to others <br /> (Source:
//                 2025 Graduate Tracer Study)
//               </div>
//             </div>
//           </div>
//           <div className="col-grid">
//             <div className="grid-1">
//               <div>
//                 <h3>{data?.minPeriod} years</h3>
//                 <p>Minimum Period</p>
//               </div>
//               <div>
//                 <h3>{data?.maxPeriod} years</h3>
//                 <p>Maximum Period</p>
//               </div>
//               <div>
//                 <h3>{data?.programmeCredit} </h3>
//                 <p>Fees per Programme Credit</p>
//               </div>
//             </div>
//             <div className="grid-2">
//               <div>
//                 <h3>{data?.totalProgrammeCredit} </h3>
//                 <p>Total Programme Credits</p>
//               </div>
//               <div>
//                 <h3>{data?.noOfModules} </h3>
//                 <p>Number of Modules</p>
//               </div>
//               <div>
//                 <h3>{data?.totalFee} </h3>
//                 <p>Total Tuition Fee</p>
//               </div>
//             </div>
//           </div>
//           {data?.cta && (
//             <div className="forButton">
//               <button className="secondary-button" onClick={handleEnq}>
//                 <span>Apply Now</span>
//                 <img
//                   className="secondary-arrow-styles"
//                   src="/icon/maroon-arrow.png"
//                   alt="arrow-forward"
//                 />
//               </button>
//               <button
//                 className="download-button"
//                 style={{ paddingLeft: "12px", paddingRight: "12px" }}
//                 onClick={() => download(data?.downloadurl)}
//               >
//                 <span className="button-text">Download Programme Module</span>
//                 <img src={downloadIcon} alt="download" />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Desktop Timer */}
//         <div className="right-part">
//           <div
//             className="TimerImage"
//             style={{
//               borderRadius: "8px",
//               backgroundImage: `url('${data?.image}')`,
//             }}
//           >
//             {data?.timer && (
//               <div className="counter-box-main">
//                 <div className="countdown-box">
//                   <div className="timer-row">
//                     <div className="time-block">
//                       <h2>{timeLeft.days}</h2>
//                       <span>Days</span>
//                     </div>
//                     <div className="divider-vertical"></div>
//                     <div className="time-block">
//                       <h2>{timeLeft.hours}</h2>
//                       <span>Hours</span>
//                     </div>
//                     <div className="divider-vertical"></div>

//                     <div className="time-block">
//                       <h2>{timeLeft.minutes}</h2>
//                       <span>Minutes</span>
//                     </div>
//                     <div className="divider-vertical"></div>

//                     <div className="time-block">
//                       <h2>{timeLeft.seconds}</h2>
//                       <span>Seconds</span>
//                     </div>
//                   </div>
//                   <div className="start-date">
//                     <i className="fa fa-info-circle" /> Start By : { }
//                     {nearestStartDate
//                       ? nearestStartDate.toLocaleDateString("en-GB", {
//                         day: "2-digit",
//                         month: "long",
//                         year: "numeric",
//                       })
//                       : ""}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Timer */}
//         <div className="right-part-mobile">
//           <div
//             className="mobile-img-comtainer"
//             style={{ backgroundImage: `url('${data?.image}')` }}
//           ></div>

//           {data?.timer && (
//             <div className="counter-box-main">
//               <div className="countdown-box">
//                 <div className="timer-row">
//                   <div className="time-block">
//                     <h2>{timeLeft.days}</h2>
//                     <span>Days</span>
//                   </div>
//                   <div className="divider-vertical"></div>

//                   <div className="time-block">
//                     <h2>{timeLeft.hours}</h2>
//                     <span>Hours</span>
//                   </div>
//                   <div className="divider-vertical"></div>

//                   <div className="time-block">
//                     <h2>{timeLeft.minutes}</h2>
//                     <span>Minutes</span>
//                   </div>
//                   <div className="divider-vertical"></div>

//                   <div className="time-block">
//                     <h2>{timeLeft.seconds}</h2>
//                     <span>Seconds</span>
//                   </div>
//                 </div>
//                 <div className="start-date">
//                   <i className="fa fa-info-circle" /> Start By: { }
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Programme Overview */}
//       {programOverview && (
//         <div className="titleBar wraper timerHome-programme-overview page-gap">
//           <div className="heading">
//             <span className="secondary-heading">Programme Overview</span>
//           </div>
//           <div className="secondary-paragraph black padding-zero overview-content">
//             <div dangerouslySetInnerHTML={{ __html: programOverview }} />
//           </div>
//         </div>
//       )}
//     </>
//   );

import React, { useState, useEffect } from "react";
import "./TimerHome.css";

import img1 from "/images/Ellipse 21.png";
import img2 from "/images/Ellipse 22.png";
import img3 from "/images/Ellipse 23.png";
import img4 from "/images/Ellipse 24.png";
import downloadIcon from "/icon/Frame (1).png";

const imageList = [img1, img2, img3, img4];

const TimerHome = ({ data, programOverview, feePage }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nearestStartDate, setNearestStartDate] = useState(null);

  // const launchDate = new Date(data?.launchDate).getTime();
  // const launchDate = ["10-07{", "16-10", "13-01", "10-04"];
  const launchDate = ["13-01", "10-04", "10-07", "16-10"]; // DD-MM

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();

      // Convert "DD-MM" strings into valid Date objects for current year

      const launchDatesTimestamps = launchDate
        .map((dateStr) => {
          const [day, month] = dateStr.split("-");
          const thisYear = new Date().getFullYear();
          const fullDate = new Date(`${thisYear}-${month}-${day}T00:00:00`);
          return fullDate.getTime();
        })
        .filter((timestamp) => timestamp > now) // future only
        .sort((a, b) => a - b); // nearest first

      const nearestDate = launchDatesTimestamps[0];
      if (!nearestDate) return;

      const diff = nearestDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      setNearestStartDate(new Date(nearestDate));
    };

    updateTime(); // Run once immediately
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEnq = () => {
    window.open(
      "https://bothouniversity.academiaerp.com/applicant-portal/#/auth/login",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const download = (url) => {
    if (!url) return;

    // Ensure the URL is absolute
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;

    window.open(fullUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="timer-home-container">
        <div className="left-part">
          <div className="row-grid">
            <div className="primary-heading black">{data?.question}</div>
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
                98% of our graduates will recommend us to others <br /> (Source:
                2025 Graduate Tracer Study)
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
                <h3>{data?.maxPeriod} years</h3>
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
                <p>Total Programme Credits</p>
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
          {data?.cta && (
            <div className="forButton">
              <button className="secondary-button" onClick={handleEnq}>
                <span>Apply Now</span>
                <img
                  className="secondary-arrow-styles"
                  src="/icon/maroon-arrow.png"
                  alt="arrow-forward"
                />
              </button>
              <button
                className="download-button"
                style={{ paddingLeft: "12px", paddingRight: "12px" }}
                onClick={() => download(data?.downloadurl)}
              >
                <span className="button-text">{feePage ? "Download Fee Structure" : "Download Programme Details"}</span>
                <img src={downloadIcon} alt="download" />
              </button>
            </div>
          )}
        </div>

        {/* Desktop Timer */}
        <div className="right-part">
          <div
            className="TimerImage"
            style={{
              borderRadius: "8px",
              backgroundImage: `url('${data?.image}')`,
            }}
          >
            {data?.timer && (
              <div className="counter-box-main">
                <div className="countdown-box">
                  <div className="timer-row">
                    <div className="time-block">
                      <h2>{timeLeft.days}</h2>
                      <span>Days</span>
                    </div>
                    <div className="divider-vertical"></div>
                    <div className="time-block">
                      <h2>{timeLeft.hours}</h2>
                      <span>Hours</span>
                    </div>
                    <div className="divider-vertical"></div>

                    <div className="time-block">
                      <h2>{timeLeft.minutes}</h2>
                      <span>Minutes</span>
                    </div>
                    <div className="divider-vertical"></div>

                    <div className="time-block">
                      <h2>{timeLeft.seconds}</h2>
                      <span>Seconds</span>
                    </div>
                  </div>
                  <div className="start-date">
                    <i className="fa fa-info-circle" /> Start By: {""}
                    {nearestStartDate
                      ? nearestStartDate.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : ""}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Timer */}
        <div className="right-part-mobile">
          <div
            className="mobile-img-comtainer"
            style={{ backgroundImage: `url('${data?.image}')` }}
          ></div>

          {data?.timer && (
            <div className="counter-box-main">
              <div className="countdown-box">
                <div className="timer-row">
                  <div className="time-block">
                    <h2>{timeLeft.days}</h2>
                    <span>Days</span>
                  </div>
                  <div className="divider-vertical"></div>

                  <div className="time-block">
                    <h2>{timeLeft.hours}</h2>
                    <span>Hours</span>
                  </div>
                  <div className="divider-vertical"></div>

                  <div className="time-block">
                    <h2>{timeLeft.minutes}</h2>
                    <span>Minutes</span>
                  </div>
                  <div className="divider-vertical"></div>

                  <div className="time-block">
                    <h2>{timeLeft.seconds}</h2>
                    <span>Seconds</span>
                  </div>
                </div>
                <div className="start-date">
                  <i className="fa fa-info-circle" /> Start By: {""}
                  {nearestStartDate
                    ? nearestStartDate.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                    : ""}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Programme Overview */}
      {programOverview && (
        <div className="titleBar wraper timerHome-programme-overview page-gap">
          <div className="heading">
            <span className="secondary-heading">Programme Overview</span>
          </div>
          <div className="secondary-paragraph black padding-zero overview-content">
            <div dangerouslySetInnerHTML={{ __html: programOverview }} />
          </div>
        </div>
      )}
    </>
  );
};

export default TimerHome;

//suthan code end
