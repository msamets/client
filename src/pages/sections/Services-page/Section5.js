import  Service4 from "../Images/Service4.png";

const Section5 = () => {
    return(
        <section id="featureSec4_2" className="container-fluid pt-5 pb-5 mt-100">  
         <div className='container'>         
            <div className="row">
         <div className="col-md-6">
                <img src={Service4} alt="feature 3" />
                </div>
            <div className="col-md-6">
                <h3 className="font-40">Meeting Data Sovereignty & Compliance Needs</h3>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Your Data Never Leaves the Datacenter</h5>
                        <p>For self-hosted deployments, the entire control plane resides on-prem.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Compliance Simplified</h5>
                        <p>Aligns with strict regulatory standards around data privacy.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Ongoing Updates & Support</h5>
                        <p>We provide dedicated guidance to keep your on-prem control plane up to date.</p>
                    </div>
                </div>
              
         </div>
        
         </div>
         </div>
         </section>
    );
};
export default Section5;