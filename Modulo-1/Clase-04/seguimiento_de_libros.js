/*
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/ 

let librosLeidos = ["Emma", "Dracula"];

function agregarLibro(titulo) {
    librosLeidos.push(titulo); // agrer el libro al final del aarrary
} 


function mostrarLibrosLeidos() { // no recibe parametros
    console.log(librosLeidos); // solo imprime los libros del array
}

// se llama a la funcion para agregar los libros
agregarLibro("Orgullo y Prejuicio");
agregarLibro("1984");

// se llama a la función y mostralos
mostrarLibrosLeidos();