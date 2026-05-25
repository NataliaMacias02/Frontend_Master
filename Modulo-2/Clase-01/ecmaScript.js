/*
ARROW FUNCTIONS

1. Declara una función flecha llamada calculateArea que reciba dos parámetros (width y height) y retorne el área de un rectángulo.

2. Usa let para declarar una variable base que represente el ancho (width) y const para una constante multiplier que tendrá el valor 2.

3. Llama a la función calculateArea y muestra el resultado en la consola.
*/

const calculateArea = (width, height) => {
    let base = width;
    const multiplier = 2;
    return base * height * multiplier;
}


console.log(calculateArea(15,11));

/*
PROMESAS Y ASYNC/AWAIT

1. Crea una función fetchUserData que devuelva una promesa. Esta promesa debe simular una operación asincrónica que tarda 2 segundos en completarse (usa setTimeout).

2. Dentro de fetchUserData, resuelve la promesa con un objeto que tenga dos propiedades: id y name.

3. Escribe una función getUser que use async/await para llamar a fetchUserData, esperar el resultado y mostrarlo en la consola.
*/

const  fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id: 4441, name: "Natalia Macías"}); // Objeto que simula datos de usuario
        }, 2000);
    });
};

const getUser = async() => {
    try {
        const getData = await fetchUserData(); // Espera a que se resuelva la promesa
        console.log(getData); // Muestra el resultado en consola
    } catch (error) {
        console.log(error);
    }
};

getUser();

/*
CLASES

Problema: En un sistema de inventario de una tienda en línea, necesitas crear una clase Producto que almacene el nombre, precio y cantidad de un artículo. Además, debe incluir un método actualizarStock que aumente o disminuya la cantidad de productos disponibles.
*/

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerInfo() {
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto('Libro', 250, 120);
producto1.actualizarStock(-40);
console.log(producto1.obtenerInfo());