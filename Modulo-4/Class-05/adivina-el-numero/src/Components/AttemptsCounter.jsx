export default function AttemptsCounter({ historial }) {
  if (historial.length === 0) return null;

  return (
    <div className="historial">
      <span className="historial-titulo">Giros anteriores</span>
      <div className="historial-fichas">
        {historial.map((n, i) => (
          <span key={i} className="ficha">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}