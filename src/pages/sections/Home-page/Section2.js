import Home2 from "../Images/home2.png";
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section2 = () => {
    return(
        <section id="homeSec2" className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                <div className='content_sec_2'>
                <img
                    className="text-center img1"
                    src={Home2}
                    alt="GPU Cloud Strategy"
                    {...ANIMATION_PRESETS.FADE_UP}
                    data-aos-delay="200"
                />
                </div>
            </div>
        </div>
         </section>
    );
};
export default Section2;