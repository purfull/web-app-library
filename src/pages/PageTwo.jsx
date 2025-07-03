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
      <Course />
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageTwo;
