import React, { useState, useRef, useEffect } from "react";
import "./coursestrutureSection.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CourseStruture = () => {
    const [openIndex, setOpenIndex] = useState([]);

    const contentPart2Ref = useRef(null);

    useEffect(() => {
        const mm = window.matchMedia("(min-width: 768px)");
        if (mm.matches && contentPart2Ref.current) {
            ScrollTrigger.create({
                trigger: contentPart2Ref.current,
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

    const contentData = [
        {
            question: "Physics",
            answer:
                "Botho University’s digital roots as a computer training institute have helped to grow a strong online learning platform powered by Blackboard, offering ebooks, video lectures, discussion forums, and interactive content - accessible anytime, anywhere - to support flexible, engaging education for today’s mobile and connected learners.",
        },

        {
            question: "Pre-Calculus",
            answer:
                "Botho University supports online learners through a dedicated team of Programme Mentors who offer academic guidance, handle administrative queries, and ensure timely support. Regular progress monitoring helps identify at-risk students early, enabling proactive interventions to keep learners on track and fully supported.",
        },
        {
            question: "Computer Architecture",
            answer:
                "Botho University offers accredited online programmes across key disciplines, with exemption options for experienced professionals. Both undergraduate and postgraduate pathways provide flexibility, while the university’s BOS ISO 9001:2015 certification reflects its commitment to internationally recognised quality and academic excellence.",
        },
        {
            question: "",
            answer:
                "Botho University enhances online learning with bi-weekly live classes via Zoom and Blackboard, offering real-time interaction, peer collaboration, and instant feedback. This dynamic, engaging experience mirrors the quality of on-campus study while providing the flexibility of fully online education.",
        },
        // {
        //     question: "Comprehensive E-Library Access",
        //     answer:
        //         "Online learners at Botho University enjoy unlimited access to an extensive e-library, featuring leading journal databases such as Emerald, ProQuest, and JSTOR. This vast repository of academic resources supports research and learning, ensuring that students have the necessary tools to excel in their studies.",
        // },
        // {
        //     question: "Commitment to Innovation and Impact",
        //     answer:
        //         "Botho University's core values of vibrance, innovation, and impact drive its mission to produce well-rounded, entrepreneurial, and globally employable graduates. The university's innovative teaching approaches integrate academic learning with real-world experience, preparing students to meet the demands of the modern workforce.",
        // },

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
        <div className="content-container">
            <div className="content-part1">
                <span className="secondary-heading">Programme Structure</span>
                <ul class="semester-list">
                    <li>Semester 1</li>
                    <li>Semester 2</li>
                    <li>Semester 2 Elective Group One (Select One)</li>
                    <li>Semester 3</li>
                    <li>Semester 3 Elective Group One (Select One)</li>
                    <li>Semester 4</li>
                    <li>Semester 4 Elective Group One (Select One)</li>
                    <li>Semester 4 Elective Group Two (Select One)</li>
                    <li>Semester 5</li>
                    <li>Semester 6</li>
                    <li>Semester 6 Elective Group One (Select One)</li>
                    <li>Semester 6 Elective Group Two (Select One)</li>
                    <li>Semester 7</li>
                    <li>Semester 8</li>
                    <li>Semester 8 Elective Group One (Select One)</li>
                    <li>Semester 8 Elective Group Two (Select One)</li>
                </ul>
            </div>
            <div className="content-part2" ref={contentPart2Ref}>

                <div className="content-portion">
                    {contentData.map((item, index) => (
                        <div key={index} className="content-item">
                            <div
                                className={`content-question ${openIndex === index ? "open" : ""
                                    }`}
                                onClick={() => toggleFaq(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
                            >
                                <span className="question-text">{item.question}</span>
                                {openIndex.includes(index) ? (
                                    <MinusOutlined style={{ fontSize: 15 }} />
                                ) : (
                                    <PlusOutlined style={{ fontSize: 15 }} />
                                )}
                            </div>

                            {openIndex.includes(index) && (
                                <div className="content-answer">
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

export default CourseStruture;
