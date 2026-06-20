// un bag podria representar un carrito de compras donde el user agrega sus productos y un mismo producto puede aparecer varias veces

let carritoDeCompras = new Set(); // usamos set para evitar duplicados

carritoDeCompras.add("Pluma verde");
carritoDeCompras.add("Pluma azul");
carritoDeCompras.add("Pluma verde"); // no se agregara porque Pluma verde ya esta en el conjunto
carritoDeCompras.add("libreta");

console.log(carritoDeCompras);