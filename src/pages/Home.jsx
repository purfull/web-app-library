import NavBar from "../components/navBar/Navbar";

import ContentPage from "../components/content/Content";
import RednavBar from "../components/rednavBar/RedNavbar";
import Course from "../components/courses/Courses";
import Faq from "../components/faq/Faq";
import BannerSection from "../components/banner/BannerSection";

const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <InfiniteSection />
      <FeedBackSection />
      return (
      <div className="">
        <BannerSection />
        <RednavBar />
        <NavBar />
        <ContentPage />
        <Course />
        <Faq />
      </div>
      );

      <Footer />



    </div>
  );
}

export default HomePage;
