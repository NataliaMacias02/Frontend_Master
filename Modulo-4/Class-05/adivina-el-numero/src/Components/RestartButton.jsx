export default function RestartButton({ onReiniciar }) {
  return (
    <button onClick={onReiniciar} className="dial-btn dial-btn-secundario">
      Reiniciar caja fuerte
    </button>
  );
}