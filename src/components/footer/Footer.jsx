// import React from 'react'
// import "./footer.css"

// const Footer = () => {
//     return (  
//         <div className='footer-main'>
//             <div className='footer-content-section'>
//                 <div className='footer-logo'>
//                     <img src="../../../public/images/BothoFooter.png" alt="" className='footer-logo-img' />
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

const Footer = () => {
    return (  
        <div className='footer-main'>
            <div className='footer-content-section'>
                <div className='footer-logo'>
                    <img src="../../../public/images/BothoFooter.png" alt="" className='footer-logo-img' />
                </div>

                <div className='footer-text-section'>
                    <p className='secondary-paragraph foot'>
                        Botho University is a leading multi-disciplinary institution founded in Botswana in 1997, now operating across 4 African countries and online. It offers accredited, industry-focused programmes from Certificate to Master’s level, driven by innovation and impact.
                    </p>

                    <div className='contact-section'>
                        <div className='heading-contact'><p>Contact Us</p></div>
                        <div className='grid-contents'>
                            <div className='grid-content-one'>
                                <div className='heading'>Physical Address:</div>
                                <span className='secondary-paragraph foot'>Botho Education Park, Kgale, PO Box 501564, Gaborone, Botswana</span>
                            </div>
                            <div className='grid-content-one'>
                                <div className='heading'>Postel Address:</div>
                                <span className='secondary-paragraph foot'>PO Box 501564, Gaborone, Botswana.</span>
                            </div>
                            <div className='grid-content-one'>
                                <div className='heading'>Telephone</div>
                                <span className='secondary-paragraph foot'>+267 363 5421, 363 5422, 363 5446</span>
                            </div>
                            <div className='grid-content-one'>
                                <div className='heading'>Fax:</div>
                                <span className='secondary-paragraph foot'>+267 3187858</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-copy-rights-section'>
                <div><p className='secondary-paragraph black' style={{ color: "#000" }}>© Copyright 2025, All Rights Reserved by Botho University</p></div>

                <div className='terms-cond'>
                    <p className='secondary-paragraph black' style={{ color: "#000" }}>Terms & Conditions</p>
                    <p className='secondary-paragraph black' style={{ color: "#000" }}>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;