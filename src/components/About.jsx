import React from 'react';
import './About.css'; // Assuming you have About-specific styles
import aboutUsImage from '../assets/images/about1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div className="main-about" id="about">
            <h2 className="about-heading">About Us</h2>
            <FontAwesomeIcon icon="fa-solid fa-house" id="font"/>
            <div className="inner-main-about">
                <div className="about-inner-content-left">
                    <img src={aboutUsImage} alt="About Us" />
                </div>
                <div className="about-inner-content">
                    <div className="about-right-content">
                        <h2>
                            We're setting standards in research <br /> what's more, clinical care.
                        </h2>
                        <p>
                            We provide the most comprehensive medical services so every person can receive
                            qualitative medical help.
                        </p>
                        <p className="aboutsec-content">
                            Our clinic has grown to provide a world-class facility for the treatment of tooth loss,
                            dental cosmetics, and advanced restorative dentistry. We are among the most qualified
                            implant providers in Australia with over 30 years of quality training and experience.
                        </p>
                        <button className="aboutbtn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
