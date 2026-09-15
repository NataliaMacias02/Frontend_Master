import { useParams, useNavigate, Link } from 'react-router-dom';

function CitaDetalle({ citas, doctores, onCancelar }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const cita = citas.find((c) => c.id === id);
    const doctor = cita ? doctores.find((d) => d.id === cita.doctorId) : null;

    if (!cita) {
        return (
            <div className="page">
                <h2>Cita no encontrada</h2>
                <p>No existe ninguna cita con el ID "{id}".</p>
                <Link to="/citas" className="btn-link">
                    ← Volver a la lista de citas
                </Link>
            </div>
        );
    }

    const handleCancelar = () => {
        onCancelar(cita.id);
        navigate('/citas');
    };

    return (
        <div className="page">
            <h1>Detalles de la Cita</h1>
            <div className="detalle-card">
                <p>
                    <strong>ID de la cita:</strong> {cita.id}
                </p>
                <p>
                    <strong>Paciente:</strong> {cita.paciente}
                </p>
                <p>
                    <strong>Doctor:</strong> {doctor ? `${doctor.nombre} (${doctor.especialidad})` : 'No asignado'}
                </p>
                <p>
                    <strong>Fecha:</strong> {cita.fecha}
                </p>
                <p>
                    <strong>Hora:</strong> {cita.hora}
                </p>
                <p>
                    <strong>Motivo:</strong> {cita.motivo}
                </p>
                <p>
                    <strong>Estado:</strong>{' '}
                    <span className={`badge badge-${cita.estado}`}>{cita.estado}</span>
                </p>

                {cita.estado !== 'cancelada' && (
                    <button className="btn-danger" onClick={handleCancelar}>
                        Cancelar cita
                    </button>
                )}
            </div>

            <Link to="/citas" className="btn-link">
                ← Volver a la lista de citas
            </Link>
        </div>
    );
}

export default CitaDetalle;
