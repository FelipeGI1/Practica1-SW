import { useState } from 'react';
import '../styles/home.css';
import NavBar from '../components/Navbar';

const Home = () => {
    return (
        <div className="home-page">
            <h1 className="home-title">
              <span>Reconocimiento de</span>
              <span>Veredas con <span className="highlight">DeepLearning</span></span>
            </h1>
            {/* Tu contenido aquí */}
        </div>
    );
}

export default Home;
