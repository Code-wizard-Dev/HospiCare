import React from 'react';
import './Home.css'; // Assuming you have Home-specific styles
import homeImage from "../assets/images/hero2.png";

const Home = () => {
    return (
        <div className="main-home" id="home">
            <div className="home">
                <div className="home-left-content">
                    <span>Welcome to HospiCare</span>
                    <h2>Your Health, Our Priority</h2>
                    <p>Providing high-quality health care services...</p>
                    <div className="home-btn">
                        <a href="#about">Learn More</a>
                        <a href="#contact" className="homebtnsec">Contact Us</a>
                    </div>
                </div>
                <div className="home-right-content">
                    <img src={homeImage} alt="homeImage"></img>
                </div>
            </div>
        </div>
    );
};

export default Home;
