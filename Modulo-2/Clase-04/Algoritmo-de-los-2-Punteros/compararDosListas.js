function encontrarInterseccion(lista1, lista2) {
  let puntero1 = 0;
  let puntero2 = 0;
  const interseccion = [];

  while (puntero1 < lista1.length && puntero2 < lista2.length) {
    if (lista1[puntero1] === lista2[puntero2]) {
      interseccion.push(lista1[puntero1]);
      puntero1++;
      puntero2++;
    } else if (lista1[puntero1] < lista2[puntero2]) {
      puntero1++;
    } else {
      puntero2++;
    }
  }
  return interseccion;
}

console.log(encontrarInterseccion([1, 2, 4, 5], [2, 3, 4, 6])); // [2, 4]
