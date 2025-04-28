import { Link } from "react-router-dom";
import Home8 from "../Images/Home8.png";
import { useState, useEffect } from 'react';

const Section8 = () => {
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
    <section id="serviceSec8" className={`container ${isMobile ? 'mobile-view' : ''}`}>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <div className="content_sec_5">
            <h2>Ready to Explore a More Modern Approach?</h2>
            <p>
              Contact Us to discuss how our platform can transform your GPU
              cloud strategy.
            </p>
            <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="reqDemoBtn"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && window.bootstrap) {
                  const modalElement = document.getElementById('exampleModal');
                  const modal = new window.bootstrap.Modal(modalElement);
                  modal.show();
                }
              }}
            >
              Request a demo
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <div className="content_sec_5">
            <img className="img-fluid" src={Home8} alt="GPU Cloud Strategy" />
          </div>
        </div>
      </div>

      <style>
        {`
        #serviceSec8 {
          background: #F4F8FC;
          padding: 80px 40px;
          border-radius: 10px;
          margin: 80px auto;
        }

        .content_sec_5 {
          max-width: 950px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .content_sec_5 h2 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #222;
          margin-bottom: 1.5rem;
        }

        .content_sec_5 p {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reqDemoBtn {
          display: inline-block;
          padding: 15px 35px;
          background-color: #7336ff;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(115, 54, 255, 0.25);
        }

        .reqDemoBtn:hover {
          background-color: #6026e3;
          transform: translateY(-3px);
          color: white;
          box-shadow: 0 6px 15px rgba(115, 54, 255, 0.35);
        }

        @media (max-width: 1200px) {
          #serviceSec8 {
            padding: 60px 30px;
          }

          .content_sec_5 h2 {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 992px) {
          #serviceSec8 {
            padding: 50px 25px;
          }

          .content_sec_5 h2 {
            font-size: 2rem;
          }

          .content_sec_5 p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 767px) {
          #serviceSec8 {
            padding: 40px 20px;
            margin: 40px auto;
          }

          .content_sec_5 h2 {
            font-size: 1.75rem;
          }

          .content_sec_5 p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .reqDemoBtn {
            padding: 14px 32px;
            font-size: 16px;
            width: 80%;
            max-width: 300px;
          }
        }

        @media (max-width: 576px) {
          #serviceSec8 {
            padding: 30px 15px;
            margin: 30px auto;
            border-radius: 8px;
          }

          .content_sec_5 h2 {
            font-size: 1.5rem;
          }

          .reqDemoBtn {
            padding: 13px 30px;
            font-size: 16px;
            width: 90%;
            max-width: 280px;
            margin-top: 10px;
          }
        }

        @media (max-width: 375px) {
          .content_sec_5 h2 {
            font-size: 1.35rem;
          }

          .reqDemoBtn {
            padding: 12px 25px;
            font-size: 15px;
            width: 95%;
            max-width: 260px;
          }
        }
        `}
      </style>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="inputFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    aria-describedby="firstNameHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    aria-describedby="lastNameHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    aria-describedby="phoneHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="inputMessage"
                    rows="3"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section8;
