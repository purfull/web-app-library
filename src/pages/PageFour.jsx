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

const PageFour = () => {
 
 
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
- Additional documents for MBA and MCom Programmes: your comprehensive CV/Resume, a compelling Motivation Letter, a professional passport-size photo
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
</br>
-Undergraduate Degrees: 4 years
</br>
-Diplomas: 2 to 3 years
</br>
-Master’s Degrees: 2 to 2.5 years
</br>
-Postgraduate Diplomas: 1 year
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
  const pgCardData = [
    {
      title: "Master of Business Administration (MBA)",
      image: "/images/courses-images/Square/MBA.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "4,875",
        credits: "250",
        module: "19.50",
      },
    },
    {
      title: "MCom in Human Resource Management",
      image: "/images/courses-images/Square/MCom in Human resource.png",
      description: {
        one: "1. Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2. Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "5,070",
        credits: "260",
        module: "19.50",
      },
    },
    {
      title: "MEd in Curriculum Design and Instruction",
      image: "/images/courses-images/Square/Med in curriculum.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      },
    },
    {
      title: "MEd in Higher Education",
      image: "/images/courses-images/Square/Med in higher education.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      },
    },
    {
      title: "MEd in Leadership and Management",
      image:
        "/images/courses-images/Square/Med in educational leadership and mgmt.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        credits: "248",
        module: "19.50",
        fees: "4,836",
      },
    },
    {
      title: "MSc in Computer Science",
      image: "/images/courses-images/Square/Msc in computer science.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      },
    },
    {
      title: "MSc in Information Systems Management",
      image:
        "/images/courses-images/Square/Msc in Information Systems management.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      },
    },
    {
      title: "Post Graduate Diploma in Higher Education(PGDHE)",
      image: "/images/courses-images/Square/PGDHE.jpg",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        credits: "130",
        module: "19.50",
        fees: "2,535",
      },
    },
  ];

  const ugCardData = [
    {
      title: "BBA in Business Management",
      image: "/images/courses-images/Square/BBA in bus mgmt.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      },
    },
    {
      title: "BCom in Accounting",
      image: "/images/courses-images/Square/Bcom in accounting.png",
      description: {
        one: "1. Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2. Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      },
    },
    {
      title: "BEd in Primary Education",
      image: "/images/courses-images/Square/Bed in Primary.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,760",
        credits: "520",
        module: "13",
      },
    },
    {
      title: "BSc in Data Science",
      image: "/images/courses-images/Square/Bsc in data science.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,435",
        credits: "495",
        module: "13",
      },
    },
    {
      title: "Bachelor of Science in Health Information Management",
      image: "/images/courses-images/Square/BSc in health info.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      },
    },

    {
      title: "BSc in Hospital Administration",
      image: "/images/courses-images/Square/BSc in Hospitality.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      },
    },

    {
      title: "BSc in Network Security and Computer Forensics",
      image: "/images/courses-images/Square/BSc in network security.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      },
    },

    {
      title: "BSc in Safety, Health and Environmental Management",
      image: "/images/courses-images/Square/BSc in Safety.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "6,604",
        credits: "496",
        module: "13",
      },
    },
    {
      title: "Diploma in Occupational Health Safety",
      image: "/images/courses-images/Square/Diploma in Occup.jpg",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
      },
      amountdetails: {
        fees: "3,224",
        credits: "248",
        module: "13",
      },
    },
    // {
    //   title: "BCom in Hospitality Management",
    //   image: "/images/courses-images/Square/Bcom in Hospitality.png",
    //   description: {
    //     one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
    //     two: "2 .Introduction to Financial Markets 1",
    //     three: "3. Introduction to Financial Markets 2",
    //     four: "4. Client Service and Financial Advice 1",
    //     five: "5 . Applied Financial Mathematics (Includes Exemption Exam)",
    //   },
    //   amountdetails: {
    //     fees: "6,695",
    //     credits: "515",
    //     module: "13",
    //   },
    // },
  ];
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      {/* <FeeHome /> */}

      <StaticHome
        backgroundColor="#F3E8EA"
        textColor="#000"
        backgroundImage="/images/FeeHome.png"
        height="110vh"
        title="Affordable. Flexible. <span style='background-color: #841D2E; color: #fff'>Built Around You. </span>"
        description="At Botho University, our online learning fees give you full control-you only pay for the modules you register for, based on their credit load, with no hidden costs. This flexible pay-as-you-go model is supported by a structured instalment plan to make budgeting easier, though all semester fees must be cleared before moving to the next stage. Payments are simple and convenient through our secure online gateway, campus payments, bank transfers, or Orange Money (within Botswana)."
      />

      <EnquireSection
        cardData={pgCardData}
        cardTitle="Postgraduate Programme Fees"
      />
      <EnquireSection
        cardData={ugCardData}
        cardTitle="Undergraduate Programme Fees"
      />

      <FeedBackSection />
      <Faq faqData={faqData} animation={true} />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageFour;
