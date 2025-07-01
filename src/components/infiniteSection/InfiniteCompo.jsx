import React from "react";
import "./infinitecompo.css";
const images = [
  "/images/scroll-Img1.png",
  "/images/scroll-Img2.png",
  "/images/scroll-Img3.png",
  "/images/scroll-Img4.png",
];

const InfiniteSection = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* First group */}
        <div className="group">
          {images.map((img, index) => (
            <img
              key={index}
              className="card-img"
              src={img}
              alt={`slide-${index}`}
            />
          ))}
        </div>

        {/* Duplicate group for infinite loop */}
        <div className="group" aria-hidden="true">
          {images.map((img, index) => (
            <img
              key={`duplicate-${index}`}
              className="card-img"
              src={img}
              alt={`duplicate-slide-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSection;
