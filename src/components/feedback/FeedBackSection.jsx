import React, { useEffect, useState } from "react";
import "./feedBackSection.css";
import Item from "antd/es/list/Item";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Carousel } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const studentdeatils = [
  {
    studentsdata:
      "My journey at Botho University has been truly transformative. From the moment I enrolled, I was welcomed into a dynamic and supportive environment that encouraged both academic and personal growth. The university’s commitment to quality education is evident in its well-structured programmes, dedicated faculty, and abundant learning resources. I particularly valued the practical exposure through internships, which bridged the gap between theory and real-world application. The programme nurtured vital skills such as leadership, critical thinking, and problem-solving. I felt a strong sense of belonging and support throughout, and I highly recommend Botho University to anyone seeking a meaningful educational experience.",
    imgs: ["/icon/Icon.png"],
    studentname: "Goitseone Themba",
    year: "2023",
  },
  {
    studentsdata:
      "I am proud to be a graduate of the Postgraduate Diploma in Higher Education at Botho University, Class of 2024, and am now pursuing my MBA with the same institution. My journey has been exceptional, characterised by quality education, flexible online learning, and strong support from faculty and staff. The online platform is well organised, with accessible materials that made studying both manageable and engaging. The Postgraduate Diploma gave me critical knowledge and practical skills that enhanced my professional growth and prepared me for the MBA. I’m grateful for this enriching experience and highly recommend Botho University to anyone seeking quality education, whether online or on campus.",
    imgs: ["/icon/Icon.png"],
    studentname: "Atang Gaone Seitiso - Botswana",
    year: "2083",
  },
  {
    studentsdata:
      "As a final year student pursuing a degree in Network Security and Computer Forensics at Botho University, I’ve genuinely enjoyed every step of my academic journey. The university goes beyond traditional learning by nurturing leadership, critical thinking, and an entrepreneurial spirit. I’ve grown not only as a tech professional but as a future employer and innovator. Botho prepares you to lead, to build, and to thrive in the modern world. I’m proud to be shaped by a university that develops game-changers, not just job seekers.",
    imgs: ["/icon/Icon.png"],
    studentname: "Benjamen Elungu - Namibia",
    year: "2083",
  },
  {
    studentsdata:
      "I am a proud Master’s student in Curriculum Design and Instruction at Botho University. My experience has been truly transformative, with strong academic growth and continuous support. As a self-sponsored student, I’ve especially appreciated the flexible, manageable payment options that allowed me to focus on learning. I’m incredibly grateful for the opportunity to present at a research conference in Germany - an achievement made possible by the university’s commitment to excellence. Despite limited IT skills at the start, the patient guidance from lecturers and support staff helped me thrive. Botho University has empowered me, and I highly recommend it to others.",
    imgs: ["/icon/Icon.png"],
    studentname: "Mosadithebe Bonno Tsimako",
    year: "2083",
  },
  {
    studentsdata:
      "Studying online with Botho University has been a rewarding journey so far. The flexible learning model makes it easier to manage my studies alongside other commitments, and the academic support has been excellent. I’m gaining advanced skills in Information System Management that I know will strengthen my career in tech and digital forensics.",
    imgs: ["/icon/Icon.png"],
    studentname: "Tabaka Mochipela",
    year: "2083",
  },
  {
    studentsdata:
      "I am currently studying for a Diploma in Occupational Health and Safety at Botho University, and my experience so far has been excellent. The academic and administrative staff are incredibly supportive, and the lecturers deliver content with clarity, expertise, and real commitment. Learning has been both engaging and rewarding. I also appreciate the student retention team, who consistently provide timely updates on schedules and fees, and respond to queries with professionalism. Their support has made my journey smooth and well-guided. Botho University has created a truly student-centred environment, and I’m grateful to be part of it.",
    imgs: ["/icon/Icon.png"],
    studentname: "Mosimanegape Joel Morwe",
    year: "2083",
  },
  {
    studentsdata:
      "Taking this online course at Botho University has truly been a game-changer for me. The flexible learning model allows me to study at my own pace, revisit challenging concepts, and stay connected with my mentor, instructors, and classmates. This supportive environment has led to significant academic improvement and boosted my confidence. The online platform is user-friendly and empowering - it enhances the learning experience and enables me to apply new skills immediately in my professional life. Seeing real-world impact after each module is incredibly motivating. Botho University has built a practical, inspiring space for online learners, and I am proud to be part of it.",
    imgs: ["/icon/Icon.png"],
    studentname: "Victor Chenamani",
    year: "2083",
  },
  {
    studentsdata:
      "I am currently pursuing a Bachelor of Science in Data Science at Botho University. Studying here has been a transformative experience, both academically and personally. The supportive learning environment, qualified lecturers, and industry-relevant content have helped me grow in confidence and knowledge. The flexible online tools allow me to balance my studies with other responsibilities while gaining practical, career-ready skills. I’ve developed critical abilities in data analysis, problem-solving, and collaboration through group projects and discussions. I’m proud to be part of an institution that is truly committed to academic excellence and preparing students for meaningful, impactful careers in today’s data-driven world.",
    imgs: ["/icon/Icon.png"],
    studentname: "Bokani Montshiwa",
    year: "2083",
  },
  {
    studentsdata:
      "I am a proud graduate of the Postgraduate Diploma in Higher Education, Class of 2024, at Botho University. Studying online while pursuing my PhD in Kenya was incredibly rewarding. The flexible learning model allowed me to manage both commitments effectively. The programme was well-structured, with accessible, relevant digital resources that met my academic and professional needs. A standout aspect was the unwavering support from my Programme Mentor, whose guidance kept me motivated throughout. This qualification has deepened my understanding of pedagogy and strengthened my confidence as an educator. I’m truly grateful for the experience and highly recommend Botho University.",
    imgs: ["/icon/Icon.png"],
    studentname: "Josephine Tshepho - Segotsi",
    year: "2083",
  },
  {
    studentsdata:
      "Enrolling in the online MBA programme at Botho University has been one of the most empowering decisions I’ve made. The flexibility allowed me to balance full-time work and study, making the experience both manageable and fulfilling. Each module delivered practical business skills - strategic planning, financial analysis, leadership, and decision-making - ready for real-world application. The mentorship support was a standout, offering insights and career guidance from an experienced industry expert. This not only boosted my confidence but also helped bridge theory and practice. The programme enhanced my skills, expanded my network, and opened new career doors. I highly recommend it to working professionals.",
    imgs: ["/icon/Icon.png"],
    studentname: "Lephepelo Pitikoe  - Lesotho",
    year: "2083",
  },
  {
    studentsdata:
      "Pursuing my MBA online with Botho University has been a truly rewarding journey. As a full-time professional, I needed a programme that accommodated my busy schedule and Botho delivered. The flexibility of the online model, combined with the dedication of the lecturers, allowed me to balance work and study effectively. Lecturers used platforms like WhatsApp and email to keep us engaged and informed. This consistent support created a motivating learning environment that kept me focused. I’ve grown both academically and professionally, gaining skills in strategic thinking and communication that are already impacting my career. I’m proud to be part of Botho.",
    imgs: ["/icon/Icon.png"],
    studentname: "Edward Magawe (MBA)",
    year: "2083",
  },
  {
    studentsdata:
      "I am from Namibia, and I’m proud to have studied online with Botho University. The support from the academic team and tutors was outstanding. The staff genuinely cared about my well-being, and their approachability made a real difference. Living and working in a remote area with network challenges, I appreciated their proactive use of WhatsApp to keep me informed. The course materials were well-structured and easy to follow, and the Programme Mentoring approach offered consistent guidance. What truly stood out was the people - dedicated, warm, and collaborative. I’m deeply grateful for the support throughout my journey.",
    imgs: ["/icon/Icon.png"],
    studentname: "Sapetama Raulinda Kaharu",
    year: "2083",
  },
  {
    studentsdata:
      "Enrolling in the MSc in Information Systems Management through Botho University’s online platform has been a transformative experience. The flexible payments, convenient schedules, user-friendly portal, rich e-library, and engaging mentorship model allowed me to study without compromising work or family commitments. I’ve developed strong academic writing skills and gained valuable knowledge in governance, security, and knowledge management. The mentorship was especially impactful - interactive, encouraging, and supportive. Balancing work, study, and life has been manageable, and I’m on track to graduate by December 2025. I highly recommend this flexible learning model to busy professionals. It’s truly worth it.",
    imgs: ["/icon/Icon.png"],
    studentname: "Tetano Bashingi",
    year: "2083",
  },
  {
    studentsdata:
      "Choosing to study online with Botho University was life-changing. As a full-time professional and parent, flexibility was essential and Botho University met my needs. The platform allowed me to balance studies with work and family without compromising quality. The support system was outstanding; academic mentors, facilitators, and staff were always responsive and caring. I gained both subject expertise and vital skills in critical thinking, time management, and communication. Even before completing my degree, I was promoted at work, a testament to my growth and confidence. I highly recommend Botho University for its flexible, empowering, and career-boosting online learning experience.",
    imgs: ["/icon/Icon.png"],
    studentname: "Albertina Hamukwaya",
    year: "2083",
  },
];

const FeedBackSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updatesildes = () => {
      const width = window.innerWidth;
      // setSlidesToShow(width < 600 ? 1 : width > 768 && width > 1200 ? 1.5 : 2);
      setSlidesToShow(
        width < 600
          ? 1        // Mobile
          : width < 1200
            ? 1.5      // Tablet
            : 2        // Laptop/Desktop
      );
    };

    updatesildes();

    window.addEventListener("resize", updatesildes);

    return () => window.removeEventListener("resize", updatesildes);
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className="prev-button"
        onClick={onClick}
        style={{ ...style, zIndex: 1 }}
      >
        <IoIosArrowBack size={24} color="white" />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className="next-button"
        onClick={onClick}
        style={{ ...style, zIndex: 1 }}
      >
        <IoIosArrowForward size={24} color="white" />
      </button>
    );
  };

  return (
    <div className="feedback-main page-gap">
      <div className="feeback-headers">
        <div className="primary-heading-and-button">
          <p className="secondary-heading with-padding">
            What Our Students Say
          </p>
          <div className="next-and-pre-buttons">
            <img src="/images/button-previous.png" alt="" onClick={() => sliderRef.current?.slickPrev()} // ADD FUNCTIONALITY
              style={{ cursor: "pointer" }} />
            <img src="/images/button-next.png" alt="" />


          </div>
        </div>
        <div className="second-main">
          <p className="secondary-paragraph black padding-zero">
            Our expert teachers make learning simple, flexible, and practical.
            Students love the support they get and how easy it is to study from
            anywhere.
          </p>
        </div>
        {/* <div className="arrow-button-feedback-mobile"> */}
        {/* <button className="next-button-mobile">
            <IoIosArrowBack />{" "}
          </button>
          <button className="next-button-mobile">
            <IoIosArrowForward />
          </button> */}
        {/* <img src="/icon/Button-Next" alt="" /> */}
        {/* </div> */}
        <div className="next-and-pre-buttons-mobile">
          <img src="/images/button-previous.png" alt="" onClick={() => sliderRef.current?.slickPrev()} // ADD FUNCTIONALITY
            style={{ cursor: "pointer" }} />
          <img src="/images/button-next.png" alt="" />


        </div>

      </div>

      <div className="feedback-cards">
        <Slider
          className="carosel-inner"
          slidesToShow={slidesToShow}
          arrows={true}
        // prevArrow={<CustomPrevArrow className="prev-button" />}
        // nextArrow={<CustomNextArrow className="next-button" />}
        >
          {studentdeatils.map((item, index) => (
            <div key={index} className="card-1">
              <div className="student-card">
                <div className="student-images">
                  {item.imgs.map((img, imgIndex) => (
                    <img
                      className="icon-img"
                      key={imgIndex}
                      src={img}
                      alt={`img-${imgIndex}`}
                    />
                  ))}
                </div>
                <p className="secondary-paragraph black feedback-inside-gap">{item.studentsdata}</p>
                <div className="feedback-divider"> </div>

                <p className="secondary-paragraph prime-color feedback-name-gap" style={{ fontStyle: "italic", color: "#841D2E" }}>

                  {item.studentname}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBackSection;
