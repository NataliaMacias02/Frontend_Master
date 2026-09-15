import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="page home">
            <h1>Bienvenido a la Plataforma de Gestión de Citas Médicas</h1>
            <p>
                Administra tus citas, consulta tus doctores disponibles y agenda
                nuevas consultas, todo desde un solo lugar.
            </p>
            <div className="home-actions">
                <Link to="/citas" className="btn-primary">
                    Ver mis citas
                </Link>
                <Link to="/nueva-cita" className="btn-secondary">
                    Agendar nueva cita
                </Link>
            </div>
        </div>
    );
}

export default Home;
