import { NavLink } from 'react-router-dom';

// Usamos NavLink en lugar de Link para poder resaltar la ruta activa
// mediante la clase "active" que NavLink añade automáticamente.
function Navbar() {
    const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

    return (
        <nav className="navbar">
            <div className="navbar-brand">🩺 Citas Médicas</div>
            <div className="navbar-links">
                <NavLink to="/" className={linkClass} end>
                    Inicio
                </NavLink>
                <NavLink to="/citas" className={linkClass}>
                    Ver Citas
                </NavLink>
                <NavLink to="/doctores" className={linkClass}>
                    Doctores
                </NavLink>
                <NavLink to="/nueva-cita" className={linkClass}>
                    Agendar Cita
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
