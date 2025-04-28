import Header from './includes/Header';
import Footer from './includes/Footer';
import Section1 from './sections/Home-page/Section1';
import Section2 from './sections/Home-page/Section2';
import Section3 from './sections/Home-page/Section3';
import Section4 from './sections/Home-page/Section4';
import Section5 from './sections/Home-page/Section5';
import { useEffect, useState } from 'react';

const Home = () => {
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
            <Header />
            <main className="homePage">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </main>
            <Footer />
            <style>
                {`
                .headerSection {
                    height: ${isMobile ? '600px' : '700px'};
                    transition: height 0.3s ease;
                    min-height: ${isMobile ? '100vh' : '700px'};
                    position: relative;
                    z-index: auto;
                }

                .homePage {
                    overflow: hidden;
                    position: relative;
                    z-index: 1;
                }

                @media (max-width: 1200px) {
                    .headerSection {
                        height: 650px;
                        min-height: 650px;
                    }
                }

                @media (max-width: 992px) {
                    .headerSection {
                        height: 650px;
                        min-height: 650px;
                    }
                }

                @media (max-width: 767px) {
                    .headerSection {
                        height: 550px;
                    }
                }

                @media (max-width: 576px) {
                    .headerSection {
                        height: 500px;
                    }
                }

                @media (max-width: 375px) {
                    .headerSection {
                        height: 570px;
                    }
                }
                `}
            </style>
        </>
    );
};
export default Home;