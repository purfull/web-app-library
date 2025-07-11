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
      answer: `
        <p>
          We believe in making quality education accessible. There is no
          application fee! A one-time registration fee of $50 is payable upon
          enrollment. Your tuition fee is calculated per module based on its
          credit load. Each credit is charged at an affordable rate of $13 for
          undergraduate programmes and $19.50 for postgraduate programmes.
        </p></br>
        <p>If you opt for a full-time load of 60 credits in a semester for an undergraduate programme, your total fee for that semester would be (60 credits x $13 per credit) $780. To further support your financial planning, we offer a highly flexible payment structure, allowing you to pay undergraduate fees in six convenient monthly instalments of $130.</p></br>
        <p>If you opt for a full-time load of 60 credits in a semester for a postgraduate programme, your total fee for that semester would be (60 credits x $19.50 per credit) $1170. Here too we offer a highly flexible payment structure, allowing you to pay postgraduate fees in six convenient monthly instalments of $195.</p></br>
        <p>You can review our complete Fee Structure at your convenience here: <a href= "https://online.bothouniversity.com/downloads/fees/" target="_blank" rel="noopener noreferrer">https://online.bothouniversity.com/downloads/fees/</a>.</p>
      `,
    },
    {
      question: "When are the intakes for Botho University Online?",
      answer: `<p>We offer multiple opportunities for you to begin your studies! Botho University has four intakes annually: in January, April, July, and October. Please note that admissions with exemptions are accepted during the January and July intakes only.</p>`,
    },
    {
      question:
        "Will I need to attend physical classes or can I learn fully online?",
      answer: `<p>Our online programmes are designed for maximum flexibility and convenience, meaning most programmes do not require any physical class attendance. However, we highly encourage participation in our virtual classes. These interactive sessions provide a fantastic opportunity to connect with your fellow students and engage directly with our expert lecturers, enhancing your learning and fostering a strong sense of community. To ensure you gain the most from your programme, you should attend virtual classes, complete all online study material, and participate in both assessments and examinations. This comprehensive approach guarantees a robust understanding of your chosen field.</p>`,
    },
    {
      question:
        "Who can I contact for help and guidance during my studies at Botho University?",
      answer: `<p>At Botho University, your success is our priority, and we've put a robust support system in place to ensure you always have someone to turn to. Every student has dedicated access to a group of Programme Mentors. These mentors serve as your first point of contact for virtually any assistance you require throughout your studies.</p></br>
      <p>While you are, of course, welcome to contact your lecturers directly when you have a question specifically related to a particular module, for any other general questions related to the University or your studies, you can always reach out to your Programme Mentors. They are there to assist you by either directly providing guidance on what needs to be done or by connecting you with the appropriate individual or department who can help resolve your issues.</p></br>
      <p>It's very important to us at Botho University that students receive timely assistance. That is precisely why we have a dedicated team of Programme Mentors committed to supporting you as you progress through your academic journey. You're never alone when you study with Botho University!</p>`,
    },
  ];
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <StaticHome />
      <Course
        cardData={cardData}
        moreButton={false}
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
