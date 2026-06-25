function sumarDosPunteros(arr, objetivo) {
    let inicio = 0; // 1er puntero
    let final = arr.length -1; //2do puntero

    while(inicio < final) {
        const suma = arr[inicio] + arr[final];

        if(suma === objetivo) {
            return [arr[inicio], arr[final]]; // Regresamos los números que cumplen la condición
        } 
        if(suma < objetivo) {
            inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
        } else {
            final--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
        }
    }
    return null; // No se encontró ninguna pareja
}

console.log(sumarDosPunteros([1, 2, 3, 4, 6], 6));
console.log(sumarDosPunteros([1, 2, 3, 4, 6], 2));
console.log(sumarDosPunteros([1, 2, 3, 4, 6], 11));