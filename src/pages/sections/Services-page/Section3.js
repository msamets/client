import Service2 from "../Images/Service1.png";
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section3 = () => {
    return(
        <section id="featureSec4" className="container-fluid pt-5 pb-5 mt-100">
            <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={Service2}
                        alt="feature 3"
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="100"
                    />
                </div>
                <div className="col-md-6">
                    <h3
                        className="font-40"
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="100"
                    >Professional Services & Expert Support</h3>
                    <p
                        className="dev_sec1"
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="200"
                    >Whether you're deploying AI inferencing in containers or launching high-performance VMs for big data processing, our Software-Defined Network seamlessly connects workloads within and across regions.</p>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="300"
                    >
                        <div className='col col-md-12 dev_sec1'>
                            <h5>Architecture Consulting</h5>
                            <p>Expert advice on designing your GPU cloud for optimal performance.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="400"
                    >
                        <div className='col col-md-12 dev_sec1'>
                            <h5>On-Site or Remote Deployment Assistance</h5>
                            <p>Help installing and configuring the agent, integrating with existing systems, or assisting in migration from older platforms.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="500"
                    >
                        <div className='col col-md-12 dev_sec1'>
                            <h5>Training & Knowledge Transfer</h5>
                            <p>Best practices for deploying, managing, and troubleshooting.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="600"
                    >
                        <div className='col col-md-12'>
                            <h5>24/7 Technical Support</h5>
                            <p>Ongoing maintenance and support to keep your GPU cloud running smoothly.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </section>
    );
};
export default Section3;