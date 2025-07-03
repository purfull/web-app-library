import React from "react";
import "./feedBackSection.css";
import Item from "antd/es/list/Item";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Carousel } from "antd";

const studentdeatils = [
  {
    studentsdata:
      "Studying online with Botho University has been a rewarding journey so far. The flexible learning model makes it easier to manage my studies alongside other commitments, and the academic support has been excellent. I’m gaining advanced skills in Information System Management that I know will strengthen my career in tech and digital forensics.",
    imgs: ["/icon/Icon2.png", "/icon/Icon.png"],
    studentname: "suthan",
    year: "2023",
  },
  {
    studentsdata:
      "Studying online with Botho University has been a rewarding journey so far. The flexible learning model makes it easier to manage my studies alongside other commitments, and the academic support has been excellent. I’m gaining advanced skills in Information System Management that I know will strengthen my career in tech and digital forensics.",
    imgs: ["/icon/Icon2.png", "/icon/Icon.png"],
    studentname: "suthan",
    year: "2023",
  },
];

const FeedBackSection = () => {
  return (
    <div className="feedback-main">
      <div className="feeback-headers">
        <div className="primary-heading-and-button">
          <p className="secondary-heading">What Our Students Say</p>
          <div className="arrow-button-feedback">
            <button className="next-button">
              <IoIosArrowBack />{" "}
            </button>
            <button className="next-button">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="second-main">
          <p className="secondary-paragraph black">
            Our expert teachers make learning simple, flexible, and practical.
            Students love the support they get and how easy it is to study from
            anywhere.
          </p>
        </div>
        <div className="arrow-button-feedback-mobile">
          <button className="next-button-mobile">
            <IoIosArrowBack />{" "}
          </button>
          <button className="next-button-mobile">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

    
      <div className="feedback-cards">
        <Carousel
          className="carosel-inner"
          dotPosition="false"
          slidesToShow={2}
          arrows={true}
        >
          {studentdeatils.map((item, index) => (
            <div key={index} className="card-1">
              <div className="student-card">
                <div className="student-images">
                  {item.imgs.map((img, imgIndex) => (
                    <img
                      className="icon-img"
                      key={imgIndex}
                      src={img}
                      alt={`img-${imgIndex}`}
                    />
                  ))}
                </div>
                <p className="secondary-paragraph black">{item.studentsdata}</p>
                <div className="divider"> </div>
                <p className="secondary-paragraph black">
                  {item.studentname} .., {item.year}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBackSection;
