function Tarjeta({ nombre, profesion, mensaje, imagen }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '250px', textAlign: 'center' }}>
      <img
        src={imagen}
        alt={`Foto de ${nombre}`}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px'
        }}
      />
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;