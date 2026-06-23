// uso combinado de arrays y objetos
let productos = [
    { nombre: "Camiseta", precio: 20, stock: 50 },
    { nombre: "Pantalón", precio: 40, stock: 30 },
    { nombre: "Zapatos", precio: 60, stock: 20 }
];

console.log(productos[1].nombre);  // Imprime "Pantalón"


// STACKS (pilas)
let pila = [];

pila.push("Página 1");

pila.push("Página 2");

pila.push("Página 3");

console.log(pila.pop());  // Imprime "Página 3", la última página visitada



// QUEUES (colas)
let cola = [];

cola.push("Trabajo 1");

cola.push("Trabajo 2");

cola.push("Trabajo 3");

console.log(cola.shift());  // Imprime "Trabajo 1", el primero en entrar


// SETS (conjuntos)
let usuarios = new Set();

usuarios.add("Juan");

usuarios.add("Ana");

usuarios.add("Juan");  // No se agrega, porque "Juan" ya está en el conjunto

console.log(usuarios);  // Imprime Set {"Juan", "Ana"}


// MAPS
let precios = new Map();

precios.set("productoA", 25);

precios.set("productoB", 40);

precios.set("productoC", 15);

console.log(precios.get("productoB"));  // Imprime 40


// TREES 
let arbol = {

    nombre: "Root",

    hijos: [

        { nombre: "Carpeta 1", hijos: [] },
        { nombre: "Carpeta 2", hijos: [{ nombre: "Subcarpeta", hijos: [] }] }
    ]
};