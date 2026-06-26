function ventanaVariable(arr, target) {
    let sumaActual = 0, inicio = 0, longitudMinima = Infinity;

    // Expande el puntero derecho para recorrer el arreglo
    for (let fin = 0; fin < arr.length; fin++) {
        sumaActual += arr[fin];
        // Contrae la ventana desde el inicio cuando la suma cumple la condición
        while (sumaActual >= target) {
            longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
            sumaActual -= arr[inicio];
            inicio++; // Mueve el inicio hacia adelante
        }
    }

    return longitudMinima === Infinity ? 0 : longitudMinima;
}

console.log(ventanaVariable([2, 3, 1, 2, 4, 3], 7)); // Resultado: 2