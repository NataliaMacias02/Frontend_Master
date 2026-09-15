import { Link } from 'react-router-dom';

function CitaCard({ cita, doctor }) {
    return (
        <div className={`cita-card estado-${cita.estado}`}>
            <div className="cita-card-header">
                <h3>{cita.paciente}</h3>
                <span className={`badge badge-${cita.estado}`}>{cita.estado}</span>
            </div>
            <p>
                <strong>Doctor:</strong> {doctor ? doctor.nombre : 'No asignado'}
            </p>
            <p>
                <strong>Fecha:</strong> {cita.fecha} — {cita.hora}
            </p>
            <p className="cita-motivo">{cita.motivo}</p>
            <Link to={`/cita/${cita.id}`} className="btn-link">
                Ver detalles →
            </Link>
        </div>
    );
}

export default CitaCard;
