// Único encargado de capturar el número que escribe el usuario.

export default function InputNumber({ valor, onCambiar, onIntentar, deshabilitado }) {
  const manejarSubmit = (e) => {
    e.preventDefault();
    onIntentar();
  };

  return (
    <form onSubmit={manejarSubmit} className="dial-form">
      <input
        type="number"
        min="1"
        max="100"
        placeholder="00"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
        disabled={deshabilitado}
        className="dial-input"
        autoFocus
      />
      <button
        type="submit"
        disabled={deshabilitado || valor === ""}
        className="dial-btn dial-btn-primary"
      >
        Girar dial
      </button>
    </form>
  );
}
