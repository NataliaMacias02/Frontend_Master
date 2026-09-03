// aqui se genera la lista completa y correrla
import Tarea from "./Tarea";

function ListaTareas({ tareas, tareaCompletada }) {

    const listaTareas = () => {
        return tareas.map((tarea, index) => {
            // componente hijo
            const posicion = index + 1;

            return (
                <Tarea
                    key = {tarea.id} // key es una  propiedad especifica de React mientras que tarea y completada son props que yo cree
                    id = {tarea.id}
                    posicion = {posicion}
                    tarea = {tarea.tarea}
                    completada = {tarea.completada}
                    // prop = {variable, propiedad del objeto}
                    tareaCompletada = {tareaCompletada}
                />
            )
        });
    };

    

    return (
        <>
            <h2>Lista de Tareas</h2>

            <ul>
                {listaTareas()}
            </ul>
        </>
    )

}

export default ListaTareas;