import NavBar from "../components/navBar/Navbar";
import HeroSection from "../components/heroSection/HeroSection"
import Footer from "../components/footer/Footer";
import InfiniteSection from "../components/infiniteSection/InfiniteCompo";
import FeedBackSection from "../components/feedback/FeedBackSection";
import BannerSection from "../components/banner/BannerSection";
const HomePage = () => {
    return (
        <div className="">
             <NavBar />
            <HeroSection />
            <InfiniteSection />
            <FeedBackSection />
            <BannerSection/>
            <Footer /> 



        </div>
    );
}

export default HomePage;