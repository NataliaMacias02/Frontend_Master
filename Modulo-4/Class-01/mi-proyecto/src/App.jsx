import { useState } from "react"; // useState es un hook
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
      // valor actual, valor actualizado  = (valor inicial)

  const [nombre, setNombre] = useState('a todos');

  const [activo, setActivo] = useState(true);

  const [usuario, setUsuario] = useState({
    nombre: 'Natalia',
    edad: 20,
    ciudad: 'Aguascalientes'
  })

  const actualizarNombre = () => {
    setNombre('Nat')
  }

  const actualizarUsuario = () => {
    setUsuario({
      ...usuario,
      nombre:'Naty',
      edad: 21
    })
  }

  return (
    <>

      <h1>Bienvenidos {nombre}</h1>

      <button onClick={actualizarNombre}>
        Cambiar
      </button>

      <p>Suscripción {activo ? 'Activada' : 'Inactiva'}</p>

      <button onClick={() => {setActivo(!activo)}}>
        {activo ? 'Desactivar': 'Activar'}
      </button>

      <h2>{usuario.nombre}</h2>
      <h2>{usuario.edad}</h2>
      <h2>{usuario.ciudad}</h2>

      <button onClick={actualizarUsuario}>
        Actualizar usuario
      </button>

      <h1>{contador}</h1>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Disminuir
      </button>

      <button onClick={() => setContador(0)}>
        Reiniciar
      </button>

    </>
  )
}

export default App
