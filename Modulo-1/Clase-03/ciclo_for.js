// IMPRIMIR NÚMEROS DEL 0 AL 9
for ( i = 0; i < 10; i++) {
    console.log(i);
}

// IMPRIMIR NÚMEROS DEL 10 AL 0
for ( i = 10; i >= 0; i--) {
    console.log(i);
}

// SUMAR NÚMEROS EN UN RANGO
let suma = 0;
for ( let j = 1; j <= 10; j++) {
    suma += j; // sumar valor actual a la suma total
}
console.log(suma);

// SUMAR SOLO LOS NÚMEROS PARES
let sum = 0;
for ( let k = 1; k <= 20; k++) { 
    if (k % 2 === 0) { // verifica si el numero es par utilizando el operador módulo
        sum += k; // si es par se suma a la variable sum
    }
}
console.log(sum);