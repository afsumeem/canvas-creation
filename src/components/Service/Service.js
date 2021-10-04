import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign, } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
    const { picture, name, time, price, description } = props.service;
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const dollerIcon = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div class="card-group service-cards">
            <div class="card">
                <img src={picture} class="card-img-top" alt="Paint" />
                <div class="card-body">
                    <h5 class="card-title text-start mb-3">{name}</h5>
                    <p class="card-text text-start">{clockIcon} {time}</p>
                    <p class="card-text text-start fs-3">{dollerIcon} {price}</p>
                    <p class="card-text text-start">{description}</p>
                </div>
                <div class="card-footer bg-primary bg-opacity-10 button">
                    <button className="btn w-100">Apply Now</button>
                </div>
            </div>
        </div>

    );
};

export default Service;