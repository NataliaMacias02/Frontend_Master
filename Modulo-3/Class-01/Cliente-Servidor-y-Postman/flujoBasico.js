// SERVIDOR
const express = require("express");
const app = express();

app.get("/saludo", (req, res) => {
  res.send("¡Hola desde el servidor!");
});

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000"),
);

// CLIENTE
fetch("http://localhost:3000/saludo")
  .then((response) => response.text())

  .then((data) => console.log(data));

// Salida: ¡Hola desde el servidor!
