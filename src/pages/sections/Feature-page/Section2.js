import Feature1 from "../Images/Feature1.png";
import { useState, useEffect } from 'react';
import { ANIMATION_PRESETS } from '../../../utils/AnimationUtils';

const Section2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      // Function to check if viewport is mobile size
      const checkMobile = () => {
          setIsMobile(window.innerWidth < 992);
      };

      // Initial check
      checkMobile();

      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);

      // Clean up event listener
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="featureSec2" className={`container mt-5 ${isMobile ? 'mobile-view' : ''}`}>
      <div className="row">
        <div className="col-12">
          <div className="content_sec_2">
            <h2
              className="text-center"
              {...ANIMATION_PRESETS.FADE_DOWN}
              data-aos-delay="100"
            >
              Single-Agent, Multi-Cloud Simplicity
            </h2>
            <p
              className="text-center px-md-3"
              {...ANIMATION_PRESETS.FADE_UP}
              data-aos-delay="200"
            >
              Most legacy orchestration platforms require multiple
              interdependent services deployed per region. Our solution
              consolidates all essential control services into a single agent
              you deploy on your hardware. For additional security and control,
              you can also host the entire control plane in your datacenter.
            </p>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center mt-4 mt-md-5">
        <div className="col-12 col-md-6 order-2 order-md-1 mt-4 mt-md-0">
          <div
            className="row"
            {...ANIMATION_PRESETS.FADE_RIGHT}
            data-aos-delay="300"
          >
            <div className="col-12 mb-4">
              <h5>Easy Installation</h5>
              <p>
                Deploy our single binary on any host—laptop, server, or a
                massive GPU cluster.
              </p>
            </div>
          </div>
          <div
            className="row"
            {...ANIMATION_PRESETS.FADE_RIGHT}
            data-aos-delay="400"
          >
            <div className="col-12 mb-4">
              <h5>Instant Enrollment</h5>
              <p>
                In a cloud-hosted setup, the agent auto-registers with our
                management cloud. For self-hosted deployments, it connects
                securely to your on-prem control plane.
              </p>
            </div>
          </div>
          <div
            className="row"
            {...ANIMATION_PRESETS.FADE_RIGHT}
            data-aos-delay="500"
          >
            <div className="col-12">
              <h5>Reduced Operational Overhead</h5>
              <p>
                Minimal infrastructure means fewer potential failure points and
                less time spent on maintenance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 text-center">
          <img
            src={Feature1}
            className="img-fluid"
            alt="feature 3"
            {...ANIMATION_PRESETS.FADE_LEFT}
            data-aos-delay="300"
          />
        </div>
      </div>

      <style>
        {`
        #featureSec2 {
          margin-bottom: 100px;
          position: relative;
          z-index: 1;
          margin-top: 30px;
        }

        .content_sec_2 {
          max-width: 950px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .content_sec_2 h2 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #222;
          margin-bottom: 1.5rem;
        }

        .content_sec_2 p {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.6;
        }

        .content_sec_2 img {
          width: 85%;
          display: block;
          height: auto;
          margin: 0 auto;
        }

        @media (max-width: 1200px) {
          .content_sec_2 h2 {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 992px) {
          #featureSec2 {
            margin-bottom: 70px;
          }

          .content_sec_2 h2 {
            font-size: 2rem;
          }

          .content_sec_2 p {
            font-size: 1.1rem;
          }

          .content_sec_2 img {
            width: 90%;
          }
        }

        @media (max-width: 767px) {
          #featureSec2 {
            margin-bottom: 50px;
          }

          .content_sec_2 h2 {
            font-size: 1.75rem;
          }

          .content_sec_2 p {
            font-size: 1rem;
          }

          .content_sec_2 img {
            width: 100%;
            margin-bottom: 20px;
          }

          .mt-100 {
            margin-top: 2rem !important;
          }
        }

        @media (max-width: 576px) {
          .content_sec_2 h2 {
            font-size: 1.5rem;
            padding: 0 10px;
          }

          h5 {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 375px) {
          .content_sec_2 h2 {
            font-size: 1.35rem;
          }
        }
        `}
      </style>
    </section>
  );
};
export default Section2;
