import  Home3 from "../Images/Home3.png";
import  Home4 from "../Images/Home4.png";
import  Home5 from "../Images/Home5.png";
import  Home6 from "../Images/Home6.png";
import  Home7 from "../Images/Home7.png";


const Section3 = () => {
  return (
    <section id="homeSec3" className="container mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="content_sec_3">
            <h2 className="text-center">
              A Modern Way to Build and Scale Your GPU Cloud
            </h2>
            <p className="text-center ">
              Accelerate your cloud business with a single-agent solution that
              simplifies operations, lowers costs, and delivers flexible,
              on-demand GPU (and CPU) capabilities—without the steep learning
              curve of legacy platforms.
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex mt-20 mrgn_btm">
      <div className="col-12 col-sm-12 col-md-4 postItem">
          <div className="content_sec_3">
            <img
              className=" text-center img1"
              src={Home3}
              alt="GPU Cloud Strategy"
            />
            <h5 className="text-center">
              Zero-Capex Regional
              <br />
              Deployments
            </h5>
            <p className="text-center">
              Eliminate the usual upfront hardware and deployment costs. Our
              platform lets you roll out a complete cloud region by simply
              installing an agent on each server—and if you need an on-prem
              solution for strict data compliance, we can provide that too.
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 postItem">
          <div className="content_sec_3">
            <img
              className=" text-center img1"
              // src="./images/sec_3_2.png"
              src={Home4}
              alt="GPU Cloud Strategy"
            />
            <h5 className="text-center">Unified Workload Scheduling</h5>
            <p className="text-center">
              Host both virtual machines and containers on the same node,
              harnessing GPU or CPU resources as needed. Our integrated SDN
              ensures secure, seamless networking between instances, across
              regions.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 postItem">
          <div className="content_sec_3">
            <img
              className=" text-center img1"
             src={Home5}
              // src="./images/sec_3_3.png"
              alt="GPU Cloud Strategy"
            />
            <h5 className="text-center">Flexible, Transparent Pricing</h5>
            <p className="text-center">
              With a low per-server, per-month subscription, you only pay for
              what you actually use. There’s no minimum, no maximum, and no
              lock-in contracts.
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex mt-20">
      <div className="col-12 col-sm-12 col-md-6 postItem">
          <div className="content_sec_3">
            <img
              className=" text-center img1"
              // src="./images/sec_3_4.png"
             src={Home6}

              alt="GPU Cloud Strategy"
            />
            <h5 className="text-center">
              Enterprise-Grade Consulting & Support
            </h5>
            <p className="text-center">
              Our highly experienced team offers professional services,
              deployment support, and ongoing consulting. Whether you’re
              expanding a data center or spinning up a brand-new site, we’re
              here to help.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 postItem">
          <div className="content_sec_3">
            <img
              className=" text-center img1"
              // src="./images/sec_3_5.png"
             src={Home7}
              alt="GPU Cloud Strategy"
            />
            <h5 className="text-center">Secure Data Handling</h5>
            <p className="text-center">
              Choose cloud-hosted or self-hosted control planes based on your
              compliance needs. In both cases, all traffic is end-to-end
              encrypted, ensuring your data is protected at every stage. For
              data-sensitive workloads, our self-hosted option ensures no
              information ever leaves your premises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
