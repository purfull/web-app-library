import React from "react";
import "./Courses.css";
import { Card } from "antd";

const Courses = () => {
  const cardData = [
    {
      cover: "/images/Rectangle 1.png",
      courseName: "undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 2.png",
      courseName: "undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 3.png",
      courseName: "undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 4.png",
      courseName: "undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 5.png",
      courseName: "undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 6.png",
      courseName: "undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
  ];
  return (
    <div className="course-container">
      <div className="titleBar">
        <div>
          <span className="primary-heading">
            Explore Our Online <br className="hidden sm:block" /> Programmes
          </span>
          <button className="search-button">
            <span className="search-button-text">Search by Programmes</span>
            <img
              src="/icon/Vector.png"
              alt="arrow"
              style={{
                borderRadius: "50%",
                padding: "8px",
                border: "1px ",
                backgroundColor: "#841d26",
                width: "32px",
                height: "32px",
                objectFit: "contain",
              }}
            />
          </button>
        </div>
        <div className="secondary-paragraph mobile-topheading">
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
            <button className="fourth-button read">Read More</button>
          </Card>
        ))}
      </div>
      <div className="bottom-button">
        <button className="transparent-button">
          <span className="button-text">View All Programmes</span>
          <img src="/icon/arrow_forward.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Courses;
