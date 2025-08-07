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
  const cardDataPg = [
    {
      cover: "/images/courses-images/MBA.jpeg",
      courseName: "Postgraduate Programme",
      title: "Master of Business Administration (MBA)",
      description:
        "Aiming to become a top executive in the global business arena? Our MBA programme is designed for ambitious professionals. It equips you with the skills to tackle complex challenges, focusing on critical thinking, entrepreneurship, financial resilience, and innovative problem-solving.",
    },
    {
      cover: "/images/courses-images/MCom in Human resource.jpeg",
      courseName: "Postgraduate Programme",
      title: "M.Com in Human Resource Management",
      description:
        "Looking to become a leader in talent management? Our Master of Commerce in Human Resource Management (MCom in HRM) is a transformative qualification designed for the modern business landscape. You'll gain a robust foundation in strategic HR planning, recruitment, performance assessment, and more.",
    },
    {
      cover: "/images/courses-images/PGDHE.jpeg",
      courseName: "Postgraduate Programme",
      title: "Post Graduate Diploma in Higher Education",
      description:
        "Ready to advance your teaching career? Our Postgraduate Diploma in Higher Education (PGDHE) is a transformative one-year programme designed to equip you with advanced teaching skills, curriculum design expertise, and effective assessment strategies.",
    },
    {
      cover:
        "/images/courses-images/Med in educational leadership and mgmt.jpeg",
      courseName: "Postgraduate Programme",
      title: "MED - Leadership and Management",
      description:
        "Aspiring to lead in education? Our Master of Educational Leadership and Management is a prestigious, two-year programme designed to elevate your career.",
    },
    {
      cover: "/images/courses-images/Med in curriculum.jpeg",
      courseName: "Postgraduate Programme",
      title: "MED in Curriculum Design and Instruction",
      description:
        "Ready to lead in education and curriculum development? Our Master of Education in Curriculum Design and Instruction is your pathway to becoming an expert.",
    },
    {
      cover:
        "/images/courses-images/Msc in Information Systems management.jpeg",
      courseName: "Postgraduate Programme",
      title: "Msc in Information Systems Management",
      description:
        "Ready to excel in information systems management? Our Master of Science in Information Systems Management is a professionally oriented online programme, perfect if you need flexible learning.",
    },
    {
      cover: "/images/courses-images/Med in higher education.jpeg",
      courseName: "Postgraduate Programme",
      title: "MED in Higher Education",
      description:
        "Elevate your expertise with our Master of Education in Higher Education. This specialised two-year online programme equips you with advanced pedagogical skills, covering Learning, Teaching and Assessment, Curriculum Design and Development, and Academic Writing.",
    },
    {
      cover: "/images/courses-images/Msc in computer science.jpeg",
      courseName: "Postgraduate Programme",
      title: "Msc in Computer Science",
      description:
        "Aspiring to excel in the tech industry? Our Master of Science in Computer Science is an advanced, flexible online programme.",
    },
  ];
  const cardDataUg = [
    {
      cover: "/images/courses-images/Bcom in accounting.jpeg",
      courseName: "Undergraduate Programme",
      title: "B.Com in Accounting",
      description:
        "Your Future in Accounting Starts Here! Our Bachelor of Commerce in Accounting programme offers a practical, industry-focused approach to a rewarding career in accounting and finance. You'll gain essential expertise in financial reporting, auditing, taxation, and management accounting. What sets this degree apart is its blend of theory and hands-on experience, including a compulsory semester-long internship for invaluable real-world exposure.",
    },
    {
      cover: "/images/courses-images/BBA in bus mgmt.jpeg",
      courseName: "Undergraduate Programme",
      title: "BBA in Business Management",
      description:
        "Aiming for a leadership role in the global business environment? Our Bachelor of Business Administration in Business Management provides the strategic mindset and skills you need. This programme covers key areas like management, finance, marketing, entrepreneurship, operations, and digital transformation, with a strong focus on innovation, sustainability, and ethical leadership.",
    },
    {
      cover: "/images/courses-images/BSc in Hospitality.jpeg",
      courseName: "Undergraduate Programme",
      title: "Bsc in Hospital Administration",
      description:
        "Aspiring to a leadership position in healthcare? Our BSc in Hospital Administration is a specialised programme designed to equip you with essential knowledge and skills.",
    },
    {
      cover: "/images/courses-images/Bcom in Hospitality.jpeg",
      courseName: "Undergraduate Programme",
      title: "B.Com in Hospitality Management",
      description:
        "Aspiring to a leadership role in the vibrant hospitality sector? Our Bachelor of Commerce in Hospitality Management provides a strong foundation in business principles alongside specialised hospitality skills. You'll cover core areas like accounting and marketing, combined with modules in hotel operations, food and beverage management, and tourism development.",
    },
    {
      cover: "/images/courses-images/Diploma in Occup.jpeg",
      courseName: "Undergraduate Programme",
      title: "Dip in Occupational Health Safety",
      description:
        "Fascinated by creating safer workplaces? Our Diploma in Occupational Health and Safety is for you! This comprehensive programme blends occupational health, safety management, risk assessment, and environmental sustainability. You'll gain practical skills to identify, evaluate, and control workplace hazards, ensuring compliance with regulations, and fostering a strong safety culture.",
    },
    {
      cover: "/images/courses-images/Bsc in data science.jpeg",
      courseName: "Undergraduate Programme",
      title: "Bachelor of Science in Data Science",
      description:
        "Want to become a data expert? Our four-year BSc in Data Science equips you to extract meaningful insights from vast datasets.",
    },
    {
      cover: "/images/courses-images/Bed in Primary.jpeg",
      courseName: "Undergraduate Programme",
      title: "BED in Primary Education (English Language and Mathematics)",
      description:
        "Ready to shape the future of education? Botho University's Bachelor of Education (Primary Education) programme is designed for aspiring and current educators, equipping you with essential skills and knowledge to excel.",
    },
    {
      cover: "/images/courses-images/BSc in network security.jpeg",
      courseName: "Undergraduate Programme",
      title: "Bsc in Network Security and Computer Forensics",
      description:
        "Ready to become a cybersecurity expert? Our BSc in Network Security and Computer Forensics is a specialised degree equipping you to protect digital assets and investigate cyber threats.",
    },
    {
      cover: "/images/courses-images/BSc in health info.jpeg",
      courseName: "Undergraduate Programme",
      title: "Bsc in Health Information Management",
      description:
        "Fascinated by the intersection of healthcare and technology? Our BSc in Health Information Management equips you to manage health data, information systems, and technology solutions.",
    },
    {
      cover: "/images/courses-images/BSc in Safety..png",
      courseName: "Undergraduate Programme",
      title: "Bsc in Safety, Health and Environmental Management",
      description:
        "Ready to champion workplace safety and environmental well-being? Our BSc in Safety, Health, and Environment (SHE) Management is an interdisciplinary programme designed to equip you with essential knowledge.",
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
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <StaticHome />
      <Course
        cardData={cardDataPg}
        moreButton={false}
        secondaryHeading="Postgraduate Programmes"
        secondaryParagraph="Take your expertise to the next level with advanced qualifications designed for leadership and impact."
        courseName="Postgraduate Programmes"
      />
      <Course
        cardData={cardDataUg}
        secondaryHeading="Undergraduate Programmes"
        secondaryParagraph="Start strong with a flexible, accredited degree that builds your foundation for a successful career."
      />
      <FeedBackSection />
      <Faq faqData={faqData} animation={true} />
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
