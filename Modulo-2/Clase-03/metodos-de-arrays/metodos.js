// FIND
const numeros = [10, 20, 30, 40];

const resultado = numeros.find(num => num > 25);

console.log(resultado); // en este caso, 30 es el primer valor en cumplir la condición


// MAP 
const arreglo = [1, 2, 3, 4];

const cuadrados = arreglo.map(num1  => num1 ** 2);

console.log(cuadrados); // regresa un nuevo array, aplica una funcion a cada elemento el array original


// FILTER
const numFilter = [5, 10, 15, 20];

const mayor = numFilter.filter(numF => numF > 10); 

console.log(mayor); // devuelve un nuevo array con los elementos que cumplen una condición


// FOREACH
const frutas = ["mango", "fresa", "sandía", "pera"];

frutas.forEach(frutas => console.log(frutas)); // no devuelve un array, ni modifica el original


// SORT
const arraySort = [10, 20, 5, 30, 15];

arraySort.sort((a, b) => a - b); // ordena de forma ascendente

console.log(arraySort);


// REDUCE
const  arrayReduce = [1, 2, 3, 4, 5];

const suma = arrayReduce.reduce((acumulador, numR) => acumulador + numR, 0);

console.log(suma);


// SOME
const arraySome = [1, 3, 7, 9, 2];

const hayMayor = arraySome.some(numS => numS > 5);

console.log(hayMayor);


// EVERY
const arrayEvery = [2, 4, 6, 8, 9];

const sonPares = arrayEvery.every(num => num % 2 === 0);

console.log(sonPares);


// INCLUDES
const frutitas = ["melón", "jicama", "plátano", "mandarina"];

const tieneMandarina = frutitas.includes("mandarina");

console.log(tieneMandarina);