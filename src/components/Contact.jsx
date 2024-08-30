import React from 'react';
import './Contact.css'; // Assuming you have Contact-specific styles

const Contact = () => {
    return (
        <div className="main-contact" id="contact">
            <h2 className="contact-heading">Contact Us</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
