/*
Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/

const libro = {
    titulo: "Orgullo y Prejuicio",
    autor: "Jane Austin",
    anio: 1813,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2"],

    describirLibro() {
        return `Libro titulado ${this.titulo}, escrito por ${this.autor}, en el año ${this.anio}, el estado es: ${this.estado}`;
    },

    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo);
    },

    eliminarCapitulo(eliminar){
        this.capitulos.pop();
    }
}

libro.agregarCapitulo("Capitulo 3");
libro.eliminarCapitulo();
console.log(libro.describirLibro());
console.log(libro.capitulos);
