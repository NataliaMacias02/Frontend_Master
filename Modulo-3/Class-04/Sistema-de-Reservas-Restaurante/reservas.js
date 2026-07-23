// Sistema de Reservas para un Restaurante
// Implementado con Promesas y async/await, con manejo de errores.

// Simulando una base de datos de mesas
const mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(
          `Disponibilidad confirmada: hay mesas suficientes (${mesasSolicitadas}/${mesasDisponibles}).`
        );
      } else {
        reject(
          new Error(
            `No hay suficientes mesas disponibles. Solicitadas: ${mesasSolicitadas}, disponibles: ${mesasDisponibles}.`
          )
        );
      }
    }, 2000); // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos un 80% de probabilidad de éxito al enviar el correo
      const exito = Math.random() < 0.8;

      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente} exitosamente.`);
      } else {
        reject(
          new Error(`Ocurrió un error al enviar el correo de confirmación a ${nombreCliente}.`)
        );
      }
    }, 1500); // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(`\n--- Nueva solicitud de reserva: ${nombreCliente} (${mesasSolicitadas} mesas) ---`);
    console.log("Verificando disponibilidad de mesas...");

    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    console.log("Mesas disponibles. Confirmando reserva...");
    console.log(`Reserva confirmada para ${nombreCliente}.`);

    console.log("Enviando correo de confirmación...");
    const confirmacionCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacionCorreo);

    console.log(`Proceso de reserva completado con éxito para ${nombreCliente}.`);
  } catch (error) {
    // Captura tanto errores de disponibilidad como errores de envío de correo
    console.log("Error:", error.message);
  }
}

// ------------------- Llamadas de prueba -------------------

// Caso 1: mesas solicitadas <= mesas disponibles (debería poder confirmarse,
// aunque el correo puede fallar aleatoriamente ~20% de las veces)
hacerReserva("Juan Pérez", 3);

// Caso 2: mesas solicitadas > mesas disponibles (debe rechazar por falta de disponibilidad)
hacerReserva("Ana López", 10);

// Caso 3: exactamente el límite de mesas disponibles
hacerReserva("Carlos Ruiz", 5);