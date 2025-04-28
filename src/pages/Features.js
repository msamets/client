import Header from './includes/Header';
import Footer from './includes/Footer';
import Section2 from './sections/Feature-page/Section2';
import Section3 from './sections/Feature-page/Section3';
import Section4 from './sections/Feature-page/Section4';
import Section5 from './sections/Feature-page/Section5';
import Section6 from './sections/Feature-page/Section6';
import Section7 from './sections/Feature-page/Section7';
import Section8 from './sections/Feature-page/Section8';
import { useEffect, useState } from 'react';

const Features = () => {
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
         <Header pageTitle="Key Features & Benefits" />
      <main className="featurePage">
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

        .header-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1 !important;
            background-image: url('./images/header-bg.jpg');
            background-size: cover;
            background-position: center;
            opacity: 0.1;
        }

        .featurePage {
            overflow: hidden;
            position: relative;
            z-index: 1;
        }

        main.featurePage {
            margin-top: 0;
        }

        /* Common styles for feature sections similar to home sections */

        #featureSec2, #featureSec3, #featureSec4, #featureSec4_1, #featureSec4_2, #featureSec4_3, #featureSec4_5 {
            margin-bottom: 80px;
            position: relative;
            z-index: 1;
        }

        #featureSec5 {
            background: #F4F8FC;
            padding: 80px 100px;
            padding-bottom: 10px;
            border-radius: 10px;
            margin: 80px auto;
        }

        .content_sec_1, .content_sec_2, .content_sec_3, .content_sec_4, .content_sec_5 {
            max-width: 950px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .featurePage h2 {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            color: #222;
            margin-bottom: 1.5rem;
        }

        .featurePage p {
            font-size: 1.15rem;
            color: #555;
            line-height: 1.6;
        }

        .featurePage .content_sec_2 p.text-center,
        .featurePage .content_sec_3 p.text-center,
        .featurePage .content_sec_4 p.text-center {
            width: 60%;
            margin: 10px auto;
            color: #333333;
        }

        .featurePage .content_sec_3 {
            border: 1px solid #0000001A;
            float: left;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            display: block;
            background-color: #fff;
        }

        .featurePage .content_sec_4 button.accordion-button {
            border: 1px solid #1111111A;
            background: #F8F9FB;
            border-radius: 10px !important;
            margin: 8px 0px;
        }

        .featurePage .content_sec_4 .accordion-item {
            border: none;
        }

        .mt-100 {
            margin-top: 100px;
        }

        .mt-200 {
            margin-top: 100px;
        }

        @media (max-width: 1200px) {
            .headerSection {
                height: 325px;
                min-height: 325px;
            }

            .featurePage h2 {
                font-size: 2.5rem;
                margin-top: 1rem;
            }

            #featureSec5 {
                padding: 60px 80px;
                padding-bottom: 10px;
            }
        }

        @media (max-width: 992px) {
            .headerSection {
                height: 325px;
                min-height: 325px;
            }

            .featurePage h2 {
                font-size: 2.25rem;
            }

            .featurePage p {
                font-size: 1.1rem;
            }

            .featurePage .content_sec_2 p.text-center,
            .featurePage .content_sec_3 p.text-center,
            .featurePage .content_sec_4 p.text-center {
                width: 80%;
            }

            #featureSec5 {
                padding: 50px 60px;
                padding-bottom: 10px;
            }
        }

        @media (max-width: 767px) {
            .headerSection {
                height: 275px;
                min-height: 275px;
            }

            .mt-100, .mt-200 {
                margin-top: 2rem !important;
            }

            .featurePage h2 {
                font-size: 1.75rem;
            }

            h3 {
                font-size: 1.5rem;
            }

            .container {
                padding-left: 15px;
                padding-right: 15px;
            }

            .featurePage .content_sec_2 p.text-center,
            .featurePage .content_sec_3 p.text-center,
            .featurePage .content_sec_4 p.text-center {
                width: 100%;
            }

            #featureSec5 {
                padding: 40px 30px;
                padding-bottom: 10px;
                margin: 40px auto;
            }
        }

        @media (max-width: 576px) {
            .headerSection {
                height: 250px;
                min-height: 250px;
            }

            .featurePage h2 {
                font-size: 1.5rem;
                padding: 0 10px;
            }

            #featureSec5 {
                padding: 30px 20px;
                padding-bottom: 10px;
                margin: 30px auto;
                border-radius: 8px;
            }
        }

        @media (max-width: 375px) {
            .headerSection {
                height: 250px;
                min-height: 250px;
            }

            .featurePage h2 {
                font-size: 1.35rem;
            }

        }

        @media (min-width: 768px) and (max-width: 991px) {
            .mt-100, .mt-200 {
                margin-top: 3rem !important;
            }

            #featureSec5 {
                padding: 50px 40px;
                padding-bottom: 10px;
            }
        }
            `}
      </style>
      </>
    );
};
export default Features;