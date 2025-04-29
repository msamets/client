import Service1 from "../Images/Service.png";
import { useState, useEffect } from 'react';
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section2 = () => {
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

    return(
        <section id="serviceSec2" className={`container mt-5 ${isMobile ? 'mobile-view' : ''}`}>
            <div className="row align-items-center">
                <div className="col-md-6 order-2 order-md-1">
                    <div className="content_sec_2">
                        <h2 {...ANIMATION_PRESETS.FADE_LEFT} data-aos-delay="100">Deployment Model</h2>
                        <p className="mb-4" {...ANIMATION_PRESETS.FADE_LEFT} data-aos-delay="200">
                            We redefine how you roll out new regions or data centers. By centralizing most control services either in our cloud or on your premises, you avoid the capital expense and complexity typical of older solutions.
                        </p>

                        <div className="feature-item mb-4" {...ANIMATION_PRESETS.FADE_LEFT} data-aos-delay="300">
                            <h5>Install the Agent</h5>
                            <p>Run our single binary on your chosen hardware.</p>
                        </div>

                        <div className="feature-item mb-4" {...ANIMATION_PRESETS.FADE_LEFT} data-aos-delay="400">
                            <h5>Auto-Enrollment</h5>
                            <p>In a cloud-hosted setup, the agent connects securely to our management cloud. For fully on-prem deployments, it registers with your local control plane.</p>
                        </div>

                        <div className="feature-item mb-4" {...ANIMATION_PRESETS.FADE_LEFT} data-aos-delay="500">
                            <h5>Launch Workloads</h5>
                            <p>Use our intuitive web console or API to spin up containers, VMs, and more in minutes.</p>
                        </div>

                        <p {...ANIMATION_PRESETS.FADE_LEFT} data-aos-delay="600">No separate message queuing services. No large database clusters. No frustration—just a streamlined platform that adapts to your compliance and operational requirements.</p>
                    </div>
                </div>
                <div className="col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
                    <img
                        src={Service1}
                        className="img-fluid"
                        alt="Deployment model"
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="100"
                    />
                </div>
            </div>

            <style>
                {`
                #serviceSec2 {
                    margin-bottom: 80px;
                    position: relative;
                    z-index: 1;
                }

                .content_sec_2 {
                    position: relative;
                    z-index: 1;
                }

                .content_sec_2 h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #222;
                    margin-bottom: 1.5rem;
                }

                .content_sec_2 h5 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 0.75rem;
                }

                .content_sec_2 p {
                    font-size: 1.15rem;
                    color: #555;
                    line-height: 1.6;
                }

                .feature-item {
                    padding-left: 0;
                    position: relative;
                }

                @media (max-width: 1200px) {
                    .content_sec_2 h2 {
                        font-size: 2.25rem;
                    }

                    .content_sec_2 h5 {
                        font-size: 1.2rem;
                    }
                }

                @media (max-width: 992px) {
                    #serviceSec2 {
                        margin-bottom: 60px;
                    }

                    .content_sec_2 h2 {
                        font-size: 2rem;
                    }

                    .content_sec_2 h5 {
                        font-size: 1.15rem;
                    }

                    .content_sec_2 p {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 767px) {
                    #serviceSec2 {
                        margin-bottom: 50px;
                        margin-top: 20px;
                    }

                    .content_sec_2 h2 {
                        font-size: 1.75rem;
                        margin-top: 1.5rem;
                    }

                    .content_sec_2 h5 {
                        font-size: 1.1rem;
                    }

                    .content_sec_2 p {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 576px) {
                    .content_sec_2 h2 {
                        font-size: 1.5rem;
                    }

                    .content_sec_2 h5 {
                        font-size: 1.05rem;
                    }
                }

                @media (max-width: 375px) {
                    .content_sec_2 h2 {
                        font-size: 1.35rem;
                    }
                }
                `}
            </style>
        </section>
    );
};
export default Section2;