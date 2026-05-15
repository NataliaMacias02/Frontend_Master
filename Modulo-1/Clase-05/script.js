// POO

const persona = {
    nombre: 'Ivan',
    edad: 24,
    nacionalidad: 'Mexicano',
    altura: 1.75,
    sexo: 'hombre',

    dirección: {
        ciudad: 'CDMX',
        colonia: 'del Valle'
    },

    matwerias: ['Matematicas', 'Programacion', 'Ingles'],

    saludar(){
        console.log('Hola soy ' + this.nombre, 'y  mis materias son ' + this.matwerias);
    }
}

function Direccion(ciudad, colonia) {
    this.ciudad = ciudad,
    this.colonia = colonia
}

function Persona(nombre, edad, nacionalidad, altura, sexo){
    this.nombre = nombre,
    this.edad = edad,
    this.nacionalidad = nacionalidad,
    this.altura = altura,
    this.sexo = sexo

    this.direccion = new Direccion(ciudad, colonia)

    this.saludar = function(){
        console.log('Hola, mi nombre es ' + this.nombre);
    } 
}

let natalia = new Persona('Natalia', 20, 'Mexicana', 1.60, 'mujer', 'Napoles', 'Roma')
natalia.saludar()

persona.saludar()
console.log(persona.dirección.ciudad)


/*
for 
for each
*/ 

// for in: hace un recorrido por las propiedades de un objeto
for (const propiedades in persona) {
    console.log(propiedades + ':' + persona[propiedades]); 
}

// for of: recorrer array, strings, map 
let frutas = ['manzana', 'mango', 'sandía']
for (const frutas of frutas) {
    console.log(frutas)
}


// Función anónima
const saludad = function() {
    console.log('Hola Mundo');
}
saludad()

// Arrow function
const suma = (x,y) => {
    return x + y
}
suma(50,100)

const sumar = (a,b) => a + b;
console.log(sumar(15,45))

//delete es una palabra reservada que se utiliza para eliminar una propiedad de un objeto, o un elemento de un array
delete persona.edad
console.log(persona);


const alumno = {
    nombre: 'Juan',
    edad: 22,
    status: 'reprobado'
}

const json = JSON.stringify(alumno) // convierte un objeto a una cadena de texto en formato JSON
console.log(json);

const objet = JSON.parse(json) // convierte una cadena de texto en formato JSON a un objeto
console.log(object);