let edades = [15, 20, 25, 80, 25];
let todosMayores = edades.every(edad => edad >= 18);
console.log(todosMayores);


let pares = [20, 90, 18, 26, 30];
let esPar = true;

for(let i = 0; i < pares.length; i++){
    if (pares[i] % 2 !== 0) {
        esPar = false
        break
    }
}
console.log(esPar);