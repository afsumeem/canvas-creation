import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign, } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {

    //destructuring props
    const { picture, name, time, price, description } = props.service;

    //font awesome icon
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const dollerIcon = <FontAwesomeIcon icon={faDollarSign} />

    return (

        //service
        <div className="card-group service-cards">
            <div className="card">
                <img src={picture} className="card-img-top" alt="Paint" />
                <div className="card-body">
                    <h5 className="card-title text-start mb-3">{name}</h5>
                    <p className="card-text text-start">{clockIcon} {time}</p>
                    <p className="card-text text-start fs-3">{dollerIcon} {price}</p>
                    <p className="card-text text-start">{description}</p>
                </div>

                {/* apply now button */}
                <div className="card-footer bg-primary bg-opacity-10">
                    <button className="btn w-100 fw-bolder">APPLY NOW</button>
                </div>
            </div>
        </div>

    );
};

export default Service;