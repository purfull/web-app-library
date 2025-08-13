// import React from 'react'
// import "./footer.css"

// const Footer = () => {
//     return (  
//         <div className='footer-main'>
//             <div className='footer-content-section'>
//                 <div className='footer-logo'>
//                     <img src="/images/BothoFooter.png" alt="" className='footer-logo-img' />
//                 </div>

//                 <div className='footer-text-section'>
//                     <p className='secondary-paragraph'>
//                         Botho University is a leading multi-disciplinary institution founded in Botswana in 1997, now operating across 4 African countries and online. It offers accredited, industry-focused programmes from Certificate to Master’s level, driven by innovation and impact.
//                     </p>

//                     <div className='contact-section'>
//                         <div className='heading-contact'><p>Contact Us</p></div>
//                         <div className='grid-contents'>
//                             <div className='grid-content-one'>
//                                 <div className='heading'>Physical Address:</div>
//                                 <span className='secondary-paragraph'>Botho Education Park, Kgale, PO Box 501564, Gaborone, Botswana</span>
//                             </div>
//                             <div className='grid-content-one'>
//                                 <div className='heading'>Postel Address:</div>
//                                 <span className='secondary-paragraph'>PO Box 501564, Gaborone, Botswana.</span>
//                             </div>
//                             <div className='grid-content-one'>
//                                 <div className='heading'>Telephone</div>
//                                 <span className='secondary-paragraph'>+267 363 5421, 363 5422, 363 5446</span>
//                             </div>
//                             <div className='grid-content-one'>
//                                 <div className='heading'>Fax:</div>
//                                 <span className='secondary-paragraph'>+267 3187858</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='footer-copy-rights-section'>
//                 <div><p className='secondary-paragraph black' style={{ color: "#000" }}>© Copyright 2025, All Rights Reserved by Botho University</p></div>

//                 <div className='terms-cond'>
//                     <p className='secondary-paragraph black' style={{ color: "#000" }}>Terms & Conditions</p>
//                     <p className='secondary-paragraph black' style={{ color: "#000" }}>Privacy Policy</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;

import React from 'react'
import "./footer.css"
import Policy from '../policy/policy';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Footer = () => {
  const navigate = useNavigate();
    const handleTerms = () => {
    navigate("/terms");
    window.scrollTo(0, window.innerHeight);
  };
  
  const handleWhyClick = () => {
    navigate("/");
    window.scrollTo(0, window.innerHeight);
  };

  const handleFeeClick = () => {
    navigate("/all-fee");
    window.scrollTo(0, 0);
  };
  const handleCourseClick = () => {
    navigate("/all-courses");
    window.scrollTo(0, 0);
  };
    return (

        <div className="footer-main-con">

            <div className="footer-inside-con ">

                <div className="first-con">

                    <img className="logo-botho-footer" src="/logo/BothoLogo-hd.jpg" alt="Logo" />

                    <div className="span-first-con">
                        <span className='first-conatiner-texts'>Botho University is a leading African institution committed to excellence.
Our flexible online programmes are designed for real-world success.
With physical campuses across the region in 4 countries and a strong digital presence, we empower learners to thrive in a fast-changing world.</span>
                    </div>

                    {/* <div className="footer-first-logo-session ">

                        <FaFacebookF className="social-icon" />
                        <FaTwitter className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaYoutube className="social-icon" />

                    </div> */}
                </div>


                <div className="footer-second-con">
                    <span className='heading-footer'>Quick links</span>
                    <a className='color-black-footer' href='' onClick={handleCourseClick}>Botho University Online Programmes</a>
                    <a className='color-black-footer' href='' onClick={handleWhyClick}>Why Botho University Online?</a>
                    <a className='color-black-footer' href='' onClick={handleFeeClick}>Fees</a>







                </div>

                <div className="footer-third-con">
                    <span className='heading-footer'>Contact Us</span>
                    <div className='third-logo-and-content'>
                        <img src="/logo/location.png" alt="" />
                        <a className='color-black-footer' >Botho Education Park, Kgale, Gaborone, Botswana</a>
                    </div>

                    <div className='third-logo-and-content'>
                        <img src="/logo/message.png" alt="" />
                        <a className='color-black-footer'   
                        // href="mailto:onlineadmissions@bothouniversity.ac.bw"
                        >onlineadmissions@bothouniversity.ac.bw</a>

                    </div>

                    <div className='third-logo-and-content'>
                        <img src="/logo/phone.png" alt="" />
                        <a className='color-black-footer' >+267 363 5455 / 363 5471</a>

                    </div>
                    <div className='third-logo-and-content'>
                        <img src="/logo/whatsapp.png" alt="" />
                        <a className='color-black-footer' href="https://wa.me/26777017160" target='_blank'>+267 77 017 160</a>

                    </div>

                </div>


                {/* //mobile design // */}

                {/* <div className="mobile-design-two-and-third n">


                    <div className="mobile-footer-second-con">

                        <span>Home</span>
                        <span>Shop</span>
                        <span>Contact</span>
                        <span>FAQs</span>


                    </div>

                    <div className="mobile-footer-third-con">

                        <span>My Account</span>
                        <span>Track Order</span>
                        <span>Shipping Policy</span>
                        <span>Returns & Refunds</span>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>

                    </div>

                </div> */}

            </div>
            <div className='footer-copy-rights-section'>
                <div><p className=' black' style={{ color: "#000" }}>© Copyright 2025, All Rights Reserved by Botho University</p></div>

                <div className='terms-cond'>

                    <a className='color-black-footer black' href='' target='_blank' style={{ color: "#000" }} onClick={handleTerms}>Terms & Conditions</a>
                    {/* <a className='color-black-footer black' style={{ color: "#000" }} href=''>Privacy Policy</a> */}

                </div>
            </div>

        </div>

    )
};

export default Footer;