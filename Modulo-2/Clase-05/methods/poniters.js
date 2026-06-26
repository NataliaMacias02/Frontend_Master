// Algoritmo de dos punteros

let numeros = [1,2,3,4,5,6,7,8,9];
let izquierda = 0;
let derecha = numeros.length - 1;

while(izquierda < derecha) {
    let suma = numeros[izquierda] + numeros[derecha]

    if (suma === 10) {
        console.log(numeros[izquierda], numeros[derecha]);
        break
    }
    if (suma < 10) {
        izquierda++
    }else{
        derecha--
    }
}


// ELIMINAR DUPLICADOS secuenciales
let numero = [1,2,2,3,4,5,8,6,7,8];
let duplicado = 0;

for(let i = 1; i < numero.length; i++) {
    if(numero[i] !== numero[duplicado]){
        duplicado++
        numero[duplicado] = numero[i]
    }
}

// sin duplicados secuenciales

console.log(numeros.slice(0, duplicado + 1));