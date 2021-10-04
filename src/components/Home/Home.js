import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import image from '../../img/img13.jpg';
import galleryImg3 from '../../img/img-3.jpg';
import galleryImg6 from '../../img/img-6.jpg';
import galleryImg7 from '../../img/img-7.jpg';
import galleryImg2 from '../../img/img-2.jpg';
import Service from '../Service/Service';


const Home = () => {

    // fetch data from json file
    const [services, setServices] = useState([])
    const slicedServices = services.slice(1, 5);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (

        // home section
        <div className="mb-5">
            <div className="banner">
                <div className="banner-text">
                    < h1 className="fw-bolder text-white" > Canvas Creations</h1 >
                    <br />
                    <button className="btn btn-primary button">Learn More</button>
                </div >
            </div>

            {/* enroll section */}
            <div className="row bg-primary bg-opacity-25">
                <div className="col-md-3">
                    <img src={image} className="img-fluid rounded-circle h-75 mt-4" alt="" />
                </div>

                <div className="col-md-5 text-start mt-5">
                    <h3>Enroll a Student</h3>
                    <p className="text-secondary">At the bachelor's degree level, students can choose drawing and painting as a concentration within a broader art major.</p>
                </div>

                <div className="col-md-3 mt-5">
                    <Link to="/contact" className="btn border border-2 border-primary rounded-pill mt-4"> CONTACT US</Link>
                </div>
            </div>

            {/* service section */}
            <div className="mt-5 container">
                <h2 className="fw-bolder text-start font-monospace">Our Services</h2>

                <div className="service-container mt-5">

                    {
                        slicedServices.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
                <Link className="mt-5 mx-auto btn btn-primary w-50" to="/services">More Services</Link>
            </div>

            {/* gallery section */}
            <div className="container mt-5">
                <h2 className="my-5 text-start fw-bolder font-monospace">Gallery</h2>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mt-5">
                                <img className="img-fluid" src={galleryImg6} alt="" />
                            </div>
                            <br />
                            <div>
                                <img className="img-fluid" src={galleryImg7} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid" src={galleryImg3} alt="" />
                        </div>
                        <div className="col-md-3">
                            <div className="mt-5">
                                <img className="img-fluid" src={galleryImg6} alt="" />
                            </div>
                            <br />
                            <div>
                                <img className="img-fluid" src={galleryImg7} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid" src={galleryImg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
