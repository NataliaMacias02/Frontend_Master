// Renderizado condicional: distintos mensajes según el estado del juego.

export default function Message({ estado, intentos }) {
  if (estado === "ganado") {
    return (
      <p className="pantalla pantalla-exito">
        CAJA ABIERTA — {intentos} {intentos === 1 ? "giro" : "giros"}
      </p>
    );
  }

  if (estado === "mayor") {
    return <p className="pantalla pantalla-pista">▲ CLAVE MÁS ALTA</p>;
  }

  if (estado === "menor") {
    return <p className="pantalla pantalla-pista">▼ CLAVE MÁS BAJA</p>;
  }

  // estado === "inicio"
  return <p className="pantalla pantalla-neutral">INGRESA UN NÚMERO 1–100</p>;
}