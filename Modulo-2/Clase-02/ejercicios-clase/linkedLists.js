function Nodo(valor) {
    this.valor = valor;
    this.siguiente = null; //enlace el siguiente nodo
}

// crear una lista ligada simple
let nodo1 = new Nodo("Page 1");
let nodo2 = new Nodo("Page 2");
let nodo3 = new Nodo("Page 3");

// enlazar los nodos
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;

console.log(nodo1.siguiente.valor);