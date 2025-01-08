import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../styles/navbar.css';

const NavBar = ({ onToggleMenu }) => {
    return (
        <nav className="navbar">
            <button className="hamburger-btn" onClick={onToggleMenu}>
                <FaBars />
            </button>
            <ul className="navbar-list">
                <li className="navbar-item"><NavLink to="/">Home</NavLink></li>
                <li className="navbar-item"><NavLink to="/about">About</NavLink></li>
            </ul>btn
        </nav>
    );
}

export default NavBar;