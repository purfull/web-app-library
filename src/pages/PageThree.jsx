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
import {
  bbainbusinessmanagement,
  bscindatascience,
  // bcominhospitalitymanagement,
  mcominhumanresourcemanagement,
  masterofbusinessadministration,
  diplomainoccupationalhealthsafety,
  bscinhealthinformationmanagement,
  bscinhospitaladministration,
  bscinsafetyhealthandenvironmentalmanagement,
  bedinprimaryeducation,
  postgraduatediplomainhighereducation,
  // medalleadershipandmanagement,
  medinleadershipandmanagement,
  medincurriculumdesignandinstruction,
  masterofscienceininformationsystemsmanagement,
  mscincomputerscience,
  bscinnetworksecurityandcomputerforensics,
  medinhighereducation,
  bcominaccounting,
} from "./PageThreeData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PageThree = () => {
  const { name } = useParams();
  const [course, setCourse] = useState();

  const courseMap = {
    bbainbusinessmanagement,
    bscindatascience,
    // bcominhospitalitymanagement,
    mcominhumanresourcemanagement,
    masterofbusinessadministration,
    diplomainoccupationalhealthsafety,
    bscinhealthinformationmanagement,
    bscinhospitaladministration,
    bscinsafetyhealthandenvironmentalmanagement,
    bedinprimaryeducation,
    postgraduatediplomainhighereducation,
    // medalleadershipandmanagement,
    medinleadershipandmanagement,
    medincurriculumdesignandinstruction,
    masterofscienceininformationsystemsmanagement,
    mscincomputerscience,
    bscinnetworksecurityandcomputerforensics,
    medinhighereducation,
    bcominaccounting,
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
👉 <a href="https://bothouniversity.academiaerp.com/onlineEnquire/" target="_blank" rel="noopener noreferrer">Enquire Here</a>
</br></br>
To help you prepare for the application, here's what you'll typically need:
</br></br>
<strong>For Undergraduate Programmes:</strong></br></br>
- Certified copy of your ID/Passport

- Certified copies of your High School Certificate

- Professional passport-size photo

- Mature Entry Applicants: Other qualification certificates with transcripts and letter(s) from your employer(s)
</br></br>
<strong>For Postgraduate Programmes:</strong></br></br>
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

</p>
      `,
      // 
// You can review our complete Fee Structure at your convenience <a href= "/all-fee" target="_blank" rel="noopener noreferrer">here</a>
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
  const requirements = [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
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
  ];

  //   const heroData = {
  //   "title": "Bachelor of Science in Data Science",
  //   "minPeriod": 4,
  //   "maxPeriod": 6,
  //   "programmeCredit": "$13",
  //   "totalProgrammeCredit": 495,
  //   "noOfModules": "35 (27 Core + 8 Elective)",
  //   "totalFee": "$6,435",
  //   "cta": true,
  //   "timer": true,
  //   "overview": true

  // }
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      {/* <StaticHome /> */}
      <TimerHome
        data={course?.heroContent}
        programOverview={course?.programOverview}
      />
      {/* <Course /> */}
      <Faq
        faqData={course?.requirements}
        title="Requirements"
        animation={false}
      />
      <CourseStruture courseStruture={course?.courseStruture} />
      <FeedBackSection />
      <Faq faqData={faqData} animation={true} />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageThree;
