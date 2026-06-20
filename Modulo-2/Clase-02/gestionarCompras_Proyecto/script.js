let listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) { // evita que se repita un producto
        listaDeCompras.push(producto); // agregar producto al final del array
    } else {
        console.log(`${producto} ya existe en la list`)
    }
}

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1); // elimina el elemento
    } else {
        console.log(`${producto} no se encontro en la list`)
    }
}

const mostrarLista = () => {
    console.log("listaDeCompras: ")
    listaDeCompras.forEach((producto, indice) => {
        console.log(`${indice + 1}.${producto}`);
    })
}

agregarProducto("computadora");
agregarProducto("manzanas");
agregarProducto("café");
agregarProducto("jamón");
agregarProducto("café");

mostrarLista();

eliminarProducto("café");

mostrarLista();