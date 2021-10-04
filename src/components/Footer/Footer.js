import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (

        // footer section
        <div className="bg-dark text-white m-0 p-0">
            <div>

                {/* Brand icon */}
                <div className="fs-3">
                    <FontAwesomeIcon className="text-primary me-3 mt-5" icon={faFacebook} />
                    <FontAwesomeIcon className="text-info me-3" icon={faTwitter} />
                    <FontAwesomeIcon className="text-danger me-3" icon={faYoutube} />
                    <FontAwesomeIcon className="text-danger" icon={faInstagram} />
                </div>

                {/* menu and other options */}
                <div className="d-flex justify-content-center mt-3 fs-6">
                    <Link className="text-decoration-none me-4 text-secondary" to="/about">About</Link>
                    <Link className="text-decoration-none me-4 text-secondary" to="/about">Need Help?</Link>
                    <Link className="text-decoration-none me-4 text-secondary" to="/about">Privacy</Link>
                    <Link className="text-decoration-none me-4 text-secondary" to="/contact">FAQ?</Link>
                    <Link className="text-decoration-none me-4 text-secondary" to="/contact">Terms of use</Link>
                    <Link className="text-decoration-none text-secondary" to="/service">Advertising</Link>
                </div>

                {/* subscription section */}
                <div className="mt-4">
                    <h5>Subscription</h5>
                    <div className="input-group mb-3 w-50 mx-auto">
                        <input type="text" className="form-control" placeholder="Your Email" aria-describedby="basic-addon2" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
                <p>&copy; Canvas Creation, 2021</p>
            </div>
        </div>
    );
};

export default Footer;