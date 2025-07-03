import React from "react";
import "./Courses.css";
import arrow from '/icon/arrow_forward.png'
// import aa from "/icon/Vector.png"
import { Card } from "antd";

const Courses = () => {
  const cardData = [
    {
      cover: "/images/Rectangle 1.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 2.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 3.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 4.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 5.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 6.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
  ];
  return (
    <div className="course-container" style={{ paddingTop: "12vh" }}>
      <div className="titleBar">
        <div>
          <span className="secondary-heading">
            Explore Our Online <br className="hidden sm:block" /> Programmes
          </span>
          <button className="search-button">
            <span className="search-button-text">Search</span>
            <img
              src={arrow}
              // alt="arrow"
              style={{
                borderRadius: "50%",
                padding: "8px",
                // border: "1px ",
                backgroundColor: "#841d26",
                // width: "32px",
                // height: "32px",
                // objectFit: "contain",
              }}
            />
          </button>
        </div>
        <div className="secondary-paragraph mobile-topheading black" style={{color: "#000"}}>
          Advance your career with flexible, accredited online degrees from
          <br />
          Botho University.
        </div>
      </div>

      <div className="card-container">
        {cardData.map((item, index) => (
          <Card
            key={index}
            // title={item.title}
            bordered={true}
            cover={
              item.cover && (
                <img alt="cover" src={item.cover} className="cover-image" />
              )
            }
            className="course-card"
          >
            {/* <img  alt="cover" src={item.cover} /> */}
            <p className="course-tag">{item.courseName}</p>
            <p className="course-title">{item.title}</p>
            <p className="course-desc">{item.description}</p>
            <button className="fourth-button read">Explore Programme</button>
          </Card>
        ))}
      </div>
      <div className="bottom-button">
        <button className="transparent-button">
          <span className="button-text">Explore All Programmes</span>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Courses;
