import Service3 from "../Images/Service2.png";
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section4 = () => {
    return(
        <section id="featureSec4_1" className='container mt-100'>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <h2
                                className="font-40"
                                {...ANIMATION_PRESETS.FADE_RIGHT}
                                data-aos-delay="100"
                            >
                                Seamless Integration & <br/>Migration
                            </h2>
                        </div>
                    </div>

                    <div
                        className='row mt-3'
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="200"
                    >
                        <div className='col col-md-12 dev_sec1'>
                            <h5>Coexists with Legacy Systems</h5>
                            <p>Migrate at your own pace without disrupting active workloads.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="300"
                    >
                        <div className='col col-md-12 dev_sec1'>
                            <h5>Supports Hybrid Deployments</h5>
                            <p>Combine your hardware with public cloud resources, all managed through a single console.</p>
                        </div>
                    </div>
                    <div
                        className='row'
                        {...ANIMATION_PRESETS.FADE_RIGHT}
                        data-aos-delay="400"
                    >
                        <div className='col col-md-12 dev_sec1'>
                            <h5>Facilitates Gradual Adoption</h5>
                            <p>Start with a pilot project, then scale with confidence.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img
                        src={Service3}
                        width=""
                        alt="feature 3"
                        {...ANIMATION_PRESETS.FADE_LEFT}
                        data-aos-delay="100"
                    />
                </div>
            </div>
        </section>
    );
};
export default Section4;