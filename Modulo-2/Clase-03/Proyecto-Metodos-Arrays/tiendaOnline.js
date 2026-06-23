const productos = [
    {nombre: "Rompecabezas", precio: 99, categoria: "juegos"},
    {nombre: "Papel de regalo", precio: 20, categoria: "papelería"},
    {nombre: "Botas", precio: 898, categoria: "calzado"},
    {nombre: "Laptop", precio: 16500, categoria: "electronica"},
    {nombre: "Espejo", precio: 79, categoria: "Blancos"},
    {nombre: "Sartén", precio: 499, categoria: "hogar"},
];

console.log("Productos iniciales")
console.log(productos);

// usando filter para productos que cuestan < $100
const menosDeCien = productos.filter((producto) => producto.precio < 100);

console.log("Los productos que cuestan menos de $100 son: ");
console.log(menosDeCien);

// usando sort para ordenar los productos que cuestan menos de $100 de forma alfabetica
const ordenAlfabeticoNombre = menosDeCien.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log("Productos ordenados alafabeticamente:")
console.log(ordenAlfabeticoNombre);

// usando map para solo tener los nombres de los productos
const nombreProductos = ordenAlfabeticoNombre.map((name) => name.nombre );

console.log("Mostrando solo los nombres de los productos")
console.log(nombreProductos);

// usando reduce para obtener el total de todos los productos que custan menos de $100
const total = ordenAlfabeticoNombre.reduce((acum, price) => acum + price.precio, 0);

console.log("El total a pagar por los productos es de:");
console.log(total);

// usando some para verificar que al menos un producto esta en la categoría de electronica
const category = nombreProductos.some((clasificacion) => clasificacion.categoria === "electronica");

console.log(category);
