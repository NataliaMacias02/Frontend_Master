fs.writeFile("./example.txt", "Hola, Node.js!", (err) => {
  if (err) {
    // manejo de errores
    console.error("Error al escribir en el archivo:", err);
    return;
  }

  console.log("Archivo escrito con éxito.");
});

// fs.writeFile y fs.appendFile. El primero sobrescribe el contenido existente, mientras que el segundo agrega texto al final del archivo.