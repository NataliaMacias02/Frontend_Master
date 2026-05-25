// array para guardar los destinos
export const destinos = [];

//función para resgistrar un destino = la cambie a una arrow function
export const registrarDestino = (destino, fecha, pasajeros, transporte) => {
    //Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        pasajeros: pasajeros,
        transporte: transporte,
        costo: calcularCosto(destino, pasajeros, transporte)
    };
    // agrgar un nuevo viaje aal final del array
    destinos.push(nuevoViaje);
};

// calcular costo = se queda como una function declaration debido al scope para que pueda ser llamada por registrarDestino 
export function calcularCosto(destino, pasajeros, transporte) {
    let costoBase = 0;
    const numPasajeros = parseInt(pasajeros); // convierte "3" → 3

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Italia") {
        costoBase = 700;
    } else if (destino === "México") {
        costoBase = 800;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Autobus") {
        costoBase += 80;
    }

    // descuento directo. Se escribe de mayor a menor 
    if (pasajeros >= 5) {
        costoBase = costoBase * 0.75; // 25%
    } else if (pasajeros >= 3) {
        costoBase = costoBase * 0.85; // 15%
    } else if (pasajeros >= 2) {
        costoBase = costoBase * 0.90; // 10%
    };

    return costoBase;
}

// mostrar intinerario de los destinos registrados
export function mostrarItinerario() {
    // cambie el for clasico por un forEach para recorrer automaticamente el array
    destinos.forEach(viaje => {
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Pasajeros: " + viaje.pasajeros);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    })
}