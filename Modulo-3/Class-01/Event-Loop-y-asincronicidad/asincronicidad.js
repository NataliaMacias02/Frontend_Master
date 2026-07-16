// Callbacks
// Son funciones que se pasan como argumento a otras funciones y se ejecutan después de que una tarea se completa.

function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

saludar("María", () => {
  console.log("Callback ejecutado.");
});

//Promises
// Ofrecen una manera más limpia de manejar tareas asincrónicas. Una Promise puede estar en tres estados: pendiente, resuelta o rechazada

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa cumplida"), 1000);
});

promesa.then((resultado) => console.log(resultado));

// Async/Await
// Introducido en ES8, permite escribir código asincrónico de manera que parezca sincrónico.

async function obtenerDatos() {
  const respuesta = await fetch("https://api.example.com/data");
  const datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();
