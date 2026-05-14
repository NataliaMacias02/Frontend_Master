//piramide con *
var row, col, n = 15; // n = numero de filas que tendra la piramide
var parttern = ""; // esta variable almacena la pirmimide

for (row = 1; row <= n; row++){ // ciclo para las filas
    for(col = 1; col <= n - row; col++){ // ciclo para los espacios en blanco
        parttern += " "
    }
    for(col = 1; col <= row; col++){ // ciclo para dibijar los astriscos de la pramide
        parttern += "* "
    }
    parttern += "\n" // salto de linea para dibijar la sigiente fila
}
console.log(parttern)
