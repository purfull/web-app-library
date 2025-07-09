import "./heroSetcion.css";
import { Carousel } from "antd";

import React from "react";
import { useNavigate } from 'react-router-dom';

const herobanner = [
  {
    Primarytittle:
      "Empower Your Future with <span style='background-color: #841D2E'>Botho University </span> Online",
    subtittle:
      "Pursue accredited, globally recognized qualifications designed for flexibility, affordability, and career advancement - anytime, anywhere.",
    button: "Explore Programmes",
    arrowIcon: "../../../public/icon/arrow_forward.png",
    backgroundImg: "../../../public/images/herobanner.png",
    calledtoAction:
      "98% of our graduates will recommend us to others </br> (Source: 2025 Graduate Tracer Study)",

    dynamicimg: [
      "../../../public/images/Ellipse 21.png",
      "../../../public/images/Ellipse 22.png",
      "../../../public/images/Ellipse 23.png",
      "../../../public/images/Ellipse 24.png",
    ],
  },
  {
    Primarytittle:
      "Empower Your Future with <span style='background-color: #841D2E'>Botho University </span> Online",
    subtittle:
      "Pursue accredited, globally recognized qualifications designed for flexibility, affordability, and career advancement - anytime, anywhere.",
    button: "Explore Programmes",
    arrowIcon: "../../../public/icon/arrow_forward.png",
    backgroundImg: "../../../public/images/herobanner.png",
    calledtoAction:
      "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

    dynamicimg: [
      "../../../public/images/Ellipse 21.png",
      "../../../public/images/Ellipse 22.png",
      "../../../public/images/Ellipse 23.png",
      "../../../public/images/Ellipse 24.png",
    ],
  },
  {
    Primarytittle:
      "Empower Your Future with <span style='background-color: #841D2E'>Botho University </span> Online",
    subtittle:
      "Pursue accredited, globally recognized qualifications designed for flexibility, affordability, and career advancement - anytime, anywhere.",
    button: "Explore Programmes",
    arrowIcon: "../../../public/icon/arrow_forward.png",
    backgroundImg: "../../../public/images/herobanner.png",
    calledtoAction:

      "98% of our graduates will recommend us to others  (Source: Based on number of respondents to the 2025 Graduate Tracer Survey)",


    dynamicimg: [
      "../../../public/images/Ellipse 21.png",
      "../../../public/images/Ellipse 22.png",
      "../../../public/images/Ellipse 23.png",
      "../../../public/images/Ellipse 24.png",
    ],
  },
];


const HeroSection = () => {
  
  const navigate = useNavigate();

  const handleAllCourse = () => {
      navigate('/all-courses');
  window.scrollTo(0, 0);
  }
  return (
    <>
      <Carousel
        className="carosal-inner"
        // autoplay
        // dotPosition="bottom"
        dots={false}
      >
        {herobanner.map((item, index) => (
          <div className="">
            <div
              key={index}
              className="hero-slide"
              style={{ backgroundImage: `url(${item.backgroundImg})` }}
            >
              <div className="hero-silde-content-session ">
                <h1
                  className="primary-heading"
                  dangerouslySetInnerHTML={{ __html: item.Primarytittle }}
                ></h1>
                <p className="secondary-paragraph subtitle-white">{item.subtittle}</p>

                <div className="">
                  <button className="primary-button" onClick={handleAllCourse} style={{cursor: "pointer"}}>
                    {item.button}{" "}
                    <img
                      className="arrow-icon-img"
                      src={item.arrowIcon}
                      alt=""
                      srcset=""
                    />{" "}
                  </button>
                </div>
                <div className="sub-heading-main">
                  <div className="dynamic-img-main">
                    {item.dynamicimg.map((item, index) => (
                      <img
                        className="dynamic-img"
                        src={item}
                        alt=""
                        srcset=""
                      />
                    ))}
                  </div>

                  <div
                    className="secondary-paragraph-pec"
                    dangerouslySetInnerHTML={{ __html: item?.calledtoAction }}
                  ></div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSection;
