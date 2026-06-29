// TREES

// para definir un arbol existen dos maneras, la primera es como constante
const arbol = {
    valor: 'A',
    hijos: [
        {
            valor: 'B',
            hijos: [
                {valor: 'D'},
                {valor: 'E'}
            ]
        }
    ]
}
console.log(arbol);

// como objeto
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.hijos = [];
    }
}

const raiz = new Nodo("Empresa");

const sistemas = new Nodo("Sistemas")

raiz.hijos.push(sistemas);

console.log(raiz);

// como hacer una busqueda en arboles 

// busqueda a profundad
function deep(nodo, objetivo){
    if(nodo.valor === objetivo) {
        return true
    }

    for (let hijo of nodo.hijos){ // recorrer el objeto
        if (deep(hijo, objetivo)) { // recorrer hijo por hijo
            return true
        }
    }

    return false
}

const A = new Nodo("A");
const B = new Nodo("B");
const C = new Nodo("C");
const D = new Nodo("D");

A.hijos.push(B, C);
B.hijos.push(D);

console.log(deep(A, "X"));



// GRAPHS (grafos)
