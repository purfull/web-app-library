import "./heroSetcion.css"
import { Carousel } from 'antd';

import React from 'react'


const herobanner = [
    {
        Primarytittle: "Empower Your Future with <span style='background-color: #841D2E'>Botho University </span> Online",
        subtittle: "Pursue accredited, globally recognized qualifications designed for flexibility, affordability, and career advancement - anytime, anywhere.",
        button: "Explore Programmes",
        arrowIcon: "../../../public/icon/arrow_forward.png",
        backgroundImg: "../../../public/imgs/herobanner.png",
        calledtoAction: "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

        dynamicimg: [

            "../../../public/imgs/Ellipse 21.png",
            "../../../public/imgs/Ellipse 22.png",
            "../../../public/imgs/Ellipse 23.png",
            "../../../public/imgs/Ellipse 24.png"


        ]

    },
    {
        Primarytittle: "Empower Your Future with <span style='background-color: #841D2E'>Botho University </span> Online",
        subtittle: "Pursue accredited, globally recognized qualifications designed for flexibility, affordability, and career advancement - anytime, anywhere.",
        button: "Explore Programmes",
        arrowIcon: "../../../public/icon/arrow_forward.png",
        backgroundImg: "../../../public/imgs/herobanner.png",
        calledtoAction: "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

        dynamicimg: [

            "../../../public/imgs/Ellipse 21.png",
            "../../../public/imgs/Ellipse 22.png",
            "../../../public/imgs/Ellipse 23.png",
            "../../../public/imgs/Ellipse 24.png"


        ]

    },
    {
        Primarytittle: "Empower Your Future with <span style='background-color: #841D2E'>Botho University </span> Online",
        subtittle: "Pursue accredited, globally recognized qualifications designed for flexibility, affordability, and career advancement - anytime, anywhere.",
        button: "Explore Programmes",
        arrowIcon: "../../../public/icon/arrow_forward.png",
        backgroundImg: "../../../public/imgs/herobanner.png",
        calledtoAction: "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

        dynamicimg: [

            "../../../public/imgs/Ellipse 21.png",
            "../../../public/imgs/Ellipse 22.png",
            "../../../public/imgs/Ellipse 23.png",
            "../../../public/imgs/Ellipse 24.png"


        ]

    },

]

const HeroSection = () => {
    return (

        <>
            <Carousel
                className="carosal-inner"
                autoplay
                // dotPosition="bottom"
                dots={false}>

                {herobanner.map((item, index) => (

                    <div className="">
                        <div key={index} className="hero-slide" style={{ backgroundImage: `url(${item.backgroundImg})` }}>

                            <div className="hero-silde-content-session ">
                                <h1 className="primary-heading "
                                    dangerouslySetInnerHTML={{ __html: item.Primarytittle }}></h1>
                                <p className="secondary-paragraph">{item.subtittle}</p>

                                <div className=""><button className="button-styles">{item.button} <img className="arrow-icon-img" src={item.arrowIcon} alt="" srcset="" /> </button></div>
                                <div className="sub-heading-main">

                                    <div className="dynamic-img-main">
                                        {item.dynamicimg.map((item, index) => (
                                            <img className="dynamic-img" src={item} alt="" srcset="" />
                                        ))}
                                    </div>
                                    <div className="sub-heading">
                                        {item.calledtoAction}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </Carousel>
        </>


    )
}

export default HeroSection