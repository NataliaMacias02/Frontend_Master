// algoritmo de reducción
let numero = [10, 20, 85, 90];
let sum = numero.reduce((acumulador, numero) => {
    return acumulador+ numero;
}, 0); // el 0 es el valor inicil del acumulador
console.log(sum);


let sumar = numero.reduce((acc, n) => acc + n, 0)
console.log(sumar);


let number = [10, 20, 85, 90];
let suma = 0;

for(let i = 0; i < number.length; i++){
    suma += number[i]
}
console.log(suma);


//como funcion con objetos
let persona = [
    {name: "Natalia Macías", edad: 20},
    {name: "Miguel Marin", edad: 21},
    {name: "Manuela Briones", edad: 30},
    {name: "Eduardo Serrano", edad: 26},
    {name: "Katherin Martinez", edad: 24}
];

let total = persona.reduce((acc, persona) => acc + persona.edad, 0)
console.log(total);

//concatenar texto
let palabra =['Hello', 'World', '!'];
let frase = palabra.reduce((acc, palabra) => acc + palabra, 0)
console.log(frase);