import React, { useState, useRef, useEffect } from "react";
import "./faq.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Faq = () => {
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

  const faqData = [
    {
      question: "Do I need prior financial knowledge to join this course?",
      answer:
        "Botho University’s digital roots as a computer training institute have helped to grow a strong online learning platform powered by Blackboard, offering ebooks, video lectures, discussion forums, and interactive faq - accessible anytime, anywhere - to support flexible, engaging education for today’s mobile and connected learners.",
    },

    {
      question: "Do I need prior financial knowledge to join this course?",
      answer:
        "No, the course is designed for beginners as well as those with some experience.",
    },
    {
      question: "Do I need prior financial knowledge to join this course?",
      answer:
        "Botho University offers accredited online programmes across key disciplines, with exemption options for experienced professionals. Both undergraduate and postgraduate pathways provide flexibility, while the university’s BOS ISO 9001:2015 certification reflects its commitment to internationally recognised quality and academic excellence.",
    },
    {
      question: "Do I need prior financial knowledge to join this course?",
      answer:
        "Botho University enhances online learning with bi-weekly live classes via Zoom and Blackboard, offering real-time interaction, peer collaboration, and instant feedback. This dynamic, engaging experience mirrors the quality of on-campus study while providing the flexibility of fully online education.",
    },
    {
      question: "Do I need prior financial knowledge to join this course?",
      answer:
        "Online learners at Botho University enjoy unlimited access to an extensive e-library, featuring leading journal databases such as Emerald, ProQuest, and JSTOR. This vast repository of academic resources supports research and learning, ensuring that students have the necessary tools to excel in their studies.",
    },
  ];

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
