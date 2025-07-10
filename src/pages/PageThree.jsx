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
import CourseStruture from "../components/coursestrutureSection/coursestrutureSection";

const PageThree = () => {
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
    const requirements = [
       {
        question: "Admission Requirements",
        answer:
          "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
      },
  
      {
        question: "Technical Requirements",
        answer:
          `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p>

  <h3>Device Requirements</h3>
  <ul>
    <li>
      <strong>Computer/Laptop:</strong> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations
    </li>
    <li><strong>OR</strong></li>
    <li>
      <strong>Tablet/Smartphone:</strong> Suitable for accessing content on the go (limited functionality for assignments/exams)
    </li>
  </ul>

  <h3>Internet Requirements</h3>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing)
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions
    </li>
  </ul>

  <h3>Software and Platforms</h3>
  <ul>
    <li>
      <strong>Virtual Live Sessions:</strong> Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs)
    </li>
  </ul>

  <h3>Browser Requirements</h3>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality
    </li>
  </ul>

  <h3>Additional Tools (Optional but Recommended)</h3>
  <ul>
    <li>Headset: For clear audio during virtual classes</li>
    <li>External storage (USB/Cloud): For backups of important coursework</li>
    <li>Antivirus software: To protect against malware or data loss</li>
  </ul>
</div>
`,
      },
    ]
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      {/* <StaticHome /> */}
      <TimerHome />
      {/* <Course /> */}
      <Faq faqData={requirements} title="Requirements" />
      <CourseStruture />
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageThree;
