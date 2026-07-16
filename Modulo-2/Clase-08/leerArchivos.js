// Lectura asincrona
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  console.log("Contenido del archivo:", data);
});

// usamos fs.readFile para leer el archivo de forma asíncrona. Esto significa que la aplicación puede continuar procesando otras tareas mientras espera la respuesta.