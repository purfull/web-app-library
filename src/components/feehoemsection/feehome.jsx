import "./feehome.css";
import { Carousel } from "antd";

import React from "react";

const herobanner = [
  {
    Primarytittle: "Affordable. Flexible. Built",
    highlightedText: "Around You",
    PrimaryTitleEnd: "",
    highlightedBgColor: "#841D2E",
    highlightedTextColor: "white",
    subtittle:
      "At Botho University, our online learning fees are designed to give you full control. You only pay for the modules you register for-each one priced according to its credit load. This pay-as-you-go model ensures you’re only investing in what you study, with no hidden costs.",
    button: "Download Full Fee Structure PDF",
    arrowIcon: "/icon/Frame (1).png",
    backgroundImg: "/images/FeeHome.png",
    calledtoAction:
      "98% of our graduates will recommend us to others <span class='desktop-br'><br /></span> (Source: 2025 Graduate Tracer Study)",

    dynamicimg: [
      "/images/Ellipse 21.png",
      "/images/Ellipse 22.png",
      "/images/Ellipse 23.png",
      "/images/Ellipse 24.png",
    ],
  },
  {
    Primarytittle: "Affordable. Flexible. Build",
    highlightedText: "Around You",
    PrimaryTitleEnd: "",
    highlightedBgColor: "#841D2E",
    highlightedTextColor: "white",
    subtittle:
      "At Botho University, our online learning fees are designed to give you full control. You only pay for the modules you register for-each one priced according to its credit load. This pay-as-you-go model ensures you’re only investing in what you study, with no hidden costs.",
    button: "Download Full Fee Structure PDF",
    arrowIcon: "/icon/Frame (1).png",
    backgroundImg: "/images/FeeHome.png",
    calledtoAction:
      "98% of our graduates will recommend us to others <span class='desktop-br'><br /></span> (Source: 2025 Graduate Tracer Study)",

    dynamicimg: [
      "/images/Ellipse 21.png",
      "/images/Ellipse 22.png",
      "/images/Ellipse 23.png",
      "/images/Ellipse 24.png",
    ],
  },
  {
    Primarytittle: "Affordable. Flexible. Build",
    highlightedText: "Around You",
    PrimaryTitleEnd: "",
    highlightedBgColor: "#841D2E",
    highlightedTextColor: "white",
    subtittle:
      "At Botho University, our online learning fees are designed to give you full control. You only pay for the modules you register for-each one priced according to its credit load. This pay-as-you-go model ensures you’re only investing in what you study, with no hidden costs.",
    button: "Download Full Fee Structure PDF",
    arrowIcon: "/icon/Frame (1).png",
    backgroundImg: "/images/FeeHome.png",
    calledtoAction:
      "98% of our graduates will recommend us to others <span class='desktop-br'><br /></span> (Source: 2025 Graduate Tracer Study)",

    dynamicimg: [
      "/images/Ellipse 21.png",
      "/images/Ellipse 22.png",
      "/images/Ellipse 23.png",
      "/images/Ellipse 24.png",
    ],
  },
];

const FeeHome = () => {
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
              style={{
                backgroundImage: `url(${item.backgroundImg})`,
              }}
            >
              <div className="hero-silde-session ">
                {/* <h1
                  className="primary-heading black-text-primary"
                  dangerouslySetInnerHTML={{ __html: item.Primarytittle }}
                ></h1> */}

                <h1 className="primary-heading black-text-primary">
                  {item.Primarytittle}
                  <span
                    style={{
                      backgroundColor: item.highlightedBgColor,
                      color: item.highlightedTextColor,
                      padding: "4px 8px",
                      borderRadius: "4px",
                      marginLeft: "4px",
                      display: "inline-block",
                    }}
                  >
                    {item.highlightedText}
                  </span>
                  {item.PrimaryTitleEnd}
                </h1>

                <p className="secondary-paragraph black-text">
                  {item.subtittle}
                </p>

                {/* <div className="">
                  <button className="primary-button fee-primary-button">
                    {item.button}{" "}
                    <img
                      className="fee-arrow-icon-img"
                      src={item.arrowIcon}
                      alt=""3ee
                      srcset=""
                    />{" "}
                  </button>
                </div> */}
                <div className="sub-heading-main mt-zero">
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
                    className="secondary-paragraph-pec  black-text"
                    dangerouslySetInnerHTML={{ __html: item?.calledtoAction }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="titleBar wraper page-gap">
        <div className="heading">
          <span className="secondary-heading">Our Fees Structure</span>
        </div>
        <div className="secondary-paragraph black padding-zero overview-content">
          <span>
            {" "}
            To support your budgeting, we offer a structured instalment payment
            plan that makes it easier to manage your fees. All fees for the
            current semester must be settled before you progress to the next, so
            staying on track with payments is key to uninterrupted learning.{" "}
            <br></br>
            <br></br>
            Paying is simple and convenient. Use our secure online payment
            gateway, or choose from other flexible options including campus
            payments, bank transfers, and—within Botswana—Orange Money. Invest
            in your future with a payment plan that fits your life.
          </span>
        </div>
      </div>
    </>
  );
};

export default FeeHome;
