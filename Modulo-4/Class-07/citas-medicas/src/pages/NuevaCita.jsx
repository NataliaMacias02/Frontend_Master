import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NuevaCita({ doctores, onAgregarCita }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        paciente: '',
        doctorId: doctores[0]?.id || '',
        fecha: '',
        hora: '',
        motivo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevaCita = {
            id: Date.now().toString(),
            ...form,
            estado: 'pendiente',
        };

        onAgregarCita(nuevaCita);
        // Navegamos directamente al detalle de la cita recién creada,
        // demostrando el uso de rutas dinámicas de forma programática.
        navigate(`/cita/${nuevaCita.id}`);
    };

    return (
        <div className="page">
            <h1>Agendar Nueva Cita</h1>
            <form className="form-cita" onSubmit={handleSubmit}>
                <label>
                    Paciente
                    <input
                        type="text"
                        name="paciente"
                        value={form.paciente}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Doctor
                    <select name="doctorId" value={form.doctorId} onChange={handleChange}>
                        {doctores.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                                {doc.nombre} — {doc.especialidad}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Fecha
                    <input
                        type="date"
                        name="fecha"
                        value={form.fecha}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Hora
                    <input
                        type="time"
                        name="hora"
                        value={form.hora}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Motivo de consulta
                    <textarea
                        name="motivo"
                        value={form.motivo}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </label>

                <button type="submit" className="btn-primary">
                    Agendar Cita
                </button>
            </form>
        </div>
    );
}

export default NuevaCita;
