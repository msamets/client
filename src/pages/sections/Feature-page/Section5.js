import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section5 = () => {
    return(
        <section id="featureSec4_2" className="container-fluid py-5 mt-4 mt-md-5">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className='content_sec_4'>
                            <h2
                                className='text-center'
                                {...ANIMATION_PRESETS.FADE_DOWN}
                                data-aos-delay="100"
                            >
                                Monetization Templates
                            </h2>
                            <p
                                className='text-center monetization_p'
                                {...ANIMATION_PRESETS.FADE_UP}
                                data-aos-delay="200"
                            >
                                We make it simple to turn your GPU infrastructure into revenue:
                            </p>
                            <div className="row d-flex mt-20">
                                <div className="col-12 col-sm-12 col-md-4 mb-3">
                                    <div
                                        className='content_sec_4_2 bg-white'
                                        {...ANIMATION_PRESETS.FADE_RIGHT}
                                        data-aos-delay="300"
                                    >
                                        <h6 className='text-center'>Marketplace Deployments</h6>
                                        <p className='text-center'>
                                            Prebuilt templates let you offer 1 GPU or entire GPU clusters on popular platforms such as RunPod, Shadeform, and Vast.ai.
                                        </p>
                                        <img src="./images/sec_3_1.png" alt="Marketplace Deployments" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 mb-3">
                                    <div
                                        className='content_sec_4_2 bg-white'
                                        {...ANIMATION_PRESETS.ZOOM_IN}
                                        data-aos-delay="400"
                                    >
                                        <h6 className='text-center'>LLM Inference Endpoints</h6>
                                        <p className='text-center'>
                                            Launch ready-to-use endpoints for models like DeepSeek, Qwen, LLaMA, and more. These can be consumed directly or integrated into LLM aggregators (e.g., OpenRouter.ai).
                                        </p>
                                        <img src="./images/sec_3_1.png" alt="LLM Inference Endpoints" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 mb-3">
                                    <div
                                        className='content_sec_4_2 bg-white'
                                        {...ANIMATION_PRESETS.FADE_LEFT}
                                        data-aos-delay="300"
                                    >
                                        <h6 className='text-center'>Easy Configuration</h6>
                                        <p className='text-center'>
                                            Simple wizards and step-by-step guidance ensure monetizing your GPU power is straightforward—even if you're new to these marketplaces.
                                        </p>
                                        <img src="./images/sec_3_1.png" alt="Easy Configuration" />
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
export default Section5;