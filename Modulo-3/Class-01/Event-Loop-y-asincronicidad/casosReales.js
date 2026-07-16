// Interacción con el usuario

button.addEventListener("click", () => {
  console.log("Botón presionado");
});

// Peticiones HTTP

fetch("https://api.example.com/data")
  .then((response) => response.json())

  .then((data) => console.log(data));

// temporizadores

setTimeout(() => {
  console.log("Esto se ejecuta después de 3 segundos");
}, 3000);

// Animaciones

let position = 0;

function moverCaja() {
  position += 1;
  caja.style.left = position + "px";

  if (position < 100) {
    requestAnimationFrame(moverCaja);
  }
}

moverCaja();
