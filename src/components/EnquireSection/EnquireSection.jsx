import React from "react";
import "./enquireSection.css";
import arrow from '/icon/arrow_forward.png'
// import aa from "/icon/Vector.png"
import { Card } from "antd";

const EnquireSection = () => {
  const cardData = [
    {

      title: "Advanced Diploma in Financial Markets",
      description: {
        one: "1. Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2. Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1 +7 more",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "42,000",
        credits: "120 or 130",
        module: "10 or 11",
      }
    },
    {

      title: "Advanced Diploma in Financial Markets",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1 +7 more",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"
      },
      amountdetails: {
        fees: "42,000",
        credits: "120 or 130",
        module: "10 or 11",
      }
    },
    {

      title: "Advanced Diploma in Financial Markets",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1 +7 more",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"
      },
      amountdetails: {
        fees: "42,000",
        credits: "120 or 130",
        module: "10 or 11",
      }
    },
    {

      title: "Advanced Diploma in Financial Markets",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1 +7 more",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "42,000",
        credits: "120 or 130",
        module: "10 or 11",
      }

    },
    {

      title: "Advanced Diploma in Financial Markets",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1 +7 more",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "42,000",
        credits: "120 or 130",
        module: "10 or 11",
      }
    },
    {

      title: "Advanced Diploma in Financial Markets",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1 +7 more",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "42,000",
        credits: "120 or 130",
        module: "10 or 11",
      }
    },
  ];
  return (
    <div className="course-container" style={{ paddingTop: "8vh" }}>
      <div className="titleBar" >
        <div className="heading" >
          <span className="secondary-heading">
            Fees for 2025
          </span>
        </div>
        <div className="secondary-paragraph black" style={{ padding: " 10px", width: "70vw" }}><span> To support your budgeting, we offer a structured instalment payment plan that makes it easier to manage your fees. All fees for the current semester must be settled before you progress to the next, so staying on track with payments is key to uninterrupted learning. <br></br>
          Paying is simple and convenient. Use our secure online payment gateway, or choose from other flexible options including campus payments, bank transfers, and—within Botswana—Orange Money.
          Invest in your future with a payment plan that fits your life.</span></div>
      </div>

      <div className="card-container">
        {cardData.map((item, index) => (
          <Card
            className="course-card"
            key={index}
            // title={item.title}
            bordered={true}
          >
            {/* <p className="course-tag">{item.courseName}</p> */}

            <div className="title-logo-main">
              <p className="course-title">{item.title}</p>
              <p>logo</p>
            </div>

            <div className="main-fee-deatils">

              <div className="sub-amount-deatils">
                <p>Total Fees</p>
                <p>{item.amountdetails?.fees}</p>
              </div>
              <div className="sub-amount-deatils">
                <p>Total Credits</p>
                <p>{item.amountdetails?.credits}</p>
              </div>
              <div className="sub-amount-deatils" >
                <p>Total  Modules</p>
                <p>{item.amountdetails?.module}</p>
              </div>



            </div>
            <div className="course-desc">
              <p>{item.description.one}</p>
              <p>{item.description.two}</p>
              <p>{item.description.three}</p>
              <p>{item.description.four}</p>
            </div>
            <div className="view-enquire-button">
              <button>View More </button>
              <button>Enquire Now</button></div>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default EnquireSection;
