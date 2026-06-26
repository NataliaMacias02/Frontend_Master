// algoritmo de filtrado
let numeros = [15, 9, 24, 47,16, 85, 25, 20, 16];
let resultado = numeros.filter(numero => numero >= 20 && numero <= 50);
console.log(resultado);

let numbers = [15, 9, 24, 47,16, 85, 25, 20, 16];
let result = [];
let indice = 0;

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 20 && numbers[i] <= 30) {
        result[indice] = numbers[i];
        indice++;
    }
}

console.log(result);

