import { useParams, Link } from 'react-router-dom';
import CitaCard from '../components/CitaCard';

function DoctorDetalle({ doctores, citas }) {
    const { id } = useParams();
    const doctor = doctores.find((d) => d.id === id);

    if (!doctor) {
        return (
            <div className="page">
                <h2>Doctor no encontrado</h2>
                <Link to="/doctores" className="btn-link">
                    ← Volver a doctores
                </Link>
            </div>
        );
    }

    const citasDelDoctor = citas.filter((c) => c.doctorId === doctor.id);

    return (
        <div className="page">
            <h1>{doctor.nombre}</h1>
            <p className="especialidad">{doctor.especialidad}</p>

            <h2>Citas agendadas</h2>
            {citasDelDoctor.length === 0 ? (
                <p className="empty-state">Este doctor no tiene citas agendadas.</p>
            ) : (
                <div className="citas-grid">
                    {citasDelDoctor.map((cita) => (
                        <CitaCard key={cita.id} cita={cita} doctor={doctor} />
                    ))}
                </div>
            )}

            <Link to="/doctores" className="btn-link">
                ← Volver a doctores
            </Link>
        </div>
    );
}

export default DoctorDetalle;
