// crea una sola tarea

function Tarea({ id, tarea, completada, tareaCompletada, posicion }) {


    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            <input
                type="checkbox"
                checked = {completada} // depende directamente del prop completada porque el ceckbox viene del useState de ListaTareas. si es true se marca, si es false se queda en blanco
                onChange={(e) => tareaCompletada(id, e.target.checked) }
            />

            <p style={{textDecoration: completada ? "line-through" : "none"}}>
                {posicion} - {tarea}
            </p>
        </div>
    )
}

export default Tarea