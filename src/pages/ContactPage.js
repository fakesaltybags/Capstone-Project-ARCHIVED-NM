import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-text">
                Feel free to reach out if you have any questions or comments regarding the project!
            </p>
            <p className="contact-text">
                You can contact me via email at: <a href="mailto:fakesaltybags@gmail.com">fakesaltybags@gmail.com</a>
            </p>
            <p className="contact-text">
                Remember this is all a work in progress and everything will be updating quickly!
            </p>
        </div>
    );
};

export default ContactPage;
