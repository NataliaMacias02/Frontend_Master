// Importando el módulo fs
const fs = require("fs");

// Verificando si un archivo existe
const filePath = "./example.txt";

if (fs.existsSync(filePath)) {
  console.log("El archivo existe.");
} else {
  console.log("El archivo no existe.");
}
