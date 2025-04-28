const Section3 = () => {
    return(
         <section id="featureSec4" className="container-fluid py-5 mt-4 mt-md-5">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className='content_sec_4'>
                            <h2 className="text-center">Full SDN Integration for Containers & VMs</h2>
                            <div className="feature2">
                                <p className="text-center px-3">Whether you're deploying AI inferencing in containers or launching high-performance VMs for big data processing,
                                our Software-Defined Network seamlessly connects workloads within and across regions.</p>
                            </div>
                            <div className="row d-flex mt-3 mt-md-5">
                                <div className="col-12 col-sm-6 col-md-4 mb-4">
                                    <div className='content_sec_4_1 p-4 bg-white h-100'>
                                        <img src="./images/icon1.png" alt="feat-1" className="mb-3" />
                                        <h6>Consistent Network Fabric</h6>
                                        <p>
                                        Uniform security policies from development laptops to multi-thousand-node clusters.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 mb-4">
                                    <div className='content_sec_4_1 p-4 bg-white h-100'>
                                        <img src="./images/icon2.png" alt="feat-2" className="mb-3" />
                                        <h6>Flexible Workload Placement</h6>
                                        <p>
                                        Easily move instances without reconfiguring complex networking.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 mb-4">
                                    <div className='content_sec_4_1 p-4 bg-white h-100'>
                                        <img src="./images/icon3.png" alt="feat-3" className="mb-3" />
                                        <h6>Multi-Tenancy by Design</h6>
                                        <p>
                                        Built-in isolation and policy enforcement, enabling you to securely host multiple clients and projects.
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
export default Section3;