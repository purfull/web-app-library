import React, { useEffect, useState } from "react";
import "./feedBackSection.css";
import Item from "antd/es/list/Item";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Carousel } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const studentdeatils = [
  {
    studentsdata:
      "Studying online with Botho University has been a rewarding journey so far. The flexible learning model makes it easier to manage my studies alongside other commitments, and the academic support has been excellent. I’m gaining advanced skills in Information System Management that I know will strengthen my career in tech and digital forensics.",
    imgs: ["/icon/Icon2.png", "/icon/Icon.png"],
    studentname: "Purfull",
    year: "2023",
  },
  {
    studentsdata:
      "Studying online with Botho University has been a rewarding journey so far. The flexible learning model makes it easier to manage my studies alongside other commitments, and the academic support has been excellent. I’m gaining advanced skills in Information System Management that I know will strengthen my career in tech and digital forensics.",
    imgs: ["/icon/Icon2.png", "/icon/Icon.png"],
    studentname: "Purfull",
    year: "2083",
  },
];

const FeedBackSection = () => {

  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updatesildes = () => {

      const width = window.innerWidth;
      setSlidesToShow(width < 600 ? 1 : (width > 500 && width > 1200) ? 2 : 2)
    }

    updatesildes();

    window.addEventListener('resize', updatesildes);

    return () => window.removeEventListener('resize', updatesildes)

  }, [])

  const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className="prev-button" onClick={onClick} style={{ ...style, zIndex: 1 }}>
      <IoIosArrowBack size={24} color="white" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className="next-button" onClick={onClick} style={{ ...style, zIndex: 1 }}>
      <IoIosArrowForward size={24} color="white" />
    </button>
  );
};


  return (
         <div className="feedback-main">
         <div className="feeback-headers">
        <div className="primary-heading-and-button">
          <p className="secondary-heading">What Our Students Say</p>
          <div className="arrow-button-feedback">
      
          </div>
        </div>
        <div className="second-main">
          <p className="secondary-paragraph black ">
            Our expert teachers make learning simple, flexible, and practical.
            Students love the support they get and how easy it is to study from
            anywhere.
          </p>
        </div>
        {/* <div className="arrow-button-feedback-mobile">
          <button className="next-button-mobile">
            <IoIosArrowBack />{" "}
          </button>
          <button className="next-button-mobile">
            <IoIosArrowForward />
          </button>
        </div> */}
      </div>


      <div className="feedback-cards">
  
        {/* <Slider
        className="carosel-inner"
          slidesToShow={slidesToShow}
          arrows={true}
          prevArrow={<CustomPrevArrow className ="prev-button" />}
          nextArrow={<CustomNextArrow className="next-button" />}
          
        > */}
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
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default FeedBackSection;
