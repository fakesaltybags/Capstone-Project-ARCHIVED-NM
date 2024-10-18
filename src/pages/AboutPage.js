import React from 'react';
import '../styles/AboutPage.css';
import Header from '../components/Header';

const AboutPage = () => {
    return (
        <div className="about-container">
            <Header />
            <h1 className="about-title">About This Project</h1>
            <p className="about-text">
                This is a work in progress. The project aims to provide a platform for showcasing various features, including project management, a code editor, and user profiles.
            </p>
            <p className="about-text">
                Stay tuned for updates as more features will be added in the future!
            </p>
        </div>
    );
};

export default AboutPage;
