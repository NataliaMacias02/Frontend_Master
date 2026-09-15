import { useMemo, useState } from 'react';
import CitaCard from '../components/CitaCard';

function Citas({ citas, doctores }) {
    const [filtro, setFiltro] = useState('todas');

    const citasFiltradas = useMemo(() => {
        if (filtro === 'todas') return citas;
        return citas.filter((c) => c.estado === filtro);
    }, [citas, filtro]);

    const getDoctor = (doctorId) => doctores.find((d) => d.id === doctorId);

    return (
        <div className="page">
            <h1>Lista de Citas Médicas</h1>

            <div className="filtros">
                <label htmlFor="filtro-estado">Filtrar por estado: </label>
                <select
                    id="filtro-estado"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="todas">Todas</option>
                    <option value="pendiente">Pendientes</option>
                    <option value="confirmada">Confirmadas</option>
                    <option value="cancelada">Canceladas</option>
                </select>
            </div>

            {citasFiltradas.length === 0 ? (
                <p className="empty-state">No hay citas que coincidan con este filtro.</p>
            ) : (
                <div className="citas-grid">
                    {citasFiltradas.map((cita) => (
                        <CitaCard key={cita.id} cita={cita} doctor={getDoctor(cita.doctorId)} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Citas;
