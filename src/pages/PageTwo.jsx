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
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <StaticHome />
      <Course />
      <FeedBackSection />
      <Faq />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default PageTwo;
