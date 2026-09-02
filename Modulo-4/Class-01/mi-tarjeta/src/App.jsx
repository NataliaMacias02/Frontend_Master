// App.jsx
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Tarjeta nombre="Ana Pérez" profesion="Desarrolladora Web" mensaje="¡Bienvenido a mi tarjeta!" imagen="https://i.pinimg.com/736x/47/9b/02/479b02ab70be03077a60ba7426838ff7.jpg" />
      <Tarjeta nombre="Luis Ramírez" profesion="Diseñador UX" mensaje="Creando experiencias simples." imagen="https://i.pinimg.com/736x/85/52/9c/85529cf98f37e456dc976c085d3d7881.jpg" />
      <Tarjeta nombre="Julia Castro" profesion="Product Manager" mensaje="Conectando ideas con producto." imagen="https://i.pinimg.com/736x/9b/ab/0d/9bab0d5f31d08851ab6b5ce477a21715.jpg" />
    </div>
  );
}

export default App;