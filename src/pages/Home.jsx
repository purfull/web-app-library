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

const HomePage = () => {
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
      title: "Bachelor of Commerce in Statistics",
      description:
        "The Bachelor of Commerce in Accountancy is a professionally oriented and highly relevant online programme that will provide you wi....",
    },
  ];
  const faqData = [
    {
      question:
        "How do I apply to Botho University? What documents are required?",
      answer: `
      <p>
        Applying to <strong>Botho University</strong> is a straightforward and free process, designed to get you started on your educational journey quickly.
        All applications are conveniently submitted online through our secure portal:
        <a href="https://bothouniversity.academiaerp.com/applicant-portal/#/auth/login" target="_blank" rel="noopener noreferrer">
          https://bothouniversity.academiaerp.com/applicant-portal/#/auth/login
        </a>.
        If you wish to connect with us first and speak to a counsellor before applying, please feel free to complete this simple enquiry form:
        <a href="https://bothouniversity.academiaerp.com/enquire/" target="_blank" rel="noopener noreferrer">
          https://bothouniversity.academiaerp.com/enquire/
        </a>.
      </p>

      <p>To help you prepare for the application, here's what you'll typically need:</p>

      <ul>
        <li>
          <strong>For Undergraduate Programmes:</strong>
          <ul style="list-style-type: circle; margin-left: 20px;">
            <li>Certified copy of your ID/Passport.</li>
            <li>Certified copies of your High School Certificate.</li>
            <li>Professional passport-size photo.</li>
            <li>
              <em>Mature Entry Applicants:</em> If you're applying through mature entry, please be ready to provide additional documents such as other qualification certificates with transcripts and letter(s) from your employer(s).
            </li>
          </ul>
        </li>

        <li>
          <strong>For Postgraduate Programmes:</strong>
          <ul style="list-style-type: circle; margin-left: 20px;">
            <li>Certified copies of your degree certificate and official transcript.</li>
            <li>A certified copy of your ID/Passport.</li>
            <li>
              <em>Additional documents for MBA and MCom Programmes:</em> your comprehensive CV/Resume, a compelling Motivation Letter, a professional passport-size photo.
            </li>
          </ul>
        </li>
      </ul>
    `,
    },

    {
      question: "How long will it take to complete my programme?",
      answer: `
    <p>
      Your academic journey at <strong>Botho University</strong> is flexible and tailored to your progress!
      While the exact duration depends on the programme's credit requirements and your chosen pace, our typical full-time course load is at least 60 credits per semester,
      ensuring a comprehensive and engaging learning experience. Most programmes when studied full-time typically take the period shown below:
    </p>
    <ul style="margin-left: '20px !important'">
      <li>Undergraduate degrees: 4 years.</li>
      <li>Diplomas: 2 to 3 years.</li>
      <li>Master’s degrees: 2 to 2.5 years.</li>
      <li>Postgraduate Diplomas: 1 year.</li>
    </ul>
  `,
    },
    {
      question: "What are the fees for programmes? And are payments flexible?",
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
      <HeroSection />
      <ContentPage />
      <InfiniteSection />
      <Course
        cardData={cardData}
        moreButton={true}
        secondaryHeading="Explore Our Online Programme"
      />
      <FeedBackSection />
      <Faq faqData={faqData} />
      <BannerSection
        bannerImage="/images/graduate.png"
        headingText="Are You Ready To Take The"
        highlightedText="Next Step?"
        trailingText=""
        paragraphText="Join thousands of students building their future with Botho University Online. Flexible. Affordable. Recognized."
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
