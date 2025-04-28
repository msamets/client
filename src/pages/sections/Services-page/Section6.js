import  Service5 from "../Images/Service5.png";

const Section6 = () => {
    return(
        <section id="featureSec4_3" className="container mt-5">
         <div className="row">
            <div className="col-md-6">
            <div className="row">
            <div className="col-md-12">
         <h2 className="font-40">Technical Data & Requirements</h2>
         <p>Our orchestrator is designed for Linux-based environments and leverages cutting-edge technologies to ensure performance, flexibility, and security:</p>
            </div>
                    </div>

                <div className='row mt-3'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Base OS</h5>
                        <p>Tested on major Linux distributions (Ubuntu, Debian, CentOS, etc.)</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Supported Workloads</h5>
                        <p>Orchestrates Docker containers and QEMU/Cloud-Hypervisor-based VMs</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Networking</h5>
                        <ul><li>
                        Uses VXLAN encapsulation with hardware offloading via Open vSwitch
                        Network ACLs enforced via OpenFlow rules, capable of wire-speed performance on supported NICs (e.g., Mellanox, Intel)
                        </li></ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Storage Backend</h5>
                        <p>Typically provisioned via Ceph, though other distributed or local storage solutions may be supported.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-12 dev_sec1'>
                        <h5>Bare Meta</h5>
                        <ul><li>
                        We do not currently orchestrate bare-metal operations (future plans). Pair with a hardware orchestrator like:
        <br/> Ubuntu MAAS
        <br/> Tinkerbell
                        </li></ul>
                    </div>
                </div>
         </div>
         <div className="col-md-6">
                <img src={Service5} width="" alt="feature 3" />
                </div>
         </div>
         </section> 
    );
};
export default Section6;