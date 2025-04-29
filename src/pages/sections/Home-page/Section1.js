import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section1 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if viewport is mobile size
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 992);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Clean up event listener
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="homeSec1" className="container position-relative">
            <div className='row'>
                <div className='col col-lg-10 col-xl-9 mx-auto'>
                    <div className='content_sec_1 text-center'>
                        <Link
                            to="/"
                            className="gpuBtn"
                            style={{ borderRadius: '9px' }}
                            {...ANIMATION_PRESETS.FADE_DOWN}
                            data-aos-delay="100"
                        >
                            <img src="./images/fireIcon.png" alt="icon" className="icon-img" />
                            <span className="gpu-text">&nbsp;Next-Level GPUaaS for Effortless Cloud Scaling</span>
                        </Link>
                        <h1
                            className="mt-3 mt-md-4 hero-title custom-hero-size"
                            {...ANIMATION_PRESETS.FADE_UP}
                            data-aos-delay="200"
                        >
                            Revolutionize GPU Cloud Scaling with a Modern GPUaaS Platform
                        </h1>
                        <p
                            className="mt-3 hero-subtitle"
                            {...ANIMATION_PRESETS.FADE_UP}
                            data-aos-delay="300"
                        >
                            Accelerate your cloud business with our single-agent GPU orchestration solution that simplifies operations, lowers costs, and delivers flexible, on-demand GPU capabilities.
                        </p>
                        <div
                            className='banner_btn mt-4'
                            {...ANIMATION_PRESETS.FADE_UP}
                            data-aos-delay="400"
                        >
                            <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="reqDemoBtn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (typeof window !== 'undefined' && window.bootstrap) {
                                        const modalElement = document.getElementById('exampleModal');
                                        const modal = new window.bootstrap.Modal(modalElement);
                                        modal.show();
                                    }
                                }}
                            >
                                Request a demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                #homeSec1 {
                    padding-top: ${isMobile ? '120px' : '100px'};
                    padding-bottom: ${isMobile ? '40px' : '60px'};
                    position: relative;
                    z-index: 1;
                    margin-top: ${isMobile ? '20px' : '20px'};
                }

                .content_sec_1 {
                    max-width: 950px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .gpuBtn {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fff3e9;
                    color: #ff7a00;
                    font-weight: 500;
                    padding: 12px 25px;
                    border-radius: 12px;
                    text-decoration: none;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    max-width: 90%;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .icon-img {
                    width: 24px;
                    height: auto;
                    margin-right: 8px;
                }

                .gpu-text {
                    display: inline-block;
                    white-space: normal;
                    overflow: visible;
                    font-weight: 600;
                }

                .gpuBtn:hover {
                    background-color: #ffe6d1;
                    transform: translateY(-2px);
                }

                .hero-title.custom-hero-size {
                    font-family: 'Plus Jakarta Sans', sans-serif !important;
                    font-weight: 600 !important;
                    font-size: 50px !important;
                    line-height: 60px !important;
                    letter-spacing: 0px !important;
                    text-align: center !important;
                    vertical-align: middle !important;
                    color: #222 !important;
                    max-width: 900px !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    color: #555;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .reqDemoBtn {
                    display: inline-block;
                    padding: 15px 35px;
                    background-color: #7336ff;
                    color: white;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(115, 54, 255, 0.25);
                }

                .reqDemoBtn:hover {
                    background-color: #6026e3;
                    transform: translateY(-3px);
                    color: white;
                    box-shadow: 0 6px 15px rgba(115, 54, 255, 0.35);
                }

                @media (max-width: 1200px) {
                    .hero-title.custom-hero-size {
                        font-size: 44px !important;
                        line-height: 54px !important;
                        margin-top: 1rem;
                    }

                    #homeSec1 {
                        padding-top: 90px;
                        margin-top: 15px;
                    }

                    .gpuBtn {
                        margin-top: 1rem;
                    }
                }

                @media (max-width: 992px) {
                    #homeSec1 {
                        padding-top: 80px;
                        margin-top: 12px;
                    }

                    .hero-title.custom-hero-size {
                        font-size: 38px !important;
                        line-height: 48px !important;
                        margin-top: 1rem;
                    }

                    .hero-subtitle {
                        font-size: 1.15rem;
                    }

                    .gpuBtn {
                        font-size: 15px;
                        padding: 10px 22px;
                        margin-top: 0.5rem;
                        margin-bottom: 0.5rem;
                    }

                    .icon-img {
                        width: 22px;
                    }
                }

                @media (max-width: 767px) {
                    #homeSec1 {
                        padding-top: 110px;
                        margin-top: 20px;
                    }

                    .hero-title.custom-hero-size {
                        font-size: 32px !important;
                        line-height: 40px !important;
                    }

                    .gpuBtn {
                        font-size: 14px;
                        padding: 10px 20px;
                        border-radius: 10px;
                    }

                    .icon-img {
                        width: 20px;
                    }

                    .hero-subtitle {
                        font-size: 1rem;
                    }

                    .reqDemoBtn {
                        padding: 14px 32px;
                        font-size: 16px;
                        width: 80%;
                        max-width: 300px;
                    }
                }

                @media (max-width: 576px) {
                    #homeSec1 {
                        padding-top: 100px;
                        padding-bottom: 30px;
                        margin-top: 15px;
                    }

                    .hero-title.custom-hero-size {
                        font-size: 26px !important;
                        line-height: 34px !important;
                        margin-top: 15px;
                        padding: 0 10px;
                    }

                    .gpuBtn {
                        padding: 10px 18px;
                        font-size: 13px;
                        text-align: left;
                        max-width: 300px;
                        margin: 0 auto;
                        justify-content: flex-start;
                        border-radius: 8px;
                    }

                    .gpu-text {
                        line-height: 1.3;
                    }

                    .hero-subtitle {
                        padding: 0 15px;
                    }

                    .reqDemoBtn {
                        padding: 13px 30px;
                        font-size: 16px;
                        width: 90%;
                        max-width: 280px;
                        margin-top: 20px;
                    }
                }

                @media (max-width: 375px) {
                    .gpuBtn {
                        max-width: 270px;
                        font-size: 12px;
                        padding: 9px 16px;
                    }

                    .icon-img {
                        width: 18px;
                    }

                    .hero-title.custom-hero-size {
                        font-size: 22px !important;
                        line-height: 30px !important;
                    }

                    #homeSec1 {
                        padding-top: 90px;
                        margin-top: 10px;
                    }

                    .reqDemoBtn {
                        padding: 12px 25px;
                        font-size: 15px;
                        width: 95%;
                        max-width: 260px;
                    }
                }
                `}
            </style>
        </section>
    );
};
export default Section1;