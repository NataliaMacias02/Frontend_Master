// CONTAR DEL 0 AL 4
let contador = 0;

while (contador < 5) { // mientras el contador sea menor a 5 el código se va a ejecutal
    console.log(contador);
    contador++; // el contador incrementa en 1 cada vez que se ejecuta el bloque de código
}

// CONTAR DEL 10 AL 1
let numero = 10;

while (numero > 0) {
    console.log(numero);
    numero--; // el numero decrementa en 1 cada vez que se ejecuta el bloque de código
}

// QUE EL CICLO SOLO IMPRIMA NUMEROS PARES DEL 10 AL 0
let numeroPar = 10;

while (numeroPar >= 1) {
    if (numeroPar % 2 === 0) {
        console.log(numeroPar);
    }
    numeroPar--;
}