//Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.

// objeto literal
const auto = {
    marca: "Volkswagen",
    modelo: "Sedan Vocho",
    año: 1994,

    // método
    mostrarInfo(){
        console.log(this.marca, this.modelo, this.año); // uso de this para acceder a ls propiedades
    }
}

auto.mostrarInfo() // llamar a la función