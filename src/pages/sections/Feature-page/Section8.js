import { Link } from 'react-router-dom';
import Feature5 from "../Images/Home8.png";
import { useState, useEffect } from 'react';

const Section8 = () => {
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
        <section id="featureSec5" className="container py-5 mt-4 mt-md-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-8 mb-4 mb-md-0">
                    <div className='content_sec_5 px-3'>
                        <h2>Ready to Explore a More Modern Approach?</h2>
                        <p>Contact Us to discuss how our platform can transform your GPU cloud strategy.</p>
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
                <div className="col-12 col-md-4 text-center">
                    <div className='content_sec_5'>
                        <img className="img-fluid" src={Feature5} alt="GPU Cloud Strategy" />
                    </div>
                </div>
            </div>

            <style>
                {`
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
                    margin-top: 20px;
                }

                .reqDemoBtn:hover {
                    background-color: #6026e3;
                    transform: translateY(-3px);
                    color: white;
                    box-shadow: 0 6px 15px rgba(115, 54, 255, 0.35);
                }

                @media (max-width: 767px) {
                    .reqDemoBtn {
                        padding: 14px 32px;
                        font-size: 16px;
                        width: 80%;
                        max-width: 300px;
                    }
                }

                @media (max-width: 576px) {
                    .reqDemoBtn {
                        padding: 13px 30px;
                        font-size: 16px;
                        width: 90%;
                        max-width: 280px;
                        margin-top: 20px;
                    }
                }

                @media (max-width: 375px) {
                    .reqDemoBtn {
                        padding: 12px 25px;
                        font-size: 15px;
                        width: 95%;
                        max-width: 260px;
                    }
                }
                `}
            </style>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Contact Us
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="inputFirstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputFirstName"
                                        aria-describedby="firstNameHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputLastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputLastName"
                                        aria-describedby="lastNameHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        aria-describedby="emailHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputPhone" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="inputPhone"
                                        aria-describedby="phoneHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputMessage" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="inputMessage"
                                        rows="3"
                                        placeholder="Enter your message..."
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section8;