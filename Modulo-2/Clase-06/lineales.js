let usuarios = new Set(['Axel', 'Gabriela', 'Carolina', 'Ashley']);

console.log(usuarios.has('Axel'));

// pilas (LIFO)
let stack = [];

stack.push('A');
stack.push('B');
stack.push('C');

console.log(stack);

let ultimo = stack.pop();
console.log(ultimo);


// colas (FIFO)
let queue = [];

queue.push('a');
queue.push('b');
queue.push('c');

let primero = queue.shift();
console.log(primero);