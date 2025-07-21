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
 
  const ugCardData = [
    {

      title: "B.Com in Accounting",
      image: "/images/courses-images/Square/Bcom in accounting.png",
      description: {
        one: "1. Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2. Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      }
    },
    {

      title: "BBA in Business Management",
      image: "/images/courses-images/Square/BBA in bus mgmt.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"
      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      }
    },
    {

      title: "B.Com in Hospitality Management",
      image: "/images/courses-images/Square/Bcom in Hospitality.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"
      },
      amountdetails: {
        fees: "6,695",
        credits: "515",
        module: "13",
      }
    },
    {

      title: "Dip in Occupational Health Safety",
      image: "/images/courses-images/Square/Diploma in Occup.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "3,224",
        credits: "248",
        module: "13",
      }

    },


    {

      title: "Bsc in Hospital Administration",
      image: "/images/courses-images/Square/BSc in Hospitality.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      }
    },
    {

      title: "Bsc in Data Science",
      image: "/images/courses-images/Square/Bsc in data science.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,435",
        credits: "495",
        module: "13",
      }
    },
    {

      title: "Bsc in Safety, Health and Environmental Management",
      image: "/images/courses-images/Square/BSc in Safety.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,604",
        credits: "508",
        module: "13",
      }
    },
   

    {

      title: "Bsc in Health Information Management",
      image: "/images/courses-images/Square/BSc in health info.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      }
    },

    {

      title: "BSc in Network Security and Computer Forensics",
      image: "/images/courses-images/Square/BSc in network security.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      }
    },
     {

      title: "BED in Primary Education (English Language and Mathematics)",
      image: "/images/courses-images/Square/Bed in Primary.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "6,240",
        credits: "480",
        module: "13",
      }
    },
  ];

  
  const pgCardData = [
    {

      title: "Msc in Computer Science",
      image: "/images/courses-images/Square/Msc in computer science.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      }
    },
    {

      title: "MED - Leadership and Management",
      image: "/images/courses-images/Square/Med in educational leadership and mgmt.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      }

    },
    {

      title: "MED in Higher Education",
      image: "/images/courses-images/Square/Med in higher education.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      }
    },
    {

      title: "M.Com in Human Resource Management",
      image: "/images/courses-images/Square/MCom in Human resource.png",
      description: {
        one: "1. Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2. Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        fees: "4,680",
        credits: "240",
        module: "19.50",
      }
    },
    {

      title: "Master of Business Administration (MBA)",
      image: "/images/courses-images/Square/MBA.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"
      },
      amountdetails: {
        fees: "4,680",
        credits: "240",
        module: "19.50",
      }
    },
    {

      title: "Post Graduate Diploma in Higher Education",
      image: "/images/courses-images/Square/PGDHE.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"
      },
      amountdetails: {
        credits: "120",
        module: "19.50",
        fees: "2,340",
      }
    },


    {

      title: "MED in Curriculum Design and Instruction",
      image: "/images/courses-images/Square/Med in curriculum.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      }
    },
    {

      title: "Msc in Information Systems Management",
      image: "/images/courses-images/Square/Msc in Information Systems management.png",
      description: {
        one: "1 . Applied Financial Mathematics (Includes Exemption Exam)",
        two: "2 .Introduction to Financial Markets 1",
        three: "3. Introduction to Financial Markets 2",
        four: "4. Client Service and Financial Advice 1",
        five: "5 . Applied Financial Mathematics (Includes Exemption Exam)"


      },
      amountdetails: {
        credits: "240",
        module: "19.50",
        fees: "4,680",
      }
    },
    
  ];
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <FeeHome />
      <EnquireSection cardData={ugCardData} cardTitle="Undergraduate Programme Fees" />
      <EnquireSection cardData={pgCardData} cardTitle="Postgraduate Programme Fees" />
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageFour;
