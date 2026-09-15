import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import Doctores from './pages/Doctores';
import DoctorDetalle from './pages/DoctorDetalle';
import NuevaCita from './pages/NuevaCita';
import NotFound from './pages/NotFound';

import { citasIniciales, doctoresIniciales } from './data/citas';
import './App.css';

function App() {
  // El estado de las citas vive en App para que todas las páginas
  // (Citas, CitaDetalle, NuevaCita, Doctores, DoctorDetalle) trabajen
  // sobre la misma fuente de datos.
  const [citas, setCitas] = useState(citasIniciales);
  const [doctores] = useState(doctoresIniciales);

  const agregarCita = (nuevaCita) => {
    setCitas((prev) => [...prev, nuevaCita]);
  };

  const cancelarCita = (id) => {
    setCitas((prev) =>
      prev.map((c) => (c.id === id ? { ...c, estado: 'cancelada' } : c))
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas citas={citas} doctores={doctores} />} />
          <Route
            path="/cita/:id"
            element={
              <CitaDetalle citas={citas} doctores={doctores} onCancelar={cancelarCita} />
            }
          />
          <Route path="/doctores" element={<Doctores doctores={doctores} citas={citas} />} />
          <Route
            path="/doctor/:id"
            element={<DoctorDetalle doctores={doctores} citas={citas} />}
          />
          <Route
            path="/nueva-cita"
            element={<NuevaCita doctores={doctores} onAgregarCita={agregarCita} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
