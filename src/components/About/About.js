import React from 'react';
import './About.css';
import image from '../../img/img-4.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-us">
            <div className="container  border border-light border-5 p-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-50" src={image} alt="" />
                    </div>
                    <div className="col-md-6 text-start">
                        <h2 className="font-monospace">About us</h2>
                        <hr className="w-25" />
                        <p className="mt-4 text-secondary">The Art School is a dynamic active art center with more than 5,000 annual enrollments in our eleven creative studio areas. Faculty and students of all ages and levels find a place where they can share their enthusiasm for the visual arts and process of making art, learn new skills, experiment, and grow in their creativity and talents. The school offers courses in ceramics, sculpture, painting, textiles, multimedia, photography, ikebana, and jewelry design among other creative endeavors.</p>
                        <Link className="btn btn-primary mt-5 w-100 p-2" to="/contact">Contact us</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;