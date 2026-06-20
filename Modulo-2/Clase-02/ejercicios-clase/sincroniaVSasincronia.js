//EJEMPLO DE SINCRONIA
console.log('inicia un proceso');
console.log('Descargar ciertos archivos');
console.log('Fin');

//EJEMPLO DE ASINCRONIA
console.log('inicia un proceso');

setTimeout(() => {
    console.log('Archivo desacrgando');
}, 5000)

console.log('Fin');

console.log('Fin');
console.log('Fin');
console.log('Fin');
console.log('Fin');

//CALLSTACK (last in, first out LIFO)
function saludar(name, callback) {
    console.log('Hola', name);
    callback();
}

function despedida() {
    console.log('Adios')
}

saludar('Naty', despedida);