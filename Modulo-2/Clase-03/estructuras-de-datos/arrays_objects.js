// para crear un array se utilizan corchetes

let frutas = ['manzana', 'fresa', 'piña', 'mango'];
console.log(frutas[0]); // aís es como se accede a un elemnto usando su indice, imprime el primer elemento, en este caso manzana

//agregar un elementos al final del array utilizando .push()
frutas.push('cereza');
console.log(frutas);

// eliminar elementos usnado el metodo .pop() para eliminar el último elemento
frutas.pop();
console.log(frutas);


// ejemplo para llevar un control de invitados
let invitados = ['Juju', 'Manu', 'Vero', 'Clau', 'Gaby'];
invitados.push('Odin');
console.log(invitados);



// como crear un objeto

let libro = {
    name: 'La mecánica del corazón',
    autor: 'Mathias Malzieu',
    numDePaginas: 173
};

// acceder a una propiedad
console.log(libro.name);

// modificar una propiedad
libro.numDePaginas = '150';
console.log(libro.numDePaginas);

// agrgar una nueva propiedad
libro.editorial = 'Debolsillo'; 
console.log(libro.editorial); // sino existiera la propiedad, devuelve undefined



// uso combinado
let productos = [
    { nombre: "Camiseta", precio: 20, stock: 50 },
    { nombre: "Pantalón", precio: 40, stock: 30 },
    { nombre: "Zapatos", precio: 60, stock: 20 }
];

console.log(productos[1].nombre);  // Imprime "Pantalón"