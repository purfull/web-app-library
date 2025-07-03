import React, { useState, useRef, useEffect } from "react";
import "./faq.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Faq = ({faqData}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqPart2Ref = useRef(null);

  useEffect(() => {
    const mm = window.matchMedia("(min-width: 768px)");
    if (mm.matches && faqPart2Ref.current) {
      ScrollTrigger.create({
        trigger: faqPart2Ref.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 1,
        markers: false, // set to true to debug
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);



  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-leftpart">
        <span className="secondary-heading faq-heading">
          Frequently Asked Questions
        </span>
      </div>
      <div className="faq-rightpart">
        <div className="faq-portion" ref={faqPart2Ref}>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
              >
                <span className="question-text">{item.question}</span>
                {openIndex === index ? (
                  <MinusOutlined style={{ fontSize: 15 }} />
                ) : (
                  <PlusOutlined style={{ fontSize: 15 }} />
                )}
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  {item.answer.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="answer-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
