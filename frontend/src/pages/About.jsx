import React from 'react';
import NavBar from '../components/Navbar';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about-page">
            <NavBar />
            <div className="about-content">
                <h1>About Page</h1>
                <p>This is the about page.</p>
            </div>
        </div>
    );
}

export default About;