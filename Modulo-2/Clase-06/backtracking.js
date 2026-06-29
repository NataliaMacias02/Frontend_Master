function generateCombinations(letters, current, index, results) {
  // Agregar la combinación actual al resultado
  results.push(current); // Iterar a partir del índice actual

  for (let i = index; i < letters.length; i++) {
    // Llamar recursivamente añadiendo la letra actual
    generateCombinations(letters, current + letters[i], i + 1, results);
  }
}

function findAllCombinations(letters) {
  const results = [];
  generateCombinations(letters, "", 0, results);
  return results;
}

// Ejemplo de uso
const letters = ["a", "b", "c"];
console.log(findAllCombinations(letters));

/*
Salida esperada:

[
  '',        'a',       'ab',

  'abc',     'ac',      'b',

  'bc',      'c'
]
*/
