import React from "react";
import "./enquireSection.css";
import arrow from "/icon/arrow_forward.png";
// import aa from "/icon/Vector.png"
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const EnquireSection = ({ cardData, cardTitle }) => {
  const navigate = useNavigate();

  const handleFeePage = (course) => {
  const cleaned = course
    .trim()
    .replace(/\(.*?\)/g, '')   // remove anything in brackets
    .replace(/,/g, '')         // remove commas
    .replace(/\.$/, '')        // remove trailing period
    .replace(/\./g, '')        // remove all dots
    .replace(/\s+/g, '')      // remove all whitespace
    .replace(/-/g, '');
    
  const slug = cleaned.toLowerCase();
  navigate(`/fee/${slug}`);
  window.scrollTo(0, 0);
};
 const handleEnq = () => {

  window.open('https://bothouniversity.academiaerp.com/enquire/', '_blank', 'noopener,noreferrer');

  }
  return ( 
    <div className="course-container page-gap" >
      
                <span className="secondary-heading" >
                  {cardTitle}
  {/* {cardTitle?.split(" ").slice(0, 2).join(" ")}<br />

  {cardTitle?.split(" ").slice(2).join(" ")} */}
      </span>

      <div className="card-container">
        {cardData?.map((item, index) => (
          <Card
            className="course-card"
            key={index}
            // title={item.title}
            bordered={true}
          >
            {/* <p className="course-tag">{item.courseName}</p> */}

            <div className="title-logo-main">
              <img src={item.image} className="course-icon-image" /> 
              <p className="course-title ">{item.title}</p>

              {/* <p>logo</p> */}
              {/* <img src="/icon/More.png"/> */}
            </div>

            <div className="main-fee-deatils">
              <div className="sub-amount-deatils">
                <p>Total Fees</p>
                <p className="enquire-heading">${item.amountdetails?.fees}</p>
              </div>
              <div className="sub-amount-deatils">
                <p>Programme Credit</p>
                <p className="enquire-heading">{item.amountdetails?.module}</p>
              </div>
              <div className="sub-amount-deatils">
                <p>Total Credits</p>
                <p className="enquire-heading">{item.amountdetails?.credits}</p>
              </div>
            </div>

            {/* <div className="divider-enquire"></div> */}

            {/* <div className="course-desc">
              <p>{item.description.one}</p>
              <p>{item.description.two}</p> 
              <p>{item.description.three}</p>
              <p>{item.description.four}</p>
            </div> */}
            <div className="view-enquire-button">
              <button className="search-button view-more" style={{marginTop: "0"}} onClick={() => handleFeePage(item.title)}>View More </button>
              <button className="fourth-button enq-button" onClick={handleEnq}>Enquire Now</button></div>

          </Card>
        ))}
      </div>
    </div>
  );
};

export default EnquireSection;
