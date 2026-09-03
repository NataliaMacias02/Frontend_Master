import { useState } from 'react'
import './App.css'
import ListaTareas from './ListaTareas'
import FormularioTarea from './FormularioTarea';

function App() {
  const [tareas, setTareas] = useState([
        { id: 1, tarea: "Estudiar React", completada: false },
        { id: 2, tarea: "Practicar JavaScript", completada: false },
        { id: 3, tarea: "Hacer tarea", completada: false }
    ]);

    const tareaCompletada = (id, completada) => {
        const nuevaLista = tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: completada
                }
            } else {
                return tarea;
            }
        });
        setTareas(nuevaLista)
    }

    const agregarTarea = (nombreTarea) => {
      const nuevaTarea = {
        id: Date.now(),
        tarea: nombreTarea,
        completada: false
      };
      setTareas([...tareas, nuevaTarea]) // spread operator creara un nuevo array que incluira las tareas viejas
    }
  
  return (
    <>
      <ListaTareas 
        tareas = {tareas}
        tareaCompletada = {tareaCompletada}
      />

      <FormularioTarea agregarTarea={agregarTarea} />
    </>
  )
}

export default App
