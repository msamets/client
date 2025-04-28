import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
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

    return(<>
     <footer className="footerContainer text-white">
            <div className="ft_top container">
              <div className="row gy-4">
                <div className='col-lg-4 col-md-6'>
                    <a className="navbar-brand mb-4" href="/">
                        <img src="./images/ft_logo.png" alt="logo" className="footer-logo" />
                    </a>
                    <p className="footer-description">
                        Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S.
                        enterprises, our solutions simplify complex processes.
                    </p>
                </div>
                <div className='col-lg-2 col-md-6 col-6'>
                    <h5 className="footer-heading">Useful Links</h5>
                    <ul className="navbar-nav footer-links mt-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/features" className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Deployment and Services</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2 col-md-6 col-6'>
                    <h5 className="footer-heading">Legal</h5>
                    <ul className="navbar-nav footer-links mt-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Terms & Conditions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <h5 className="footer-heading">Get In Touch With Us!</h5>
                    <p className='mt-3'>If you're ready to sign up with us, or if you have any questions, please get in touch.</p>
                    <div className="contact-info mt-3">
                        <img src="./images/phoneIcon.png" alt="Phone Icon" className="contact-icon" />
                        <div className="contact-text">
                            <span>Contact Us</span>
                            <a className='text-white' href="tel:+1 (801) 893-3654">+1 (801) 893-3654</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="ft_copyright container mt-4">
                <div className="row">
                    <div className='col-md-12 text-center'>
                        © 2025 xcloudify. All rights reserved.
                    </div>
                </div>
            </div>

            <style>
                {`
                    .footerContainer {
                        background-color: #161C2D;
                        padding: ${isMobile ? '40px 0 20px' : '70px 0 30px'};
                    }

                    .ft_top {
                        padding-bottom: 30px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    }

                    .footer-logo {
                        max-width: 180px;
                        margin-bottom: 15px;
                    }

                    .footer-description {
                        color: rgba(255, 255, 255, 0.7);
                        font-size: 14px;
                        line-height: 1.6;
                    }

                    .footer-heading {
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 15px;
                        position: relative;
                    }

                    .footer-links {
                        margin: 0;
                        padding: 0;
                    }

                    .footer-links .nav-item {
                        margin-bottom: 10px;
                    }

                    .footer-links .nav-link {
                        color: rgba(255, 255, 255, 0.7);
                        padding: 0;
                        font-size: 14px;
                        transition: all 0.3s ease;
                    }

                    .footer-links .nav-link:hover {
                        color: white;
                        transform: translateX(5px);
                    }

                    .contact-info {
                        display: flex;
                        align-items: center;
                    }

                    .contact-icon {
                        width: 24px;
                        height: 24px;
                        margin-right: 15px;
                    }

                    .contact-text {
                        display: flex;
                        flex-direction: column;
                    }

                    .contact-text a {
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }

                    .contact-text a:hover {
                        color: #7336ff !important;
                    }

                    .ft_copyright {
                        color: rgba(255, 255, 255, 0.5);
                        font-size: 14px;
                        padding: 20px 0;
                    }

                    @media (max-width: 767px) {
                        .footerContainer {
                            padding: 40px 0 20px;
                        }

                        .footer-heading {
                            font-size: 16px;
                            margin-bottom: 10px;
                        }

                        .footer-links .nav-item {
                            margin-bottom: 8px;
                        }

                        .footer-links .nav-link {
                            font-size: 13px;
                        }

                        .ft_copyright {
                            font-size: 12px;
                        }
                    }
                `}
            </style>
          </footer>
    </>);
};
export default Footer;