import React from "react";
import "./infinitecompo.css";
const images = [
  "/images/98.jpg",
  "/images/99.jpg",
  "/images/100.jpg",
  "/images/101.jpg",
  "/images/102.jpg",
  "/images/103.jpg",
];

const InfiniteSection = () => {
  return (
    <div className="carousel-container page-gap">
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
