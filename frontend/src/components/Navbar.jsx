import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../styles/navbar.css';

const NavBar = ({ onToggleMenu }) => {
    return (
        <nav className="navbar">
            <button className="hamburger-btn" onClick={onToggleMenu}>
                <FaBars />
            </button>
            <ul className="navbar-list">
                <li className="navbar-item"><NavLink to="/">Inicio</NavLink></li>
                <li className="navbar-item"><NavLink to="/about">Info</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;