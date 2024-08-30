import React from 'react';
import './Technology.css'; // Assuming you have Technology-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Technology = () => {
    return (
        <div className="technology" id="technology">
            <div className="main-technology">
                <div className="inner-technology">
                    <span></span>
                    {/* <i className="fi fi-tr-hands-heart"></i> */}
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                    <h2>Quality & Safety</h2>
                    <p>Our Delmont hospital utilizes state-of-the-art technology...</p>
                </div>
                <div className="inner-technology">
                    <span></span>
                    <i className="fi fi-rr-doctor"></i>
                    <h2>Quality & Safety</h2>
                    <p>Our Delmont hospital utilizes state-of-the-art technology...</p>
                </div>
                <div className="inner-technology">
                    <span></span>
                    <i className="fi fi-tr-user-md"></i>
                    <h2>Quality & Safety</h2>
                    <p>Our Delmont hospital utilizes state-of-the-art technology...</p>
                </div>
            </div>
        </div>
    );
};

export default Technology;
