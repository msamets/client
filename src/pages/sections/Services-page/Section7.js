
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import  Service6 from "../Images/Service6.png";
import  Service5 from "../Images/Service5.png";
import  Service4 from "../Images/Service4.png";
import  Service3 from "../Images/Service2.png";


const Section7 = () => {
    return(
          <section id="featureSec4_5" className="container-fluid pt-5 pb-5 mt-100">  
         <div className='container'> 
         <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div className="row">
         <div className="col-md-6">
                <img src={Service6} alt="feature 3" />
                </div>
            <div className="col-md-6">
                <h3 className='font-40'>Meeting Data Sovereignty & Compliance Needs</h3>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Your Data Never Leaves the Datacenter</h5>
                        <p>For self-hosted deployments, the entire control plane resides on-prem.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Compliance Simplified</h5>
                        <p>Aligns with strict regulatory standards around data privacy.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Ongoing Updates & Support</h5>
                        <p>We provide dedicated guidance to keep your on-prem control plane up to date.</p>
                    </div>
                </div>
              
         </div>
        
                </div></SwiperSlide>
      <SwiperSlide><div className="row">
         <div className="col-md-6">
                <img src={Service5} alt="feature 3" />
                </div>
            <div className="col-md-6">
                <h3 className='font-40'>Meeting Data Sovereignty & Compliance Needs 1</h3>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Your Data Never Leaves the Datacenter</h5>
                        <p>For self-hosted deployments, the entire control plane resides on-prem.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Compliance Simplified</h5>
                        <p>Aligns with strict regulatory standards around data privacy.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Ongoing Updates & Support</h5>
                        <p>We provide dedicated guidance to keep your on-prem control plane up to date.</p>
                    </div>
                </div>
              
         </div>
        
                </div></SwiperSlide>
      <SwiperSlide><div className="row">
         <div className="col-md-6">
                <img src={Service3} alt="feature 3" />
                </div>
            <div className="col-md-6">
                <h3 className='font-40'>Meeting Data Sovereignty & Compliance Needs 2</h3>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Your Data Never Leaves the Datacenter</h5>
                        <p>For self-hosted deployments, the entire control plane resides on-prem.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Compliance Simplified</h5>
                        <p>Aligns with strict regulatory standards around data privacy.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Ongoing Updates & Support</h5>
                        <p>We provide dedicated guidance to keep your on-prem control plane up to date.</p>
                    </div>
                </div>
              
         </div>
        
                </div></SwiperSlide>
      <SwiperSlide><div className="row">
         <div className="col-md-6">
                <img src={Service4} alt="feature 3" />
                </div>
            <div className="col-md-6">
                <h3 className='font-40'>Meeting Data Sovereignty & Compliance Needs 3</h3>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Your Data Never Leaves the Datacenter</h5>
                        <p>For self-hosted deployments, the entire control plane resides on-prem.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Compliance Simplified</h5>
                        <p>Aligns with strict regulatory standards around data privacy.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12'>
                        <h5>Ongoing Updates & Support</h5>
                        <p>We provide dedicated guidance to keep your on-prem control plane up to date.</p>
                    </div>
                </div>
              
         </div>
        
                </div></SwiperSlide>
    </Swiper>
           
                    
           
         </div>
         </section>
    );
};
export default Section7;