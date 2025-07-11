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
import FeeHome from "../components/feehoemsection/feehome";
import EnquireSection from "../components/EnquireSection/EnquireSection";
import FeeTable from "../components/feeTable/feeTable";

const PageFive = () => {
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
  const tableData = [
    {
      title: "Semester 1",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "C5-IMO-20",
          name: "Introduction to MS Office",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "D5-AWB-20",
          name: "Academic Writing for Business",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B5-BS1-17",
          name: "Business Mathematics and Statistics",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B5-LAB-13",
          name: "Legal Aspects of Business",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A5-FBF-20",
          name: "Fundamental Of Business and Finance",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B5-BM1-20",
          name: "Business Management 1",
          credit: 10,
          fee: "$130.00",
        },
      ],
    },
    {
      title: "Semester 2",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "B5-PMK-17",
          name: "Principles of Marketing",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B6-BS2-17",
          name: "Business Mathematics and Statistics 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A5-IFA-20",
          name: "Introduction to Financial Accounting",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B6-BEA-20",
          name: "Business Ethics and Assurance",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B5-BM2-20",
          name: "Business Management 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-CP1-20",
          name: "Computerized Accounting 1",
          credit: 10,
          fee: "$130.00",
        },
      ],
    },
    {
      title: "Semester 3",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "A6-TA1-20",
          name: "Taxation 1",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B5-MIE-17",
          name: "Microeconomics",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-COA-20",
          name: "Cost Accounting",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-CP2-20",
          name: "Computerized Accounting 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-CA1-20",
          name: "Corporate Administration 1",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-FA1-17",
          name: "Financial Accounting 1",
          credit: 10,
          fee: "$130.00",
        },
      ],
    },
    {
      title: "Semester 4",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "B6-MAE-17",
          name: "Macroeconomics",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-ASS-20",
          name: "Audit and Assurance",
          credit: 20,
          fee: "$260.00",
        },
        {
          type: "Core",
          code: "A6-FM1-20",
          name: "Financial Management 1",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A6-CSC-20",
          name: "Corporate Secretaryship",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A7-FA2-20",
          name: "Financial Accounting 2",
          credit: 10,
          fee: "$130.00",
        },
      ],
    },
    {
      title: "Semester 5",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "A7-TA2-20",
          name: "Taxation 2",
          credit: 20,
          fee: "$260.00",
        },
        {
          type: "Core",
          code: "A7-MAC-20",
          name: "Management Accounting",
          credit: 20,
          fee: "$260.00",
        },
        {
          type: "Core",
          code: "A7-FIR-20",
          name: "Financial Reporting",
          credit: 20,
          fee: "$260.00",
        },
      ],
    },
    {
      title: "Semester 6",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "A7-FM2-20",
          name: "Financial Management 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B7-RMB-20",
          name: "Research Methods in Business",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A7-COL-20",
          name: "Company Law",
          credit: 20,
          fee: "$260.00",
        },
        {
          type: "Core",
          code: "A7-BAV-20",
          name: "Business Analysis and Valuation Using Financial Statements",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A7-CUA-20",
          name: "Computerized Auditing",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Elective (Choose one)",
          code: "A7-TA3-20",
          name: "Taxation 3",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Elective (Choose one)",
          code: "A7-CS2-20",
          name: "Corporate Secretaryship 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Elective (Choose one)",
          code: "A7-AS2-20",
          name: "Audit and Assurance 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Elective (Choose one)",
          code: "A7-RMI-20",
          name: "Risk Management and Insurance",
          credit: 10,
          fee: "$130.00",
        },
      ],
    },
    {
      title: "Semester 7",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "A7-PSR-20",
          name: "Public Sector Financial Reporting",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B7-RP1-20",
          name: "Research Project 1: Proposal Writing",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "B7-CGV-20",
          name: "Corporate Governance",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Core",
          code: "A7-CA2-20",
          name: "Corporate Administration 2",
          credit: 10,
          fee: "$130.00",
        },
        {
          type: "Elective (Choose one)",
          code: "B8-ENI-20",
          name: "Entrepreneurship and Innovation",
          credit: 20,
          fee: "$260.00",
        },
        {
          type: "Elective (Choose one)",
          code: "B8-SOE-21",
          name: "Social Entrepreneurship",
          credit: 20,
          fee: "$260.00",
        },
        {
          type: "Elective (Choose one)",
          code: "E8-ISD-17",
          name: "Innovation for Sustainable Development",
          credit: 20,
          fee: "$260.00",
        },
      ],
    },
    {
      title: "Semester 8",
      totalCredit: 60,
      totalFee: "$780.00",
      modules: [
        {
          type: "Core",
          code: "A7-PRA-20",
          name: "Professional Practice In Accounting",
          credit: 40,
          fee: "$520.00",
        },
        {
          type: "Core",
          code: "B7-RP2-20",
          name: "Research Project 2: Dissertation",
          credit: 20,
          fee: "$260.00",
        },
      ],
    },
  ];

  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <FeeHome />
      <FeeTable tableData={tableData} />
      {/* <EnquireSection /> */}
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection />
      {/* <Footer /> */}
    </div>
  );
};

export default PageFive;
