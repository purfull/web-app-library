import React from "react";
import "./statichome.css";

import img1 from "../../../public/images/Ellipse 21.png";
import img2 from "../../../public/images/Ellipse 22.png";
import img3 from "../../../public/images/Ellipse 23.png";
import img4 from "../../../public/images/Ellipse 24.png";
import backgroundImg from "../../../public/images/StaticHome.jpg"; // adjust path as needed

import { FaStar } from "react-icons/fa";

const imageList = [img1, img2, img3, img4];
const iconData = [
  {
    src: "/icon/promise.png",
    alt: "promise",
    title: "100% Online Learning",
    text: "Study anytime, anywhere - fully supported.",
  },
  {
    src: "/icon/tasks.png",
    alt: "task",
    title: "Multiple Intakes",
    text: "Join one of 6 flexible start dates each year.",
  },
  {
    src: "/icon/payment.png",
    alt: "payment",
    title: "Flexible Payments",
    text: "Pay per module - learn at your own pace and budget.",
  },
];

const staticHome = () => {
  return (
    <div className="home-container" style={{marginBottom: "50vh"}}>
      <div className="top-sections-main">
        <div className="top-sections">
          <div className="portion-1">
            <div className="primary-heading">
              Discover Online Learning at{" "}
              <span style={{ backgroundColor: "#ffffff", color: "#841d2e" }}>
                Botho University
              </span>
            </div>
            <div className="bottom-portion">
              <div className="dynamic-img-main">
                {imageList.map((src, index) => (
                  <img
                    key={index}
                    className="dynamic-img"
                    src={src}
                    alt={`Ellipse ${index + 21}`}
                  />
                ))}
                <div className="sub-heading white">
                  98% of our graduates will recommend us to others (Source: 2025
                  Graduate Tracer Study)
                </div>
              </div>
            </div>
          </div>
          <div className="portion-2">
            <div className="bold-text">Your Ambition. Our Platform.</div>
            <div className="secondary-paragraph">
              Shape your future with flexible, career-driven programmes designed
              for modern life. Study fully online with the freedom to learn on
              your schedule - without putting your life on hold. With multiple
              intakes per year, dedicated support, practical learning tools, and
              industry-relevant qualifications, Botho University gives you the
              edge to grow, lead, and succeed - from wherever you are.
            </div>
          </div>
        </div>
      </div>

      {/* //2nd session */}

      <div className="banner-main">
        {/* <div className="image-banner" style={{backgroundImage}}> */}
        {/* style={{ backgroundImage: `url(${bannerImage})` }} */}

        <div
          className="image-banner"
          style={{
            backgroundImage: ` linear-gradient(rgba(152, 29, 46, 0.5), rgba(0, 0, 0, 0.2)) ,url(${backgroundImg})`,
            backgroundSize: "cover", // ensures the image covers the whole div
            backgroundPosition: "center", // centers the image
            backgroundRepeat: "no-repeat", // prevents tiling
            height: "60vh", // set a height (or use CSS class)
            width: "75%",
          }}
        >
          <div className="icons">
            {iconData.map((item, index) => (
              <div className="icon-item" key={index}>
                <div className="icon-circle">
                  <img src={item.src} alt={item.alt} />
                </div>
                <h4 className="icon-heading">{item.title}</h4>
                <p className="icon-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default staticHome;
