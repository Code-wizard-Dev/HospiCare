import React from 'react';
import './Footer.css'; // Assuming you have Footer-specific styles
import logo from "../assets/images/logo3.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <img src={logo} alt="Logo" className="bottom-logo" />
                </div>
                <div className="col">
                    <h3 className="footer-heading">Main
                        <div className="underline"><span></span></div>
                    </h3>
                    <ul className="footer-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="footer-heading">Resources
                        <div className="underline"><span></span></div>
                    </h3>
                    <ul className="footer-list">
                        <li><Link to="/description" className="footer-link">Description</Link></li>
                        <li><Link to="/support" className="footer-link">Support</Link></li>
                        <li><Link to="/blog" className="footer-link">Blog</Link></li>
                    </ul>
                </div>
                <div className="col" style={{ marginLeft: '1rem' }}>
                    <h3 className="footer-heading">Company
                        <div className="underline"><span></span></div>
                    </h3>
                    <ul className="footer-list">
                        <li><Link to="/about" className="footer-link">About</Link></li>
                        <li><Link to="/services" className="footer-link">Services</Link></li>
                        <li><Link to="/products" className="footer-link">Our Products</Link></li>
                        <li><Link to="/contacts" className="footer-link">Contacts</Link></li>
                    </ul>
                </div>
                <div className="col1">
                    <form>
                        <i className="fa-regular fa-envelope"></i>
                        <input type="email" className="email" placeholder="Enter Your Email.." required />
                        <i className="fa-solid fa-arrow-right"></i>
                    </form>
                    <div className="social-icons">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
