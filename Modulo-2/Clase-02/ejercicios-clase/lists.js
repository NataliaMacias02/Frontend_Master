// LISTAS 

// Listas ESTÁTICAS

let listaDeTareas = ["hacer tarea", "entrar a la videollamada", "hacer el super"];

listaDeTareas.push("ir al gym"); // se añade una nueva tarea al final de la lista

console.log(listaDeTareas);

// Listas DINÁMICAS

let libros = [];

libros.unshift("Coraline"); // inseta al inicio
libros.push("Alicia en el país de las maravillas"); // inseta al final
libros.splice(1, 0, "El principito"); // inserta en cualquier posición
libros.splice(2, 0, "Los juegos del hambre");
libros.splice(3, 0, "La peor señora del mundo");

libros.shift(); // eliminar primer libro
libros.pop(); // eliminar el ulttimo libro

libros.sort(); // ordenarlos alfabeticamente A - Z 
libros.reverse(); // Z -A

console.log(libros); // mostrar lista d elibros
console.log(libros.includes("Coraline")); // buscar el libro de caroline
console.log(libros.sort()); 
console.log(libros.reverse());
console.log(libros.length); // mostrar total de libros
console.log(libros[0]); // mostrar el primer libro del array
console.log(libros[libros.length - 1]); // mostrar el ultimo libro del array
