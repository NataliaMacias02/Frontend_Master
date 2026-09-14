import { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";
import AttemptsCounter from "./AttemptsCounter";
import "./Game.css";

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroSecreto);
  const [valorIngresado, setValorIngresado] = useState("");
  const [estado, setEstado] = useState("inicio"); // inicio | mayor | menor | ganado
  const [intentos, setIntentos] = useState(0);
  const [historial, setHistorial] = useState([]);

  const juegoTerminado = estado === "ganado";

  const manejarIntento = () => {
    const numero = Number(valorIngresado);
    if (!numero || numero < 1 || numero > 100) return;

    const nuevosIntentos = intentos + 1;
    setIntentos(nuevosIntentos);
    setHistorial((prev) => [...prev, numero]);

    if (numero === numeroSecreto) {
      setEstado("ganado");
    } else if (numero < numeroSecreto) {
      setEstado("mayor");
    } else {
      setEstado("menor");
    }

    setValorIngresado("");
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroSecreto());
    setValorIngresado("");
    setEstado("inicio");
    setIntentos(0);
    setHistorial([]);
  };

  return (
    <div className="caja-fuerte">
      <p className="marca">MODELO SF-100</p>
      <h1 className="titulo">Abre la caja fuerte</h1>
      <p className="subtitulo">La clave es un número entre 1 y 100. Gira el dial y sigue las señales.</p>

      <Message estado={estado} intentos={intentos} />

      {/* Renderizado condicional: el dial solo se muestra mientras el juego no ha terminado */}
      {!juegoTerminado && (
        <InputNumber
          valor={valorIngresado}
          onCambiar={setValorIngresado}
          onIntentar={manejarIntento}
          deshabilitado={juegoTerminado}
        />
      )}

      <AttemptsCounter historial={historial} />

      {/* Renderizado condicional con && : el botón solo aparece tras el primer giro o al ganar */}
      {(juegoTerminado || intentos > 0) && <RestartButton onReiniciar={reiniciarJuego} />}
    </div>
  );
}
