import Feature4 from "../Images/Feature4.png";
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section6 = () => {
    return(
        <section id="featureSec4_3" className="container py-5 mt-4 mt-md-5">
            <div className="row">
                <div className="col-12">
                    <div className='content_sec_2'>
                        <h2
                            className='text-center'
                            {...ANIMATION_PRESETS.FADE_DOWN}
                            data-aos-delay="100"
                        >
                            Simple, Predictable Pricing
                        </h2>
                        <p
                            className='text-center featureSec4_3_p px-3'
                            {...ANIMATION_PRESETS.FADE_UP}
                            data-aos-delay="200"
                        >
                            Straightforward, transparent billing
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center mt-4">
                <div className="col-12 col-md-7 order-2 order-md-1">
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="300"
                    >
                        <div className='col-12 mb-4'>
                            <h5>Per-System/Server, Per-Month</h5>
                            <p>No hidden fees, no giant annual commitments.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="400"
                    >
                        <div className='col-12 mb-4'>
                            <h5>Scale at Your Pace</h5>
                            <p>Launch a single server or thousands of GPU hosts—pay only for what's deployed.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="500"
                    >
                        <div className='col-12'>
                            <h5>No Contract Lock-Ins</h5>
                            <p>Cancel anytime; upgrade or downgrade as needed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 order-1 order-md-2 mb-4 mb-md-0 text-center">
                    <img
                        src={Feature4}
                        className="img-fluid"
                        alt="Predictable Pricing"
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="200"
                    />
                </div>
            </div>
        </section>
    );
};
export default Section6;