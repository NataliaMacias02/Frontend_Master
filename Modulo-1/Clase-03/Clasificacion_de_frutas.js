let frutas = ['fresa', 'sandía', 'mango', 'mora', 'pepino', 'melón', 'kiwi'];

let frutasContador = {}

let i = 0; // contador para el ciclo while

// Solución con for
/*
for ( let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]; // guarda la fruta que se esta recorriendo

    if (frutasContador[fruta]) { // verifica si la fruta ya existe en el objeto frutasContador
        frutasContador[fruta]++; // si ya existe aumenta el contadro en 1 
    } else {
        frutasContador[fruta] = 1;
    }
}

console.log(frutasContador);
*/

// Solución con while
while (i < frutas.length) {
    let fruta = frutas[i];

    if (frutasContador[fruta]) { // verifica si la fruta ya existe en el objeto frutasContador
        frutasContador[fruta]++; // si ya existe aumenta el contadro en 1 
    } else {
        frutasContador[fruta] = 1; // si no existe, se inicializa el contador para esa fruta en 1
    }

    i++; 
}

console.log(frutasContador);