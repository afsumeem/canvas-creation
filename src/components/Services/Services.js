import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

//fetch data from json file
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (

        //Our service section
        <div className="services mb-5">
            <div className="container">
                <h1 className="text-start font-monospace mt-5 fw-bold ">Our Services</h1>
                <div className="service-container mt-5">

                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;