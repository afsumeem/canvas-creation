import React from 'react';
import './Header.css';
import logo from '../../logo.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const activeStyle = {
        backgroundColor: 'black',
        borderRadius: '5px',
        margin: '5px'
    };

    return (

        // Header section
        <div className="container=fluid" >
            <div className="h-25">

                {/* navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-75 fixed-top">
                    <div className="container-fluid">
                        <img className="logo" src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item mx-2 ">
                                    <NavLink className="nav-link menu-item fs-5 text-white " activeStyle={activeStyle} to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link menu-item fs-5 text-white" activeStyle={activeStyle} to="/about">About us</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link menu-item fs-5 text-white" activeStyle={activeStyle} to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link menu-item fs-5 text-white" activeStyle={activeStyle} to="/contact">Contact us</NavLink>
                                </li>
                            </ul>

                            {/* search bar */}
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Link to="*" className="btn btn-outline-primary" type="submit">Search</Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div >
        </div >

    );
};

export default Header;