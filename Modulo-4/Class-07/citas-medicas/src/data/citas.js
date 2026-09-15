// Datos de ejemplo para simular una base de datos de la clínica.

export const doctoresIniciales = [
    { id: 'd1', nombre: 'Dra. Ana Martínez', especialidad: 'Cardiología' },
    { id: 'd2', nombre: 'Dr. Luis Hernández', especialidad: 'Pediatría' },
    { id: 'd3', nombre: 'Dra. Carla Torres', especialidad: 'Dermatología' },
];

export const citasIniciales = [
    {
        id: '1',
        paciente: 'Jorge Ramírez',
        doctorId: 'd1',
        fecha: '2026-09-18',
        hora: '09:00',
        motivo: 'Chequeo de presión arterial',
        estado: 'confirmada',
    },
    {
        id: '2',
        paciente: 'María López',
        doctorId: 'd2',
        fecha: '2026-09-19',
        hora: '11:30',
        motivo: 'Consulta de rutina pediátrica',
        estado: 'pendiente',
    },
    {
        id: '3',
        paciente: 'Pedro Sánchez',
        doctorId: 'd3',
        fecha: '2026-09-20',
        hora: '16:00',
        motivo: 'Revisión de lunar',
        estado: 'confirmada',
    },
];
