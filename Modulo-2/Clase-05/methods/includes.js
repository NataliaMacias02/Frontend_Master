let numeros = [0,1,20];
let existe = numeros.includes(20);
console.log(existe);

let textos = 'JavaScrip';
console.log(textos.includes('Script'));


let number = [1,2,3,4];
let existes = false;

for(let i = 0; i < number.length; i++){
    if (number[i] === 3) {
        existes = true
        break
    }
}


let texto = 'JavaScript';
let buscar = 'Script';
let existiendo = false;

for(let i = 0; i <= texto.length - buscar.length; i++) {
    let coincidencia = true

    for(let j = 0; j < buscar.length; j++) {
        if(texto[i + j] !== buscar[j]) {
            coincidencia = false
            break
        }
    }

    if(coincidencia) {
        existiendo = true
        break
    }
}

console.log(existiendo);