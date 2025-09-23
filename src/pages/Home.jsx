import NavBar from "../components/navBar/Navbar";
import ContentPage from "../components/content/Content";
import RednavBar from "../components/rednavBar/RedNavbar";
import Course from "../components/courses/Courses";
import Faq from "../components/faq/Faq";
import BannerSection from "../components/banner/BannerSection";
import Footer from "../components/footer/Footer";
import InfiniteSection from "../components/infiniteSection/InfiniteCompo";
import HeroSection from "../components/heroSection/HeroSection";
import FeedBackSection from "../components/feedback/FeedBackSection";
import StaticHome from "../components/staticHome/statichome";
import TimerHome from "../components/timerHome/TimerHome";
import CourseStruture from "../components/coursestrutureSection/coursestrutureSection";
import FeeHome from "../components/feehoemsection/feehome";
import EnquireSection from "../components/EnquireSection/EnquireSection";
import Policy from "../components/policy/policy";
import Terms from "../components/terms/terms";

const HomePage = () => {
  const cardData = [
    {
      cover: "/images/courses-images/MBA.png",
      courseName: "Postgraduate Programme",
      title: "Master of Business Administration (MBA)",
      description:
        "Aiming to become a top executive in the global business arena? The Master of Business Administration (MBA) is designed for ambitious professionals seeking to advance their careers. It equips learners with the ability to address complex challenges through critical thinking, entrepreneurship, financial resilience, and innovative problem-solving.",
    },
    {
      cover:
        "/images/courses-images/Msc in Information Systems management.jpeg",
      courseName: "Postgraduate Programme",
      title: "Master of Science in Information Systems Management",
      description:
        "Ready to excel in managing technology and innovation? Our Master of Science in Information Systems Management is a professionally oriented programme designed for aspiring leaders in the digital era. It develops advanced critical thinking and technical expertise in systems analysis and design, project management, data management, cybersecurity, and business intelligence, with a strong focus on global best practices.",
    },
    {
      cover: "/images/courses-images/PGDHE.png",
      courseName: "Postgraduate Programme",
      title: "Post Graduate Diploma in Higher Education",
      description:
        "Ready to advance your teaching career? Our Postgraduate Diploma in Higher Education is a transformative one-year programme that equips you with advanced teaching skills, curriculum design expertise, and effective assessment strategies. You will gain a strong understanding of pedagogy, assessment, moderation, and learner diversity."
    },
    {
      // /images/courses-images/BBA in bus mgmt.jpg
      cover: "/images/courses-images/Bcom in accounting.jpeg",
      courseName: "Undergraduate Programme",
      title: "BCom in Accounting",
      description: "Your future in accounting starts here. The Bachelor of Commerce in Accounting offers a practical, industry-focused pathway to a rewarding career in accounting and finance. You will build expertise in financial reporting, auditing, taxation, and management accounting. What makes this degree distinctive is its strong balance of theory and practice, including a compulsory semester-long internship that provides invaluable real-world experience."
    },

    {
      cover: "/images/courses-images/BSc in network security.jpeg",
      courseName: "Undergraduate Programme",
      title: "BSc in Network Security and Computer Forensics",
      description:
        "Interested in safeguarding digital systems and uncovering cybercrime? Our BSc in Network Security and Computer Forensics is a specialised degree designed to prepare students to protect information assets and investigate cyber incidents. The programme offers practical training in penetration testing, digital forensics, and network defence, combining fundamental computing with advanced security practices.",
    },
    {
      cover: "/images/courses-images/Diploma in Occup.jpeg",
      courseName: "Undergraduate Programme",
      title: "Diploma in Occupational Health and Safety",
      description:
        "Fascinated by creating safer workplaces? The Diploma in Occupational Health and Safety is designed for those passionate about protecting people and organisations. The programme combines occupational health, safety management, risk assessment, and environmental sustainability, equipping learners with practical skills to identify, evaluate, and control workplace hazards while ensuring regulatory compliance.",
    },
  ];
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
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <HeroSection />
      <ContentPage />
      <InfiniteSection />
      <Course
        cardData={cardData}
        moreButton={true}
        secondaryHeading="Explore Our Online Programme"
      />
      <FeedBackSection />
      <Faq faqData={faqData} animation={true} />
      <BannerSection
        bannerImage="/images/graduate.png"
        headingText="Are You Ready To Take The"
        highlightedText="Next Step?"
        trailingText=""
        paragraphText="Join thousands of students building their future with Botho University Online. Flexible. Affordable. Recognised."
        backgroundColor="#841d2e"
        headingColor="white"
        paragraphColor="white"
        highlightBgColor="#ffffff"
        highlightTextColor="#841d2e"
        buttonBgColor="#ffffff"
        buttonTextColor="#000000"
        arrows="/icon/arrow_forward.png"
      />
      <Footer />
      {/* <StaticHome />
      <TimerHome />
      <CourseStruture /> */}
    </div>
  );
};

export default HomePage;
