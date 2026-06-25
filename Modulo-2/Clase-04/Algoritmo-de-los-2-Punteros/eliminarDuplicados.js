function eliminarDuplicados(arr) {
    let puntero = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[puntero]) {
            puntero++;
            arr[puntero] = arr[i];
        }
    }
    return arr.slice(0,puntero + 1);
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4]));