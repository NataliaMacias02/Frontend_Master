// Iniciar la aplicación

// importar los métodos para que funcione app.js
import { registrarDestino } from "./viajes.js";
import { mostrarItinerario } from "./viajes.js";

function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", 1, "Avión");
    registrarDestino("Londres", "2024-07-01", 3, "Tren");
    registrarDestino("Italia", "2025-04-18", 2, "Autobus");


    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
