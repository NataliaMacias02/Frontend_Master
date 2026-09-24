import { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';
import './App.css'

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  // Funcionalidad adicional: lista de planetas para aterrizaje aleatorio
  const planetasDisponibles = ['Neptuno', 'Mercurio', 'Jupiter', 'Venus', 'Urano', 'Tierra', 'Marte', 'Saturno'];


  // montaje y desmontaje
  useEffect(() => {
    // montaje
    console.log("¡El panel de control esta listo!")

    const intervalo = setInterval(() => { // aumenta la distancia
      setDistancia((distancia) => {
        return distancia + 1
      }) // return explicito

      setCombustible((combustible) => { // disminuir combustible
        return combustible > 0 ? combustible - 1 : 0
      })
    }, 1000) // actualizar cada segundo

    // desmontaje
    return () => { // limpiar intervalo de vuelo
      clearInterval(intervalo)
      console.log("El panel de control se ha apagado.")
    }

  }, []) // con el array vació le damos la instrucción de que solo lo ejecute una vez despues del montaje

  // actualizar combustible
  useEffect(() => {
    console.log("¡Combustible actualizado!") // solo necesito el console.log porque en el useEffect de montaje ya puse la condición de que combustible va a cambiar
  }, [combustible]) // la dependencia combistible "vigila" o avisa cuando es que se dede de ejecutar el efecto

  // cálculo 
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`
  }, [estadoNave])

  return (
    <>
      <h1>Panel de Control - Explorador Espacial</h1>
      <div className="panel">
        <p>Distancia: {distancia}</p>
        <p>Combustible: {combustible}</p>
        <p>{mensajeEstado}</p>
      </div>

      <button onClick={() => {
        setEstadoNave("Aterrizando")
        // Selección aleatoria del planeta (antes era fijo: "marte")
        const indiceAleatorio = Math.floor(Math.random() * planetasDisponibles.length)
        const planetaElegido = planetasDisponibles[indiceAleatorio]
        setPlanetasVisitados([...planetasVisitados, planetaElegido])
      }}>Aterrizar</button>

      {planetasVisitados.map((nombrePlaneta, index) => (
        <Planeta key={index} nombre={nombrePlaneta} />
      ))}

    </>
  )
}

export default App
