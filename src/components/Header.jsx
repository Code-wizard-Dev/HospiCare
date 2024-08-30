import React from 'react';
import './Header.css'; // Assuming you have Header-specific styles
import logo from "../assets/images/logo3.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
            <Link to="/"><img src={logo} alt="HospiCare Logo" /></Link>
            </div>
            <nav className="navbar">
               
                <Link to="/allDesease">All Diseases</Link>
                <Link to="/aboutPage">About Us</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <div className="right-icons">
                <button className="btn">Dr. Login</button>
                <button className="btn">Patient Login</button>
            </div>
        </header>
    );
};

export default Header;
