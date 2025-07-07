import NavBar from "../components/navBar/Navbar";
import RednavBar from "../components/rednavBar/RedNavbar";

import StaticHome from "../components/staticHome/statichome";
import TimerHome from "../components/timerHome/TimerHome";
import Course from "../components/courses/Courses";
import Faq from "../components/faq/Faq";
import BannerSection from "../components/banner/BannerSection";
import Footer from "../components/footer/Footer";
// import InfiniteSection from "../components/infiniteSection/InfiniteCompo";
import FeedBackSection from "../components/feedback/FeedBackSection";

const PageTwo = () => {
  const cardData = [
    {
      cover: "/images/Rectangle 1.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 2.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 3.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 4.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 5.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
    {
      cover: "/images/Rectangle 6.png",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Commerce in Accountancy",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
  ];
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
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <StaticHome />
      <Course
        cardData={cardData}
        secondaryHeading="Postgraduate Programmes"
        secondaryParagraph="Take your expertise to the next level with advanced qualifications designed for leadership and impact."
        courseName="Postgraduate Programmes"
      />
      <Course
        cardData={cardData}
        secondaryHeading="Undergraduate Programmes"
        secondaryParagraph="Start strong with a flexible, accredited degree that builds your foundation for a successful career."
      />
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection
        bannerImage="/images/happy-student-girl.png"
        headingText="Begin Your"
        highlightedText="Online Degree"
        trailingText="With Confidence"
        paragraphText="Join thousands of students building their future with Botho University Online. Flexible. Affordable. Recognized."
        backgroundColor="#F3E8EA"
        headingColor="#000000"
        paragraphColor="#000000"
        highlightBgColor="#841d2e"
        highlightTextColor="#ffffff"
        buttonBgColor="#841d2e"
        buttonTextColor="#ffffff"
        arrows="/icon/maroon-arrow.png"
      />
      <Footer />
    </div>
  );
};

export default PageTwo;
