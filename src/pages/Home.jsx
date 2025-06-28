import NavBar from "../components/navBar/Navbar";
import ContentPage from "../components/content/Content";
import RednavBar from "../components/rednavBar/RedNavbar";
import Course from "../components/courses/Courses";
import Faq from "../components/faq/Faq";

const HomePage = () => {
  return (
    <div className="">
      <RednavBar />
      <NavBar />
      <ContentPage />
      <Course />
      <Faq />
    </div>
  );
};

export default HomePage;
