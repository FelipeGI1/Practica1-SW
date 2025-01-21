import { NavLink } from 'react-router-dom';
import '../styles/aside.css';

const Aside = ({ menuOpen }) => {
    return (
        <aside className={`aside-container ${menuOpen ? 'aside-open' : 'aside-closed'}`}>
            <nav className="aside-nav">
                <ul>
                    <li><NavLink to="/imagenes">Predecir Imágenes</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/videos">Predecir Videos</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/camara">Predicción Cámara</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;