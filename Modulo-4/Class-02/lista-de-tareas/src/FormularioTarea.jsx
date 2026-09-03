import { useState } from "react";

function FormularioTarea({ agregarTarea }) { // trear la prop de App

    const [texto, setTexto] = useState("");

    return (
        <div>

            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button onClick={() => {
                agregarTarea(texto);
                setTexto("");
            }}>
                Agregar</button>

        </div>
    )

}

export default FormularioTarea;