import React, { useState, useRef, useEffect } from "react";
import "./coursestrutureSection.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Paragraph from "antd/es/skeleton/Paragraph";

// gsap.registerPlugin(ScrollTrigger);

const CourseStruture = ({ courseStruture }) => {
  const [openIndex, setOpenIndex] = useState([]);
  const contentPart2Ref = useRef(null);

  const toggleFaq = (semIndex, courseIndex) => {
    const key = `${semIndex}-${courseIndex}`;
    if (openIndex.includes(key)) {
      setOpenIndex(openIndex.filter((k) => k !== key));
    } else {
      setOpenIndex([...openIndex, key]);
    }
  };

  return (
    <div className="semester-content-container">
      <div className="semester-content-part1">
        <span className="secondary-heading">Programme Structure</span>
      </div>

      <div className="semester-content-part2" ref={contentPart2Ref}>
        {courseStruture?.map((semesterItem, semIndex) => (
          <div key={semIndex} className="semester-section">
            <div className="semester-title">
              <p>{semesterItem.semester}</p>
            </div>

            <div className="semester-content-portion">
              {semesterItem.courses?.map((course, courseIndex) => {
                const key = `${semIndex}-${courseIndex}`;
                return (
                  <div key={key} className="semester-content-item">
                    <div
                      className="semester-content-question"
                      onClick={() => toggleFaq(semIndex, courseIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && toggleFaq(semIndex, courseIndex)
                      }
                    >
                      <span className="semester-question-text">
                        {course.question}
                      </span>
                      <span
                        className={`icon-wrapper ${
                          openIndex.includes(key) ? "rotate" : ""
                        }`}
                      >
                        {openIndex.includes(key) ? (
                          <MinusOutlined style={{ fontSize: 15 }} />
                        ) : (
                          <PlusOutlined style={{ fontSize: 15 }} />
                        )}
                      </span>
                    </div>

                    <div
                      className={`semester-content-answer-wrapper ${
                        openIndex.includes(key) ? "open" : ""
                      }`}
                    >
                      <div className="semester-content-answer">
                        <div className="sem-acc">
                          <p className="sub-answer-paragraph secondary-paragraph black">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: course.subanswer,
                              }}
                            />
                          </p>
                          <p className="semester-answer-paragraph secondary-paragraph black">
                            {course.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Divider />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStruture;
