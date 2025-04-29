import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section7 = () => {
    return(
        <section id="featureSec4_5" className="container-fluid py-5 mt-4 mt-md-5">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className='content_sec_4'>
                            <div className="security_en">
                                <h2
                                    className='text-center'
                                    {...ANIMATION_PRESETS.FADE_DOWN}
                                    data-aos-delay="100"
                                >
                                    Security & Encryption
                                </h2>
                                <p
                                    className='text-center'
                                    {...ANIMATION_PRESETS.FADE_UP}
                                    data-aos-delay="200"
                                >
                                    Choose cloud-hosted or self-hosted control planes, both with full end-to-end encryption. Only configuration data flows over the network; your actual datasets and VM contents remain private.
                                </p>
                            </div>
                            <div className="row d-flex mt-3 mt-md-5">
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <div
                                        className='content_sec_4_1 p-4 bg-white h-100'
                                        {...ANIMATION_PRESETS.FADE_UP}
                                        data-aos-delay="300"
                                    >
                                        <img src="./images/icon_45_1.png" alt="AI & Machine Learning" className="mb-3" />
                                        <h6>AI & Machine Learning</h6>
                                        <p>
                                            Schedule GPU training jobs and CPU-based preprocessing with ease.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <div
                                        className='content_sec_4_1 p-4 bg-white h-100'
                                        {...ANIMATION_PRESETS.FADE_UP}
                                        data-aos-delay="400"
                                    >
                                        <img src="./images/icon_45_4.png" alt="Cloud Gaming" className="mb-3" />
                                        <h6>Cloud Gaming</h6>
                                        <p>
                                            Low-latency VMs and containers for gaming workloads with cross-region networking.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <div
                                        className='content_sec_4_1 p-4 bg-white h-100'
                                        {...ANIMATION_PRESETS.FADE_UP}
                                        data-aos-delay="500"
                                    >
                                        <img src="./images/icon_45_3.png" alt="Visual Effects & Rendering" className="mb-3" />
                                        <h6>Visual Effects & Rendering</h6>
                                        <p>
                                            Burst to additional on-demand GPU capacity for complex render farms.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <div
                                        className='content_sec_4_1 p-4 bg-white h-100'
                                        {...ANIMATION_PRESETS.FADE_UP}
                                        data-aos-delay="600"
                                    >
                                        <img src="./images/icon_45_2.png" alt="Edge Computing" className="mb-3" />
                                        <h6>Edge Computing</h6>
                                        <p>
                                            Lightweight agents in remote devices, managed from a single console.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section7;