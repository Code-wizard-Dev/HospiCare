import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="about-header">
                <h1>About HospiCare</h1>
                <p>Empowering Healthcare with Technology</p>
            </section>

            <section className="mission-vision">
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>To improve patient care and streamline communication between doctors and patients through innovative technology.</p>
                </div>
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>To become the leading healthcare solution provider, recognized globally for transforming the healthcare experience.</p>
                </div>
            </section>

            <section className="key-features">
                <h2>Key Features</h2>
                <ul>
                    <li>Appointment Booking</li>
                    <li>Doctor and Patient Portals</li>
                    <li>Report Management</li>
                    <li>Disease Specialization</li>
                </ul>
            </section>

            <section className="history">
                <h2>Our Story</h2>
                <p>HospiCare was founded in [Year] with the goal of making healthcare more accessible and efficient...</p>
            </section>

            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <blockquote>
                    "HospiCare has transformed the way we manage patient care. It’s intuitive, reliable, and secure." - Dr. Smith
                </blockquote>
            </section>

            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <img src="team-member.jpg" alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                {/* Add more team members as needed */}
            </section>

            <section className="contact-cta">
                <h2>Get in Touch</h2>
                <p>Want to learn more about HospiCare? Contact us today!</p>
                <a href="/contact" className="cta-button">Contact Us</a>
            </section>
        </div>
    );
};

export default AboutPage;
