fs.unlink("./example.txt", (err) => {
  if (err) {
    console.error("Error al eliminar el archivo:", err);
    return;
  }

  console.log("Archivo eliminado con éxito.");
});

// fs.unlink elimina un archivo del sistema. Es importante manejar errores en caso de que el archivo no exista.
