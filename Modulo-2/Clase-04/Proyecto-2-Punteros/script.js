const invitados = [
  "Juan",
  "Gabriel",
  "Manu",
  "Vero",
  "Alejandro",
  "Ana",
  "Martina",
  "Victor",
  "Jesus",
  "Gricelda",
];

console.log("Lista de invitados: ");
console.log(invitados);

function puedenSentarseJuntos(arr) {
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < arr.length) {
    if (arr[pointer1][0] === arr[pointer2][0]) { // para comparar solo la primera letra
      return [arr[pointer1], arr[pointer2]]; // encuentra el par
    } 
    // avanzan al mismo 
      pointer1++;
      pointer2++;
    }
    return null;
  }

console.log("\nLos invitados que se pueden sentar juntos son: ")
console.log(puedenSentarseJuntos(invitados));
