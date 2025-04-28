const Section5 = () => {
    return(
        <section id="featureSec4_2" className="container-fluid py-5 mt-4 mt-md-5">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className='content_sec_4'>
                            <h2 className='text-center'>Monetization Templates</h2>
                            <p className='text-center monetization_p px-3'>We make it simple to turn your GPU infrastructure into revenue:</p>
                            <div className="row d-flex mt-3 mt-md-5">
                                <div className="col-12 col-sm-6 col-md-4 mb-4">
                                    <div className='content_sec_4_2 bg-white h-100'>
                                        <h6 className='text-center pt-4'>Marketplace Deployments</h6>
                                        <p className='text-center px-3'>
                                            Prebuilt templates let you offer 1 GPU or entire GPU clusters on popular platforms such as RunPod, Shadeform, and Vast.ai.
                                        </p>
                                        <div className="text-center">
                                            <img src="./images/sec_3_1.png" alt="Marketplace Deployments" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 mb-4">
                                    <div className='content_sec_4_2 bg-white h-100'>
                                        <h6 className='text-center pt-4'>LLM Inference Endpoints</h6>
                                        <p className='text-center px-3'>
                                            Launch ready-to-use endpoints for models like DeepSeek, Qwen, LLaMA, and more. These can be consumed directly or integrated into LLM aggregators (e.g., OpenRouter.ai).
                                        </p>
                                        <div className="text-center">
                                            <img src="./images/sec_3_1.png" alt="LLM Inference Endpoints" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 mb-4">
                                    <div className='content_sec_4_2 bg-white h-100'>
                                        <h6 className='text-center pt-4'>Easy Configuration</h6>
                                        <p className='text-center px-3'>
                                            Simple wizards and step-by-step guidance ensure monetizing your GPU power is straightforward—even if you're new to these marketplaces.
                                        </p>
                                        <div className="text-center">
                                            <img src="./images/sec_3_1.png" alt="Easy Configuration" className="img-fluid" />
                                        </div>
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