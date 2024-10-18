import React from 'react';
import '../styles/HomePage.css';
import Header from '../components/Header';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <div className="content-container">
                <h1>Welcome to My Portfolio</h1>
                <p>This is the home page of my project portfolio.</p>

                {/* Demo Project Container (WIP) */}
                <div className="demo-project-container">
                    <h2>Demo Project (WIP)</h2>
                    <p>This section will showcase a demo project in the future.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
