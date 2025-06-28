import React from 'react';
import './infinitecompo.css';
  const images = [
    "/imgs/Rectangle 5.png",
    "/imgs/Rectangle 6.png",
    "/imgs/Rectangle 7.png",
    "/imgs/Rectangle 8.png"
  ];


const InfiniteSection = () => {

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        
        {/* First group */}
        <div className="group">
          {images.map((img, index) => (
            <img key={index} className="card-img" src={img} alt={`slide-${index}`} />
          ))}
        </div>

        {/* Duplicate group for infinite loop */}
        <div className="group" aria-hidden="true">
          {images.map((img, index) => (
            <img key={`duplicate-${index}`} className="card-img" src={img} alt={`duplicate-slide-${index}`} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default InfiniteSection;
