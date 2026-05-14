//Factorial de un numero
/*
let n = 9
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(factorial);
*/

let n = 9;
let factorial = 1; //acumulador
let i = 1; //contador

while (i <= n) {
    factorial *= i; //se acumula multiplicando
    i++; // contador aumenta
}

console.log(factorial);