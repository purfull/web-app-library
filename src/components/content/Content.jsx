import React, { useState, useRef, useEffect } from "react";
import "./content.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const [openIndex, setOpenIndex] = useState([]);

  // const contentPart2Ref = useRef(null);

  // useEffect(() => {
  //   const mm = window.matchMedia("(min-width: 768px)");
  //   if (mm.matches && contentPart2Ref.current) {
  //     ScrollTrigger.create({
  //       trigger: contentPart2Ref.current,
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: true,
  //       scrub: 1,
  //       markers: false, // set to true to debug
  //     });
  //   }
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const contentPart2Ref = useRef();
  useEffect(() => {
    if (!contentPart2Ref.current || window.innerWidth < 1024) return;

    const titleElement = document.querySelector(".content-part1");

    ScrollTrigger.create({
      trigger: contentPart2Ref.current,
      start: "top-=60vh top",
      end: "bottom 40%",
      // markers: true,
      scrub: true,
      pin: titleElement,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const contentData = [
    {
      question: "Cutting-Edge Digital Learning Environment",
      answer:
        "Botho University’s digital roots as a computer training institute have helped to grow a strong online learning platform powered by Blackboard, offering ebooks, video lectures, discussion forums, and interactive content - accessible anytime, anywhere - to support flexible, engaging education for today’s mobile and connected learners.",
    },

    {
      question: "Personalised Support for Online Learners",
      answer:
        "Botho University supports online learners through a dedicated team of Programme Mentors who offer academic guidance, handle administrative queries, and ensure timely support. Regular progress monitoring helps identify at-risk students early, enabling proactive interventions to keep learners on track and fully supported.",
    },
    {
      question: "Industry Relevant and Accredited Programme Offerings",
      answer:
        "Botho University offers accredited online programmes across key disciplines, with exemption options for experienced professionals. Both undergraduate and postgraduate pathways provide flexibility, while the university’s BOS ISO 9001:2015 certification reflects its commitment to internationally recognised quality and academic excellence.",
    },
    {
      question: "Interactive and Immersive Virtual Classrooms",
      answer:
        "Botho University enhances online learning with bi-weekly live classes via Zoom and Blackboard, offering real-time interaction, peer collaboration, and instant feedback. This dynamic, engaging experience mirrors the quality of on-campus study while providing the flexibility of fully online education.",
    },
    {
      question: "Comprehensive E-Library Access",
      answer:
        "Online learners at Botho University enjoy unlimited access to an extensive e-library, featuring leading journal databases such as Emerald, ProQuest, and JSTOR. This vast repository of academic resources supports research and learning, ensuring that students have the necessary tools to excel in their studies.",
    },
    {
      question: "Commitment to Innovation and Impact",
      answer:
        "Botho University's core values of vibrance, innovation, and impact drive its mission to produce well-rounded, entrepreneurial, and globally employable graduates. The university's innovative teaching approaches integrate academic learning with real-world experience, preparing students to meet the demands of the modern workforce.",
    },
  ];

  const toggleFaq = (index) => {
    // setOpenIndex(openIndex === index ? null : index);
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <div className="content-container page-gap">
      <div className="content-part1">
        <span className="secondary-heading margin-bottom">
          Why Botho University Online?
        </span>
        <br />
        <br />
        <span className="secondary-paragraph coloured-padding black">
          Here's why Botho University should be your top pick for online
          education
        </span>
        {/*<div className="button">
           <button className="secondary-button">
            <span className="button-text">Discover More Benefits </span>
            <img
              className="secondary-arrow-styles"
              src="/icon/maroon-arrow.png"
              alt="arrow-forward"
            />
          </button> 
        </div>*/}
      </div>
      <div className="content-part2 home-page-content" ref={contentPart2Ref}>
        <span className="secondary-paragraph coloured-padding black" style={{textAlign: "justify"}}>
          Choosing the right institution for online learning is crucial for
          academic success and career advancement. Botho University stands out
          as a premier choice for online learners, offering a blend of
          technological innovation, comprehensive support, and a commitment to
          excellence.
        </span>
        <div className="content-portion" style={{ paddingTop: "5vh" }}>
         {contentData.map((item, index) => {
  const isOpen = openIndex.includes(index);

  return (
    <div key={index} className="content-item">
      <div
        className={`content-question ${isOpen ? "open" : ""}`}
        onClick={() => toggleFaq(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
      >
        <span className="question-text">{item.question}</span>
        <span className={`icon-wrapper ${isOpen ? "rotate" : ""}`}>
          {isOpen ? (
            <MinusOutlined style={{ fontSize: 15 }} />
          ) : (
            <PlusOutlined style={{ fontSize: 15 }} />
          )}
        </span>
      </div>

      {/* Animated wrapper */}
      <div
        className={`content-answer-wrapper ${isOpen ? "open" : ""}`}
      >
        <div className="content-answer">
          {item.answer.split("\n\n").map((paragraph, i) => (
            <p key={i} className="answer-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <Divider />
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
};

export default Content;
