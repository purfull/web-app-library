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
import {
  bbainbusinessmanagement,
  bcominaccounting,
bcominhospitalitymanagement,
  dipinoccupationalhealthsafety,

  bscinhospitaladministration,


  bscindatascience,
  mcominhumanresourcemanagement,
  masterofbusinessadministration,
  bscinhealthinformationmanagement,
  bscinsafetyhealthandenvironmentalmanagement,
  bedinprimaryeducation,
  postgraduatediplomainhighereducation,
  medleadershipandmanagement,
  medincurriculumdesignandinstruction,
  mscininformationsystemsmanagement,
  mscincomputerscience,
  bscinnetworksecurityandcomputerforensics,
  medinhighereducation,
} from "./PageFiveDats";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PageFive = () => {
  
    const { name } = useParams();
    const [course, setCourse] = useState()
    const courseMap = {
  bbainbusinessmanagement,
  bcominaccounting,
  bcominhospitalitymanagement,

  bscindatascience,
  mcominhumanresourcemanagement,
  masterofbusinessadministration,
  dipinoccupationalhealthsafety,
  bscinhealthinformationmanagement,
  bscinhospitaladministration,
  bscinsafetyhealthandenvironmentalmanagement,
  bedinprimaryeducation,
  postgraduatediplomainhighereducation,
  medleadershipandmanagement,
  medincurriculumdesignandinstruction,
  mscininformationsystemsmanagement,
  mscincomputerscience,
  bscinnetworksecurityandcomputerforensics,
  medinhighereducation,
};
  useEffect(() => {
  const courseData = courseMap[name];
  setCourse(courseData);
  console.log("Resolved course:", course?.heroContent);
}, [name]);
  
  
  const faqData = [
    {
      question:
        "How do I apply to Botho University? What documents are required?",
      answer: `
      <p>
Applying to Botho University is a straightforward and free process, designed to get you started on your educational journey quickly. All applications are conveniently submitted online through our secure portal:</br>
👉 <a href="https://bothouniversity.academiaerp.com/applicant-portal/#/auth/login" target="_blank" rel="noopener noreferrer">Apply Now</a>
</br></br>
If you wish to connect with us first and speak to a counsellor before applying, please feel free to complete this simple enquiry form:</br>
👉 <a href="https://bothouniversity.academiaerp.com/enquire/" target="_blank" rel="noopener noreferrer">Enquire Here</a>
</br></br>
Required Documents</br></br>
To help you prepare for the application, here's what you'll typically need:
</br></br>
For Undergraduate Programmes:</br></br>
- Certified copy of your ID/Passport

- Certified copies of your High School Certificate

- Professional passport-size photo
</br></br>
Mature Entry Applicants:</br></br>
If you're applying through mature entry, please be ready to provide additional documents such as:
</br></br>
- Other qualification certificates with transcripts
</br>
- Letter(s) from your employer(s)
</br></br>
For Postgraduate Programmes:</br></br>
- Certified copies of your degree certificate and official transcript
</br>
- Certified copy of your ID/Passport
</br>
- Additional documents for MBA and MCom Programmes:
</br>
- Comprehensive CV/Resume
</br>
- Compelling Motivation Letter
</br>
- Professional passport-size photo


</p>
    `,
    },

    {
      question: "How long will it take to complete my programme?",
      answer: `
    <p>
     Your academic journey at Botho University is flexible and tailored to your progress! While the exact duration depends on the programme's credit requirements and your chosen pace, our typical full-time course load is at least 60 credits per semester, ensuring a comprehensive and engaging learning experience.
</br></br>
Most programmes, when studied full-time, typically take the following durations:
</br></br>
Undergraduate Degrees: 4 years
</br></br>
Diplomas: 2 to 3 years
</br></br>
Master’s Degrees: 2 to 2.5 years
</br></br>
Postgraduate Diplomas: 1 year
    </p>
  `,
    },
    {
      question: "What are the fees for programmes? And are payments flexible?",
      answer: `
        <p>
We believe in making quality education accessible. There is no application fee! A one-time registration fee of $50 is payable upon enrollment. Your tuition fee is calculated per module based on its credit load. Each credit is charged at an affordable rate of $13 for undergraduate programmes and $19.50 for postgraduate programmes.
</br></br>
If you opt for a full-time load of 60 credits in a semester for an undergraduate programme, your total fee for that semester would be (60 credits x $13 per credit) $780. To further support your financial planning, we offer a highly flexible payment structure, allowing you to pay undergraduate fees in six convenient monthly instalments of $130.
</br></br>
If you opt for a full-time load of 60 credits in a semester for a postgraduate programme, your total fee for that semester would be (60 credits x $19.50 per credit) $1170. Here too, we offer a highly flexible payment structure, allowing you to pay postgraduate fees in six convenient monthly instalments of $195.
</br></br>
You can review our complete Fee Structure at your convenience <a href= "https://online.bothouniversity.com/downloads/fees/" target="_blank" rel="noopener noreferrer">here</a>

</p>
      `,
    },
    {
      question: "When are the intakes for Botho University Online?",
      answer: `<p>We offer multiple opportunities for you to begin your studies! Botho University has four intakes annually: in January, April, July, and October. Please note that admissions with exemptions are accepted during the January and July intakes only.</p>`,
    },
    {
      question:
        "Will I need to attend physical classes or can I learn fully online?",
      answer: `<p>Our online programmes are designed for maximum flexibility and convenience, meaning most programmes do not require any physical class attendance. However, we highly encourage participation in our virtual classes. These interactive sessions provide a fantastic opportunity to connect with your fellow students and engage directly with our expert lecturers, enhancing your learning and fostering a strong sense of community.
</br></br>
To ensure you gain the most from your programme, you should attend virtual classes, complete all online study material, and participate in both assessments and examinations. This comprehensive approach guarantees a robust understanding of your chosen field.</p>`,
    },
    {
      question:
        "Who can I contact for help and guidance during my studies at Botho University?",
      answer: `<p>At Botho University, your success is our priority, and we've put a robust support system in place to ensure you always have someone to turn to. Every student has dedicated access to a group of Programme Mentors. These mentors serve as your first point of contact for virtually any assistance you require throughout your studies.
</br></br>
While you are, of course, welcome to contact your lecturers directly when you have a question specifically related to a particular module, for any other general questions related to the University or your studies, you can always reach out to your Programme Mentors. They are there to assist you by either directly providing guidance on what needs to be done or by connecting you with the appropriate individual or department who can help resolve your issues.
</br></br>
It's very important to us at Botho University that students receive timely assistance. That is precisely why we have a dedicated team of Programme Mentors committed to supporting you as you progress through your academic journey. You're never alone when you study with Botho University!</p>`,
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

  const heroData = {
  "title": "Bachelor of Commerce in Accounting",
  "minPeriod": 4,
  "maxPeriod": 6,
  "programmeCredit": "$13",
  "totalProgrammeCredit": 480,
  "noOfModules": "38 (36 Core and 2 Elective)",
  "totalFee": "$6,240",
  "cta": false,
  "timer": false,
  "overview": false
}
 

  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <TimerHome data={course?.heroContent} />
      <FeeTable tableData={course?.tableContent} />
      {/* <EnquireSection /> */}
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageFive;
