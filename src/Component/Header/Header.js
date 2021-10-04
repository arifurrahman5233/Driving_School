import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    {/* <img className="rounded-circle" src={logo} alt="" /> */}
                    <h1 className="text-success fw-bolder text-light">DRIVING SCHOOL</h1>
                    <div className="">
                        <div className="text-light fw-bold d-flex justify-content-around">
                            <Link className="text-decoration-none px-2 text-white" to="/home">Home</Link>
                            <Link className="text-decoration-none px-2 text-white" to="/about">About</Link>
                            <Link className="text-decoration-none px-2 text-white" to="/services">Services</Link>
                            <Link className="text-decoration-none px-2 text-white" to="/career">Career</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;