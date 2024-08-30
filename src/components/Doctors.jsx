import React from 'react';
import './Doctors.css'; // Assuming you have Doctors-specific styles
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

const Doctors = () => {
    return (
        
        <div className="main-doctors">
            <div className="doctors-heading">
                <h2>Our Specialized Doctors</h2>
            </div>

            <div className="main-inner-doctor">
                <div className="doc-poster">
                    <img src={team1} alt="team1" />

                    <div className="doc-details">
                        <h2>Mr Joe</h2>
                    </div>

                </div>

                <div className="doc-poster">
                    <img src={ team2 } alt="team2" />
                    <div className="doc-details">
                        <h2>Mr Joe</h2>
                    </div>
                </div>

                <div className="doc-poster">
                    <img src={ team3 } alt="team" />
                    <div className="doc-details">
                        <h2>Mr Joe</h2>
                    </div>
                </div>

                
            </div>

        </div>

    );
};

export default Doctors;
