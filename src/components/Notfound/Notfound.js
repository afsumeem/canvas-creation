import React from 'react';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="not-found">
            <h1 className="text-bolder">OOPS!</h1>
            <h3 className="m-3">ERROR 404: Page Not Found!</h3>
            <p className="fs-5 text-secondary">Looks like something went completely Wrong!</p>
        </div>
    );
};

export default Notfound;
