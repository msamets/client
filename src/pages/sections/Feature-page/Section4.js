import Feature2 from "../Images/Feature2.png";
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section4 = () => {
    return(
         <section id="featureSec4_1" className='container py-5 mt-4 mt-md-5'>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 order-2 order-md-1 mb-4 mb-md-0 text-center">
                    <img
                        src={Feature2}
                        className="img-fluid"
                        alt="Advanced Scheduling"
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="100"
                    />
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                    <h3
                        className="mb-3"
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="100"
                    >Advanced Scheduling & Resilience</h3>
                    <div
                        className='advance_text mb-4'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="200"
                    >
                        <p>Our platform orchestrates both GPU and CPU resources simultaneously. You can pin specific workloads to particular hosts, enable failover, and configure affinity/anti-affinity rules.</p>
                    </div>

                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="300"
                    >
                        <div className='col-12 mb-3'>
                            <h5>High Availability</h5>
                            <p>Automatic workload redistribution if a node fails.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="400"
                    >
                        <div className='col-12 mb-3'>
                            <h5>Optimal Resource Utilization</h5>
                            <p>Intelligent scheduling to fully leverage your existing hardware.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="500"
                    >
                        <div className='col-12'>
                            <h5>Scalability</h5>
                            <p>Add or remove servers or entire regions on the fly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section4;