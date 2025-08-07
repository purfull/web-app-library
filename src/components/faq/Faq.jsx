import React, { useState, useRef, useEffect } from "react";
import "./faq.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Faq = ({ faqData, title, animation }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqPart2Ref = useRef();
  // useEffect(() => {
  //   console.log(title);
    
  //   if (!faqPart2Ref.current || window.innerWidth < 1024 || !animation) return;

  //   const titleElement = document.querySelector(".faq-heading");

  //   ScrollTrigger.create({
  //     trigger: faqPart2Ref.current,
  //     start: "top-=60vh top",
  //     end: "bottom 20%",
  //     // markers: true,
  //     scrub: true,
  //     pin: titleElement,
  //     pinSpacing: false,
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <div className="faq-container page-gap">
      <div className="faq-leftpart">
        <span className="secondary-heading faq-heading">
          {title || "Frequently Asked Questions"}
        </span>
      </div>
      <div className="faq-rightpart">
        <div className="faq-portion" ref={faqPart2Ref}>
          {faqData?.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
              >
                <span className="question-text">{item.question}</span>
                <span
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                >
                  {openIndex === index ? (
                    <MinusOutlined style={{ fontSize: 15 }} />
                  ) : (
                    <PlusOutlined style={{ fontSize: 15 }} />
                  )}
                </span>
              </div>

              <div
                className={`faq-answer-wrapper ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <div className="faq-answer">
                  {item.answer.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="answer-paragraph"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></p>
                  ))}
                </div>
              </div>

              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
