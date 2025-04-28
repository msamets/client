import Header from './includes/Header';
import Footer from './includes/Footer';
import Section2 from './sections/Services-page/Section2';
import Section3 from './sections/Services-page/Section3';
import Section4 from './sections/Services-page/Section4';
import Section5 from './sections/Services-page/Section5';
import Section6 from './sections/Services-page/Section6';
import Section7 from './sections/Services-page/Section7';
import Section8 from './sections/Services-page/Section8';
import { useState, useEffect } from 'react';

const Services = () => {
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
        <>
         <Header pageTitle="Deployment, Services & Success Stories" />
      <main className="servicePage">
        <section id="serviceSec1" className="container position-relative">
            <div className='row'>
                <div className='col-12 col-md-10 col-lg-8 mx-auto'>
                    <div className='content_sec_1 text-center'>
                        {/* Subtitle removed */}
                    </div>
                </div>
            </div>
        </section>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
      <Footer />
      <style>
        {`
        .headerSection {
            height: ${isMobile ? '300px' : '350px'};
            transition: height 0.3s ease;
            min-height: ${isMobile ? '300px' : '350px'};
            position: relative;
            z-index: auto;
        }

        .servicePage {
            overflow: hidden;
            position: relative;
            z-index: 1;
        }

        main.servicePage {
            margin-top: 0;
        }

        #serviceSec1 {
            padding-top: ${isMobile ? '30px' : '40px'};
            padding-bottom: ${isMobile ? '10px' : '20px'};
            position: relative;
            z-index: 1;
            margin-top: 0;
        }

        .content_sec_1 {
            max-width: 950px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: #555;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Common styles for service sections similar to home sections */
        #serviceSec2, #serviceSec3, #serviceSec4, #serviceSec5, #serviceSec6, #serviceSec7 {
            margin-bottom: 80px;
            position: relative;
            z-index: 1;
        }

        .servicePage h2 {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            color: #222;
            margin-bottom: 1.5rem;
        }

        .servicePage p {
            font-size: 1.15rem;
            color: #555;
            line-height: 1.6;
        }

        @media (max-width: 1200px) {
            .headerSection {
                height: 325px;
                min-height: 325px;
            }

            #serviceSec1 {
                padding-top: 30px;
                margin-top: 0;
            }

            .servicePage h2 {
                font-size: 2.25rem;
            }
        }

        @media (max-width: 992px) {
            .headerSection {
                height: 325px;
                min-height: 325px;
            }

            #serviceSec1 {
                padding-top: 25px;
                margin-top: 0;
            }

            .hero-subtitle {
                font-size: 1.15rem;
            }

            .servicePage h2 {
                font-size: 2rem;
            }

            .servicePage p {
                font-size: 1.1rem;
            }
        }

        @media (max-width: 767px) {
            .headerSection {
                height: 275px;
                min-height: 275px;
            }

            #serviceSec1 {
                padding-top: 20px;
                margin-top: 0;
            }

            .hero-subtitle {
                font-size: 1rem;
            }

            .servicePage h2 {
                font-size: 1.75rem;
            }

            .servicePage h3 {
                font-size: 1.5rem;
            }

            .servicePage p {
                font-size: 1rem;
            }

            #serviceSec2, #serviceSec3, #serviceSec4, #serviceSec5, #serviceSec6, #serviceSec7 {
                margin-bottom: 50px;
            }
        }

        @media (max-width: 576px) {
            .headerSection {
                height: 250px;
                min-height: 250px;
            }

            #serviceSec1 {
                padding-top: 15px;
                padding-bottom: 10px;
                margin-top: 0;
            }

            .hero-subtitle {
                padding: 0 15px;
            }

            .servicePage h2 {
                font-size: 1.5rem;
                padding: 0 10px;
            }

            .servicePage .container {
                padding-left: 15px;
                padding-right: 15px;
            }
        }

        @media (max-width: 375px) {
            .headerSection {
                height: 250px;
                min-height: 250px;
            }

            #serviceSec1 {
                padding-top: 10px;
                margin-top: 0;
            }

            .servicePage h2 {
                font-size: 1.35rem;
            }
        }
            `}
      </style>
      </>
    );
};
export default Services;