import "./feehome.css";
import { Carousel } from "antd";

import React from "react";

const herobanner = [
    {
        Primarytittle:
            "Affordable. Flexible. Build <span style='background-color: white' color:'white', ,>Around You</span> ",
        subtittle:
            "At Botho University, our online learning fees are designed to give you full control. You only pay for the modules you register for—each one priced according to its credit load. This pay-as-you-go model ensures you’re only investing in what you study, with no hidden costs.",
        button: "Download Full Fee Structure PDF",
        arrowIcon: "../../../public/icon/Frame (1).png",
        backgroundImg: "../../../public/images/FeeHome.jpg",
        calledtoAction:
            "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

        dynamicimg: [
            "../../../public/images/Ellipse 21.png",
            "../../../public/images/Ellipse 22.png",
            "../../../public/images/Ellipse 23.png",
            "../../../public/images/Ellipse 24.png",
        ],
    },
    {
        Primarytittle:
            "Affordable. Flexible. Build <span style='background-color: white' color:'white', ,>Around You</span> ",
        subtittle:
            "At Botho University, our online learning fees are designed to give you full control. You only pay for the modules you register for—each one priced according to its credit load. This pay-as-you-go model ensures you’re only investing in what you study, with no hidden costs.",
        button: "Download Full Fee Structure PDF",
        arrowIcon: "../../../public/icon/Frame (1).png",
        backgroundImg: "../../../public/images/FeeHome.jpg",
        calledtoAction:
            "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

        dynamicimg: [
            "../../../public/images/Ellipse 21.png",
            "../../../public/images/Ellipse 22.png",
            "../../../public/images/Ellipse 23.png",
            "../../../public/images/Ellipse 24.png",
        ],
    },
    {
        Primarytittle:
            "Affordable. Flexible. Build <span style='background-color: white' color:'white', ,>Around You</span> ",
        subtittle:
            "At Botho University, our online learning fees are designed to give you full control. You only pay for the modules you register for—each one priced according to its credit load. This pay-as-you-go model ensures you’re only investing in what you study, with no hidden costs.",
        button: "Download Full Fee Structure PDF",
        arrowIcon: "../../../public/icon/Frame (1).png",
        backgroundImg: "../../../public/images/FeeHome.jpg",
        calledtoAction:
            "98% of our graduates will recommend us to others (Source: 2025 Graduate Tracer Study)",

        dynamicimg: [
            "../../../public/images/Ellipse 21.png",
            "../../../public/images/Ellipse 22.png",
            "../../../public/images/Ellipse 23.png",
            "../../../public/images/Ellipse 24.png",
        ],
    },
];

const FeeHome = () => {
    return (
        <>
            <Carousel
                className="carosal-inner"
                autoplay
                // dotPosition="bottom"
                dots={false}
            >
                {herobanner.map((item, index) => (
                    <div className="">
                        <div
                            key={index}
                            className="hero-slide"
                            style={{ backgroundImage: ` linear-gradient( rgba(237, 199, 199, 0.91),rgba(237, 199, 199, 0.91)) ,url(${item.backgroundImg})`, }}
                        >
                            <div className="hero-silde-session ">
                                <h1
                                    className="primary-heading black-text-primary"
                                    dangerouslySetInnerHTML={{ __html: item.Primarytittle }}
                                ></h1>
                                <p className="secondary-paragraph black-text">{item.subtittle}</p>

                                <div className="">
                                    <button className="primary-button fee-primary-button">
                                        {item.button}{" "}
                                        <img
                                            className="fee-arrow-icon-img"
                                            src={item.arrowIcon}
                                            alt=""
                                            srcset=""
                                        />{" "}
                                    </button>
                                </div>
                                <div className="sub-heading-main">
                                    <div className="dynamic-img-main">
                                        {item.dynamicimg.map((item, index) => (
                                            <img
                                                className="dynamic-img"
                                                src={item}
                                                alt=""
                                                srcset=""
                                            />
                                        ))}
                                    </div>
                                    <div className="secondary-paragraph-pec  black-text" dangerouslySetInnerHTML={{ __html: item?.calledtoAction }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default FeeHome;
