import { Link } from 'react-router-dom';
import Home8 from "../Images/Home8.png";

const Section5 = () => {
    return (
        <section id="homeSec5" className="container ">
            <div className="row d-flex mt-20">


                <div className="col-12 col-sm-12 col-md-7 mb-5">
                    <div className='content_sec_5'>
                        <h2>Ready to Explore a More Modern Approach?</h2>
                        <p>Contact Us to discuss how our platform can transform your GPU cloud strategy.</p>
                        <Link to="/" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" className="reqDemoBtn">Request a demo</Link>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5">
                    <div className='content_sec_5 mt-3'>
                        <img className="img1" src={Home8} alt="GPU Cloud Strategy" />
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                User Add Data
                            </h1>
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
                                    <label htmlFor="exampleInputFirst" className="form-label">
                                        FistName
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputFirst"
                                        aria-describedby="fistHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputLast" className="form-label">
                                        LastName
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputLast"
                                        aria-describedby="emailHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail"
                                        aria-describedby="emailHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPhone" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="exampleInputPhone"
                                        aria-describedby="phoneHelp"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputMessage" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="exampleInputMessage"
                                        className="form-control"
                                        placeholder="Enter text ..."
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
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default Section5;