import React from "react";
import "./bannersection.css";
import bgImage from '../../../public/images/cta-bg.jpg'

const BannerSection = () => {

    return (
        <div className="main page-gap" >
            <div className="banner-container">
                <div className="coloured-bg" style={{ backgroundImage: `url('/images/cta-bg.svg')` }}>
                    <div className="left-banner " style={{width: "50%"}}>
                        <span className="primary-heading white">
                            Are You Ready to Take the  <span className="primary-heading" style={{ backgroundColor: "white", color: "#841d2e" ,padding:"2px"}}>Next Step?</span>
                        </span>

                        <p className="secondary-paragraph white sub-secondary">
                            Join thousands of students building their future with Botho
                            University Online. Flexible. Affordable. Recognized.
                        </p>
                        <button className='primary-button enquire-now-button'>Enquire Now <img src="/icon/arrow_forward.png" alt="" className='arrow-icon-banner' /></button>
                    </div>

                    <div className="right-banner">
                        <div className="shades">
                            {/* <img src="/images/Ellipse 20.png" alt="ellipse20" /> */}
                            {/* <img src="/images/Ellipse 19.png" alt="ellipse19" /> */}
                            {/* <img src="/images/Ellipse 18.png" alt="ellipse18" /> */}
                        </div>
                        <img src="/images/graduate.png" alt="graduates_image" />
                    </div>
                </div>
            </div>
        </div>
    );

}


export default BannerSection;
