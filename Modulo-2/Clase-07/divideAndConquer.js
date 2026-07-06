function sumArray(arr) {
  // Caso base: Si el arreglo tiene un solo elemento
  if (arr.length === 1) {
    return arr[0];
  } // Dividir: Dividimos el arreglo en dos mitades

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid); // Conquistar: Calculamos la suma de cada mitad recursivamente

  const leftSum = sumArray(left);

  const rightSum = sumArray(right); // Combinar: Sumamos los resultados

  return leftSum + rightSum;
}

// Ejemplo de uso

const numbers = [1, 2, 3, 4, 5];

console.log(sumArray(numbers)); // Salida: 15
