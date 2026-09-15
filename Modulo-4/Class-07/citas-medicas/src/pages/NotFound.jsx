import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="page not-found">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>La ruta que intentas visitar no existe en esta aplicación.</p>
            <Link to="/" className="btn-primary">
                Volver al inicio
            </Link>
        </div>
    );
}

export default NotFound;
