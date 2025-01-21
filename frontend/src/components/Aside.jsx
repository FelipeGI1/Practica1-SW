import { NavLink } from 'react-router-dom';
import '../styles/aside.css';

const Aside = ({ menuOpen }) => {
    return (
        <aside className={`aside-container ${menuOpen ? 'aside-open' : 'aside-closed'}`}>
            <nav className="aside-nav">
                <ul>
                    <li><NavLink to="/upload">Registro Datos</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/monitoring">Monitoreo</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;