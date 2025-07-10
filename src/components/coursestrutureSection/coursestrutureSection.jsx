



import React, { useState, useRef, useEffect } from "react";
import "./coursestrutureSection.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Paragraph from "antd/es/skeleton/Paragraph";

// gsap.registerPlugin(ScrollTrigger);

const CourseStruture = () => {
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
    // useEffect(() => {
    //     const mm = window.matchMedia("(min-width: 768px)");
    //     if (mm.matches && contentPart2Ref.current) {
    //         ScrollTrigger.create({
    //             trigger: contentPart2Ref.current,
    //             start: "top top",
    //             end: "bottom bottom",
    //             pin: true,
    //             scrub: 1,
    //             markers: false, // set to true to debug
    //         });
    //     }
    //     return () => {
    //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //     };
    // }, []);

    const contentData = [
        {
            semester: "Semester 1",
            courses: [
                {
                    question: "Physics",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Corequisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces key concepts in physical mechanics, including motion, momentum, energy conservation, and rotational dynamics. Students will explore vibrations, wave motion, and physical optics. Through exams, coursework, and discussions, they will develop a strong understanding of physical laws and their applications in solving numerical and conceptual problems.",
                },
                {
                    question: "Pre-Calculus",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This Pre-Calculus module reviews key algebraic concepts, including exponents, polynomials, and complex numbers, before progressing to trigonometry, matrices, and graphing. Students will explore logarithms, conic sections, sequences, and probability. Through video lectures and practice exercises, they will develop problem-solving skills and prepare for advanced mathematical topics such as calculus",
                },
                {
                    question: "Computer Architecture",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces the fundamentals of computer system architecture, covering digital logic, Boolean functions, processor organisation, memory, and peripheral devices. Students will learn about combinational and sequential circuits, CPU functionality, instruction sets, pipeline processing, and parallel computing. By completion, they will understand how digital systems are designed and operate.",
                }, {
                    question: "Writing and Communication",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module enhances students' academic communication skills, enabling them to confidently express ideas, synthesise perspectives, and engage critically with texts. Emphasising referencing, grammar, and plagiarism-free writing, students will develop structured, coherent, and professional work while mastering research tools and communication theories relevant to their academic and professional fields."
                }
            ],
        },
        {
            semester: "Semester 2",
            courses: [
                {
                    question: "Programming Skill 1",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces students to programming in C++, covering structured development techniques, data types, arrays, functions, and object-oriented programming (OOP). Students will learn to design algorithms, write efficient code, and apply programming concepts to solve problems, building a strong foundation for further studies in software development.",
                },
                {
                    question: "Business and Entrepreneurship",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module equips learners with essential entrepreneurial and business management skills. Students will critically understand entrepreneurship, idea generation, opportunity exploitation, and new venture creation. Emphasising creativity, problem-solving, and entrepreneurial culture, the module prepares students to identify business opportunities and apply innovative strategies for successful business management and growth.",
                },
                {
                    question: "Operating Systems",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores fundamental operating system concepts and algorithms, covering OS components, structures, memory management, processes, threads, CPU scheduling, and security. Students will learn about deadlocks, process synchronisation, and file management. By completion, they will understand OS functionality and its role in managing hardware and software resources efficiently.",
                },
            ],
        },
        {
            semester: "SEMESTER 2 ELECTIVE GROUP ONE (CHOOSE ONE)",
            courses: [
                {
                    question: "Biology 1",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module furnishes non-biological science students with fundamental knowledge of anatomy, physiology, pathology, and pharmacology. It enables effective collaboration with health professionals on interdisciplinary projects, such as developing healthcare software. Students will gain insights into key body systems, common diseases, and their treatment or management approaches.",
                },
                {
                    question: "Chemistry 1",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces fundamental chemistry concepts, including the periodic table, atomic structure, and periodic trends. Students will explore ionisation energy, metallic character, stoichiometry, aqueous reactions, and gas laws. By completion, they will understand chemical formulae, equations, and the principles governing the behaviour of elements and compounds.",
                },

            ],
        },
        {
            semester: "Semester 3",
            courses: [
                {
                    question: "Calculus",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces key calculus concepts, including differentiation, integration, and their relationship in the Fundamental Theorem of Calculus. Students will learn to differentiate and integrate basic functions, apply calculus to graphing, optimisation, and real-world problems, and use integration to calculate area, volume, and work values."
                },

                {
                    question: "Programming Skill 2",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces students to data analysis using R, covering data import, manipulation, visualisation, and reporting. Students will learn to create dynamic reports with R Markdown, clean data with tidyr, visualise data using ggplot2, write functions with loops and conditionals, and handle special data types like dates, times, and strings."
                },
                {
                    question: "Computer Networks",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module provides a solid foundation in network communication, covering network models, signal types, transmission media, and switching techniques. Students will learn about error detection, data link control, network layer protocols, wireless LANs, and backbone networks. They will also explore high-speed digital access technologies like DSL, cable modems, and SONET."

                },
                {
                    question: "Databases",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores the database approach, contrasting it with file-oriented systems. Topics include the relational model, relational algebra, SQL, database design, normalisation, security, and administration. Students will analyse RDBMS design, apply SQL for data manipulation, and understand advanced database concepts, bridging theory and practice in modern database systems."
                }

            ]
        },
        {
            semester: "SEMESTER 3 ELECTIVE GROUP ONE (CHOOSE ONE)",
            courses: [
                {
                    question: "Cloud Computing",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module provides a hands-on study of Cloud computing, covering service models like IaaS, PaaS, SaaS, and BPaaS. Students will explore cloud security, risk management, cryptographic key management, and access control. They will also analyse cloud computing essentials, security baselines, and architectural concepts whilst implementing cloud security measures."
                },
                {
                    question: "Emerging Technologies I",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This course explores the integration of educational technology into curriculum design, emphasising best practices, national standards, and emerging technologies.Students will research and apply IoT concepts, including its functionalities, applications, enabling technologies, and interoperability. They will also analyse challenges affecting IoT adoption across various industries and domains."
                },


            ]
        },
        {
            semester: "Semster 4",
            courses: [
                {
                    question: "Discrete Mathematics for Computer Science",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces discrete mathematics, crucial for computing. Students will learn its relevance, understand mathematical statements, and grasp concepts like trees, graphs, and numeric functions. The module emphasises applying these principles to logical and mathematical exercises, building a foundation for computational problem-solving."
                },

                {
                    question: "Data Structures and Algorithms",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module covers fundamental data structures and algorithms, emphasising practical C++ implementation. Students will master linear (linked lists, stacks, queues) and non-linear (graphs, trees) structures, along with sorting, searching, hashing, and file access. Proficiency in pointers, recursion, and threads will be developed, enabling effective data management."
                },
                {
                    question: "Data Mining",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores core Data Mining and Machine Learning principles. Students will learn to analyse, implement, and evaluate techniques using real datasets and toolkits. They'll compare methods, interpret results, and demonstrate awareness of current research, enabling them to adapt solutions for practical problems."
                },
                {
                    question: "Research Methodology",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces students to standard research methodologies, theories, and processes. Students will learn to define research topics, set objectives, review academic literature, and apply appropriate data collection and analysis methods. Emphasis is placed on ethical considerations, research planning, proposal writing, and effective presentation of findings."
                },


            ]
        },
        {
            semester: "SEMESTER 4 ELECTIVE GROUP ONE (SELECT ONE)",
            courses: [
                {
                    question: "Cryptography",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This course explores cryptosystem principles and design, covering traditional, block, and stream ciphers, public/private key systems, hash functions, and network security. Students will analyse cryptographic goals, design principles, and attack vectors. They'll understand key management, security notions, and apply mathematical foundations like discrete logarithms and factorising."
                },
                {
                    question: "Mobile Operating Systems",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores mobile operating systems, focusing on Android architecture. Students will learn about processes, threads, scheduling, concurrency, and synchronisation. Memory management, file systems, storage, and input/output mechanisms are also covered, providing a comprehensive understanding of mobile OS functionality and enhancement."
                },



            ]
        },
        {
            semester: "SEMESTER 4 ELECTIVE GROUP ONE (SELECT ONE)",
            courses: [
                {
                    question: "Advanced Computer Networks",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module advances networking knowledge, covering network architecture, protocols, and applications. Students will analyse packet-switched networks, implement web services, and explore wireless technologies. Topics include routing, security, multimedia networking, and network management, providing a comprehensive understanding of modern network infrastructure."
                },
                {
                    question: "Optimization",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces Mathematical Optimisation, covering theory and algorithms for solving optimisation problems. Students will learn combinatorial algorithms and their underlying mathematics. They'll apply algorithms, interpret outputs, prove propositions, and determine optimisation problem geometries using linear algebra. Practical computations are emphasised, building a strong foundation in optimisation techniques."
                }

            ]
        },
        {
            semester: "Semster 5",
            courses: [
                {
                    question: "Probability and Statistics",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces statistical concepts for engineering, covering probability, random variables, and data analysis. Students will learn to describe data, compute probabilities, construct probability distributions, and apply binomial and normal distributions. Emphasis is on practical application, enabling students to critically evaluate data and draw reliable conclusions."
                },
                {
                    question: "Programming Skill 3",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces Data Science techniques using Python. Students will learn Python basics, loops, and control flows. Using NumPy and Pandas, they'll manipulate data structures like Series and DataFrames, performing data wrangling on numeric, string, and datetime data. The focus is on practical application for data analysis."
                },
                {
                    question: "Data Visualization",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores data visualisation, covering theoretical foundations and practical skills. Students will learn design principles, analyse data-informed decisions, and apply concepts to projects. Using tools like Tableau, they'll create effective visualisations, connecting to data sources and ensuring data quality. Emphasis is on translating raw data into actionable insights."
                },
                {
                    question: "Linear Algebra",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module advances linear algebra, progressing from linear systems to abstract concepts. Students will solve diverse problems, understand theoretical mathematics, and explore topics like vector spaces, matrices, diagonalisation, inner product spaces, and groups. The module emphasises a transition from coordinate-based to abstract linear algebra."
                },



            ]
        },
        {
            semester: "Semster 6",
            courses: [
                {
                    question: "Machine Learning",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces key concepts in physical mechanics, including motion, momentum, energy conservation, and rotational dynamics. Students will explore vibrations, wave motion, and physical optics. Through exams, coursework, and discussions, they will develop a strong understanding of physical laws and their applications in solving numerical and conceptual problems."
                },
                {
                    question: "Artificial Intelligence",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces AI's core principles, techniques, and applications. Students will explore AI history, apply problem-solving and learning principles, and understand intelligent agents, neural networks, and expert systems. They'll discuss AI's scope, limitations, and societal impact, fostering a foundational understanding of the field."
                },
                {
                    question: "Data Analytics",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module builds foundational data analytics skills, focusing on data preparation, modelling, and statistical tools. Students will apply and interpret descriptive and inferential statistics, analyse computer output, and critically evaluate statistical applications in various contexts. The emphasis is on practical application and responsible data interpretation."
                },


            ]
        },
        {
            semester: "SEMESTER 6 ELECTIVE GROUP ONE ( SELECT ONE)",
            courses: [
                {
                    question: "Emerging Technologies",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores emerging technologies, focusing on practical application and future trends. Students will design applications, develop algorithms, and critically evaluate technology's impact. They'll address ethical, legal, and social implications, assess intelligent devices, and analyse customer experience through data analytics. Emphasis is on developing critical thinking, communication, and problem-solving skills."
                },
                {
                    question: "Natural Language Processing",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces Natural Language Processing (NLP), covering automated linguistic data processing from diverse sources. Students will learn core NLP principles, algorithms, and challenges, including language models, parsing, and text classification. Practical skills involve using state-of-the-art tools, creating NLP pipelines, and adapting existing models."
                },

            ]
        },
        {
            semester: "SEMESTER 6 ELECTIVE GROUP TWO ( SELECT ONE)",
            courses: [
                {
                    question: "Computational Biology",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces non-biological science students to key concepts in anatomy, physiology, pathology, and pharmacology, fostering interdisciplinary collaboration in health-related projects. Students will explore computational biology, bioinformatics, and data analytics whilst developing essential IT and statistical skills to solve biological problems, generate reports, and create professional presentations."
                },
                {
                    question: "Computational Finance",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module equips students with programming skills to solve financial models using VBA and Python. They'll compute security values, price various options (American, European, Asian, barrier), and apply calibration techniques like Black-Scholes. Monte Carlo simulation for option pricing and Greek estimates is also covered, fostering practical financial modelling expertise."
                },


            ]
        },
        {
            semester: "Semster 7",
            courses: [
                {
                    question: "Industrial Attachment",
                    subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module bridges academic study with real-world work experience. Students will apply learned skills, reflect on their programme's relevance, and understand the importance of graduate profile traits. The focus is on practical application, professional development, and adapting to the work environment."
                }

            ]
        },
        {
            semester: "Semster 8 ",
            courses: [
                {
                    question: "Multivariate Statistics",
                        subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores multivariate data analysis, addressing high-dimensional data challenges. Students will learn geometric and algebraic foundations of techniques, applying them using R. The module covers models and methods for multivariate data, fostering familiarity with key techniques and the ability to analyse real-world datasets."
                },
                {
                    question: "Individual Project in Data Science",
                        subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module fosters independent problem-solving through student-selected projects. Students apply learned knowledge to complex issues, demonstrating practical understanding. The module emphasises lifelong learning, encouraging reflection on the skills and knowledge required for successful project completion."
                },
                {
                    question: "Professional Issues and Ethics",
                        subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores ethical challenges in computing, covering topics like privacy, security, and intellectual property. Students will analyse computer crimes, software development ethics, and data protection. They'll apply ethical decision-making, understand IT professional responsibilities, and evaluate approaches to protect privacy and freedom of speech in the digital age.   "
                },

            ]
        },
        {
            semester: "SEMESTER 8 ELECTIVE GROUP ONE (CHOOSE ONE)",
            courses: [
                {
                    question: "Big Data Databases",
                        subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module explores big data's challenges in modelling, storage, and access. Students will learn to recognise big data characteristics, identify organisational benefits, distinguish data sources, apply security best practices, and understand the data lifecycle."
                },
                {
                    question: "Algorithm Analysis",
                        subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "WThis module introduces students to algorithm analysis, covering step-by-step problem-solving procedures. By module end, students will: understand algorithm and data structure design techniques, apply data structures in algorithm implementation, design efficient algorithms, prove correctness, analyse efficiency, and understand fundamental algorithmic problems and solutions."
                },

            ]
        },
        {
            semester: "SEMESTER 8 ELECTIVE GROUP TWO (CHOOSE ONE) ",
            courses: [
                {
                    question: "Big Data Technologies",
                        subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module introduces the intersection of data engineering and data science for extracting knowledge from Big Data. Students will learn to use Big Data infrastructure, solve integration and storage challenges, perform data analytics, derive strategies for privacy and policy, and conduct original research on Big Data problems."

                },
                {
                    question: "Advanced Artificial Intelligence",
                     subanswer: "Code: E5-PHY-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $156<br/>Module Credits: 12",
                    answer: "This module teaches modern AI through coding and training machine learning algorithms. Students learn supervised and unsupervised methods, deep learning concepts, mathematical foundations, data preprocessing, and model evaluation. Practical examples cover reasoning, language, and image recognition."
                }
            ]
        },

    ];

    return (
        <div className="content-container">
            <div className="content-part1">
                <span className="secondary-heading">Programme Structure</span>
            </div>

            <div className="content-part2" ref={contentPart2Ref}>
                {contentData.map((semesterItem, semIndex) => (
                    <div key={semIndex} className="semester-section">
                        <div className="semester-title">
                            <p>{semesterItem.semester}</p>
                        </div>

                        <div className="content-portion">
                            {semesterItem.courses.map((course, courseIndex) => {
                                const key = `${semIndex}-${courseIndex}`;
                                return (
                                    <div key={key} className="content-item">
                                        <div
                                            className="content-question"
                                            onClick={() => toggleFaq(semIndex, courseIndex)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => e.key === "Enter" && toggleFaq(semIndex, courseIndex)}
                                        >
                                            <span className="question-text">{course.question}</span>
                                            {openIndex.includes(key) ? (
                                                <MinusOutlined style={{ fontSize: 15 }} />
                                            ) : (
                                                <PlusOutlined style={{ fontSize: 15 }} />
                                            )}
                                        </div>

                                        {openIndex.includes(key) && (
                                            <div className="content-answer">

                                                <div className="sem-acc" >

                                                    <p className="sub-answer-paragraph half-width">
                                                        {/* {course.subanswer} */}
                                                        <div dangerouslySetInnerHTML={{ __html: course.subanswer }} />

                                                    </p>
                                                    <p className="answer-paragraph half-width">
                                                        {course.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
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


