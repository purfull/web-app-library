import React, { useState, useEffect } from "react";
import "./Courses.css";
import vector from "/icon/Vector.png";
import arrow from "/icon/arrow_forward.png";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Courses = ({
  cardData,
  secondaryHeading,
  moreButton,
  secondaryParagraph,
  courseName,
}) => {
  const [searchText, setSearchText] = useState("");
  const [course, setCourse] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  //for displaying 3 cards in mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize); // Listen for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const filteredSuggestions = cardData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSuggestionClick = (course) => {
    const cleaned = course
      .trim()
      .replace(/\(.*?\)/g, "") // remove anything in brackets
      .replace(/,/g, "") // remove commas
      .replace(/\.$/, "") // remove trailing period
      .replace(/\./g, "") // remove all dots
      .replace(/\s+/g, "") // remove all whitespace
      .replace(/-/g, "");

    const slug = cleaned.toLowerCase();
    navigate(`/course/${slug}`);
    window.scrollTo(0, 0);
    console.log("ffffff");
  };

  const handleCourse = (course) => {
    const cleaned = course
      .trim()
      .replace(/\(.*?\)/g, "") // remove anything in brackets
      .replace(/,/g, "") // remove commas
      .replace(/\.$/, "") // remove trailing period
      .replace(/\./g, "") // remove all dots
      .replace(/\s+/g, "") // remove all whitespace
      .replace(/-/g, "");
    const slug = cleaned.toLowerCase();
    navigate(`/course/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleAllCourse = () => {
    navigate("/all-courses");
    window.scrollTo(0, 0);
  };
  // const filteredCards = cardData.filter((item) =>
  //   item.title.toLowerCase().includes(searchText.toLowerCase())
  // );
  const filteredCards = cardData; // show all cards regardless of search
  const cardsToDisplay = isMobile ? filteredCards.slice(0, 3) : filteredCards;

  const CustomPreviousArrow = ({ onClick }) => (
    <img
      src="/images/button-previous.png"
      onClick={onClick}
      className="previous-button"
      alt="Previous"
    />
  );

  const CustomNextArrows = ({ onClick }) => (
    <img
      src="/images/button-next.png"
      onClick={onClick}
      className="next-arrow-button"
      alt="Next"
    />
  );

  return (
    <div className="course-container page-gap gap-maintain">
      <div className="titleBar">
        <div>
          <span className="secondary-heading">
            {secondaryHeading || (
              <>
                Explore Our Online <br className="hidden sm:block" /> Programmes
              </>
            )}
          </span>

          <div className="search-wrapper">
            <div className="search-button">
              <input
                type="text"
                placeholder="Search Programmes..."
                className="search-button-text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} // Allow time to click
                onFocus={() => setShowSuggestions(true)}
              />
              <img
                src={vector}
                style={{
                  borderRadius: "50%",
                  padding: "8px",
                  // border: "1px ",
                  backgroundColor: "#841d26",
                }}
              />
            </div>

            {/* 🔽 Auto Suggestions Dropdown */}
            {showSuggestions && searchText && (
              <ul className="suggestions-list">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(item.title)}
                      className="suggestion-item"
                    >
                      {item.title}
                    </li>
                  ))
                ) : (
                  <li className="no-match">No matching programmes</li>
                )}
              </ul>
            )}
          </div>
        </div>
        <div
          className="secondary-paragraph mobile-topheading black topper"
          style={{ color: "#000" }}
        >
          {secondaryParagraph || (
            <>
              Advance your career with flexible, accredited online degrees from
              Botho University.
            </>
          )}
        </div>
      </div>
      <div className="mobile-wrapper">
        <div className="search-button">
          <input
            type="text"
            placeholder="Search Programmes..."
            className="search-button-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} // Allow time to click
            onFocus={() => setShowSuggestions(true)}
          />
          <img
            src={vector}
            style={{
              borderRadius: "50%",
              padding: "8px",
              // border: "1px ",
              backgroundColor: "#841d26",
            }}
          />
        </div>

        {/* 🔽 Auto Suggestions Dropdown */}
        {showSuggestions && searchText && (
          <ul className="suggestions-list">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(item.title)}
                  className="suggestion-item"
                >
                  {item.title}
                </li>
              ))
            ) : (
              <li className="no-match">No matching programmes</li>
            )}
          </ul>
        )}
      </div>

      <div className="course-containerr">
        {isMobile ? (
          <div className="carousel-wrapper">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              prevArrow={<CustomPreviousArrow />}
              nextArrow={<CustomNextArrows />}
            >
              {filteredCards.map((item, index) => (
                <div key={index}>
                  <Card
                    cover={
                      item.cover && (
                        <img
                          alt="cover"
                          src={item.cover}
                          className="cover-image"
                        />
                      )
                    }
                    className="course-card"
                  >
                    <p className="course-tag">
                      {courseName || item.courseName}
                    </p>
                    <p className="course-titlee text-elipses-2">{item.title}</p>
                    <p className="course-desc text-elipses-3">
                      {item.description}
                    </p>
                    <button
                      className="fourth-button read explore-button-top"
                      onClick={() => handleCourse(item.title)}
                      style={{ cursor: "pointer" }}
                    >
                      Explore Programme
                    </button>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          filteredCards.map((item, index) => (
            <Card
              key={index}
              cover={
                item.cover && (
                  <img alt="cover" src={item.cover} className="cover-image" />
                )
              }
              className="course-card"
            >
              <p className="course-tag">{courseName || item.courseName}</p>
              <p className="course-titlee text-elipses-2">{item.title}</p>
              <p className="course-desc text-elipses-3">{item.description}</p>
              <button
                className="fourth-button read"
                onClick={() => handleCourse(item.title)}
                style={{ cursor: "pointer" }}
              >
                Explore Programme
              </button>
            </Card>
          ))
        )}
      </div>

      {/* 
      <div className="course-containerr">
        {cardsToDisplay.map((item, index) => (
          <Card
            key={index}
            bordered={true}
            cover={
              item.cover && (
                <img alt="cover" src={item.cover} className="cover-image" />
              )
            }
            className="course-card"
          >
            <p className="course-tag">{courseName || item.courseName}</p>
            <p className="course-titlee text-elipses-2">{item.title}</p>
            <p className="course-desc text-elipses-3">{item.description}</p>
            <button
              className="fourth-button read"
              onClick={() => handleCourse(item.title)}
              style={{ cursor: "pointer" }}
            >
              Explore Programme
            </button>
          </Card>
        ))}
      </div> */}

      {moreButton && (
        <div className="bottom-button">
          <button
            className="transparent-button"
            onClick={handleAllCourse}
            style={{ cursor: "pointer" }}
          >
            <span className="button-text">Explore All Programmes</span>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
