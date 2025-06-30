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

const HomePage = () => {
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <HeroSection />
      <ContentPage />
      <InfiniteSection />
      <Course />
      <FeedBackSection />
      <Faq />
            <BannerSection/>
      <Footer />
    </div>
  );
};

export default HomePage;
