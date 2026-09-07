import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas'); // tareas es la clave para traer las tareas
    if (guardadas) {
      return JSON.parse(guardadas); // converitr el texto de nuevo a un array
    }
    return [];
  }); // cambia cuando se agrega una tarea

  const [nuevaTarea, setNuevaTarea] = useState(''); //  cambia cuando se escribe en el input

  const [duracion, setDuracion] = useState('');

  const [filtro, setFiltro] = useState('todas');

  // función para filtrar tareas segun su duración
  const tareasFiltradas = useMemo(() => {
      switch (filtro) {
      case 'cortas':
        return tareas.filter((tarea) => tarea.duracion <= 30);

      case 'largas':
        return tareas.filter((tarea) => tarea.duracion > 30);

      default:
        return tareas; // para regresar todas las tareas
    }
  }, [tareas, filtro]);

  // efecto para  guardar en localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]); // se usa stringify para convertir el valor a texto proque localSorage solo gurarda strings
  

  // Cálculo de tiempo total optimizado con useMemo
  // la función se movio antes del useEfect para no estar en la temporal dead zone
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;// calcularTiempoTotal no es una función sino solo un valor por esa razón se elimino ()
  }, [calcularTiempoTotal]);  // Se ejecuta cada vez que las tareas cambian

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div className='container'>
      <h1>Contador de Tareas</h1>
      <div className='formulario'>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />
        <button className='button' onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <h2>Tareas</h2>
      <ul className='lista-tareas'>
        {tareasFiltradas.map((tarea, index) => (
          <li className='tarea' key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
        ))}
      </ul>

      <h3 className='title'>Total de tiempo: {calcularTiempoTotal} minutos</h3>

      <select
        className='filtro'
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}>
        <option value="todas">todas</option>
        <option value="cortas">cortas</option>
        <option value="largas">largas</option>
      </select>
    </div>
  );
}

export default App;