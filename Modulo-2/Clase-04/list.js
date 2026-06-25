
let frutas = ["manzanas", "durazno", "uvas"];

frutas[0] = "sandía";

// algoritmos: finito, ordenado, preciso, eficiente, secuenciales

// algoritmo de busqueda
let a = 10;
let b = 209;
let suma = a + b;
console.log(suma);

let numeros = [4, 6, 2, 14, 65, 23];
let resultado = numeros.find(num => num === 14);
console.log(resultado);

let buscando = 65;
let resultados = null;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === buscando) {
        resultados = numeros[i]
        break;
    }
}
console.log(resultados);


let users = ['Samuel', 'Emiliano', 'antonella'];
let r = users.find(usr => usr === 'Antonella');
console.log(r);


// algoritmo de transformación