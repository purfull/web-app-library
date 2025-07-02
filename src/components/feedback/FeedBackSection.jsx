import React from "react";
import "./feedBackSection.css";
import Item from "antd/es/list/Item";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const studentdeatils = [
  {
    studentsdata:
      "My name is Goitseone Thembe, and my journey at Botho University has been truly transformative. From the moment I enrolled, I was welcomed into a dynamic and supportive learning environment that fostered both academic and personal growth. The university’s unwavering commitment to delivering high-quality education is reflected in the well-structured academic programmes and abundant learning resources. Faculty members are not only highly knowledgeable but also deeply invested in students’ success, offering mentorship, guidance, and encouragement throughout my studies. I particularly valued the emphasis on practical experience through internships and real-world exposure, which bridged the gap between theory and application and equipped me with essential, career-ready skills.",
    imgs: ["/icon/Icon2.png", "/icon/Icon.png"],
    studentname: "suthan",
    year: "2023",
  },
  {
    studentsdata:
      "My name is Goitseone Thembe, and my journey at Botho University has been truly transformative. From the moment I enrolled, I was welcomed into a dynamic and supportive learning environment that fostered both academic and personal growth. The university’s unwavering commitment to delivering high-quality education is reflected in the well-structured academic programmes and abundant learning resources. Faculty members are not only highly knowledgeable but also deeply invested in students’ success, offering mentorship, guidance, and encouragement throughout my studies. I particularly valued the emphasis on practical experience through internships and real-world exposure, which bridged the gap between theory and application and equipped me with essential, career-ready skills.",
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
          <p className="secondary-paragraph">
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
              <p className="secondary-paragraph">{item.studentsdata}</p>
              <div className="divider"> </div>
              <p className="secondary-paragraph">
                {item.studentname} .., {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackSection;
