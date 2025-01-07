import React from 'react';
import '../styles/App.css';
import NavBar from '../components/Navbar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <h1 className="title">
              <span>Reconocimiento de</span>
              <span>Veredas con <span className="highlight">DeepLearning</span></span>
            </h1>
            {/* Tu contenido aquí */}
        </div>
    );
}

export default App;
