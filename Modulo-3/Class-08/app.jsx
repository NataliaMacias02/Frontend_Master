// mostrar una lista de alumnos
// contador cuadratico
// section con estilos
// saludo dependiendo de la hora en la que esten (buenos dias, tardes o noches)

function App() {
    const nombre = "Natalia";
    const listaAlumnos = ["Nat", "Katherin", "Eduardo"];
    const fecha = new Date().toLocaleDateString();

    return (
        <>
            <h1>Hola {nombre}</h1>

            <p>{fecha}</p>

            <ul>
                {listaAlumnos.map((alumno) => (
                    <li key={alumno}>{alumno}</li>
                ))}
            </ul>
        </>
    );
}

export default App;