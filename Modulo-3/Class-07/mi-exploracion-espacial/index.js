const planetas = require("./planetas");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `¡Reporte de exploración! Se han registrado ${planetas.length} planetas.`,
    e: "OO",
    T: "U ",
  }),
);

// Recorremos el array de planetas e imprimimos la información de cada uno
planetas.forEach((planeta, index) => {
  console.log(`🌌 Planeta #${index + 1}: ${planeta.nombre} descubierto!`);
  console.log(`   Descripción: ${planeta.descripcion}`);
  console.log(`   Descubierto en: ${planeta.descubiertoEn}`);
  console.log("---");
});

console.log("🚀 Misión cumplida, Explorador Espacial.");
