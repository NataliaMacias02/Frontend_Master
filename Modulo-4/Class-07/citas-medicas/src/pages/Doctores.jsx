import { Link } from 'react-router-dom';

function Doctores({ doctores, citas }) {
    const citasPorDoctor = (doctorId) =>
        citas.filter((c) => c.doctorId === doctorId && c.estado !== 'cancelada').length;

    return (
        <div className="page">
            <h1>Nuestros Doctores</h1>
            <div className="doctores-grid">
                {doctores.map((doc) => (
                    <Link to={`/doctor/${doc.id}`} key={doc.id} className="doctor-card">
                        <h3>{doc.nombre}</h3>
                        <p>{doc.especialidad}</p>
                        <span className="badge badge-confirmada">
                            {citasPorDoctor(doc.id)} citas activas
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Doctores;
