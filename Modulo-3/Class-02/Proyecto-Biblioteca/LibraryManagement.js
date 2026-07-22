// ============================================================
// Gestión de Biblioteca — JSON + Callbacks
// ============================================================

const readline = require("readline");

// ------------------------------------------------------------
// 1. Objeto JSON con la colección de libros
// ------------------------------------------------------------
let biblioteca = {
  libros: [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      disponible: true,
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      genero: "Distopía",
      disponible: true,
    },
  ],
};

// ------------------------------------------------------------
// 2. Simulación de LECTURA asíncrona (como leer un archivo JSON)
// ------------------------------------------------------------
function leerDatos(callback) {
  console.log("\nLeyendo datos...");
  setTimeout(() => {
    // Le pasamos una copia para simular que "releemos del disco"
    callback(null, JSON.parse(JSON.stringify(biblioteca)));
  }, 1000);
}

// ------------------------------------------------------------
// 4. Simulación de ESCRITURA asíncrona (como guardar en un archivo JSON)
// ------------------------------------------------------------
function escribirDatos(datosActualizados, callback) {
  console.log("Guardando cambios...");
  setTimeout(() => {
    biblioteca = datosActualizados;
    callback(null); // null = sin error
  }, 1000);
}

// ------------------------------------------------------------
// 3. Funciones para interactuar con el inventario
// ------------------------------------------------------------

// Consultar libros
function mostrarLibros(callback) {
  leerDatos((err, datos) => {
    if (err) {
      console.error("Error al leer los datos:", err);
      if (callback) callback(err);
      return;
    }
    console.log("\nInventario de libros:");
    if (datos.libros.length === 0) {
      console.log("  (no hay libros registrados)");
    } else {
      datos.libros.forEach((libro, index) => {
        const estado = libro.disponible ? "Disponible" : "Prestado";
        console.log(
          `  ${index + 1}. "${libro.titulo}" — ${libro.autor} [${libro.genero}] — ${estado}`,
        );
      });
    }
    if (callback) callback(null, datos);
  });
}

// Agregar un libro nuevo
function agregarLibro(titulo, autor, genero, disponible, callback) {
  leerDatos((err, datos) => {
    if (err) {
      if (callback) callback(err);
      return;
    }

    const existe = datos.libros.some(
      (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase(),
    );
    if (existe) {
      const mensaje = `Ya existe un libro con el título "${titulo}".`;
      console.log(mensaje);
      if (callback) callback(new Error(mensaje));
      return;
    }

    const nuevoLibro = { titulo, autor, genero, disponible };
    datos.libros.push(nuevoLibro);

    escribirDatos(datos, (errEscritura) => {
      if (errEscritura) {
        console.error("Error al guardar el libro:", errEscritura);
        if (callback) callback(errEscritura);
        return;
      }
      console.log(`Libro agregado: "${titulo}" de ${autor}.`);
      if (callback) callback(null, nuevoLibro);
    });
  });
}

// Actualizar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
  leerDatos((err, datos) => {
    if (err) {
      if (callback) callback(err);
      return;
    }

    const libro = datos.libros.find(
      (l) => l.titulo.toLowerCase() === titulo.toLowerCase(),
    );

    if (!libro) {
      const mensaje = `No se encontró el libro "${titulo}".`;
      console.log(mensaje);
      if (callback) callback(new Error(mensaje));
      return;
    }

    libro.disponible = nuevoEstado;

    escribirDatos(datos, (errEscritura) => {
      if (errEscritura) {
        console.error("Error al actualizar el libro:", errEscritura);
        if (callback) callback(errEscritura);
        return;
      }
      console.log(
        `"${libro.titulo}" ahora está ${nuevoEstado ? "disponible" : "prestado"}.`,
      );
      if (callback) callback(null, libro);
    });
  });
}

// ============================================================
// Menú interactivo de consola (readline)
// ============================================================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

function mostrarMenu() {
  console.log(`
========= BIBLIOTECA =========
1. Consultar libros
2. Agregar libro
3. Actualizar disponibilidad
4. Salir
==================================`);
}

async function iniciarApp() {
  let salir = false;

  while (!salir) {
    mostrarMenu();
    const opcion = (await preguntar("Elige una opción (1-4): ")).trim();

    switch (opcion) {
      case "1": {
        await new Promise((resolve) => mostrarLibros(() => resolve()));
        break;
      }

      case "2": {
        const titulo = await preguntar("Título: ");
        const autor = await preguntar("Autor: ");
        const genero = await preguntar("Género: ");
        const disponibleResp = (await preguntar("¿Disponible? (s/n): "))
          .trim()
          .toLowerCase();
        const disponible = disponibleResp === "s" || disponibleResp === "si";

        await new Promise((resolve) => {
          agregarLibro(titulo, autor, genero, disponible, () => resolve());
        });
        break;
      }

      case "3": {
        const tituloBuscar = await preguntar("Título del libro a actualizar: ");
        const estadoResp = (
          await preguntar("Nuevo estado (disponible/prestado): ")
        )
          .trim()
          .toLowerCase();
        const nuevoEstado = estadoResp === "disponible";

        await new Promise((resolve) => {
          actualizarDisponibilidad(tituloBuscar, nuevoEstado, () => resolve());
        });
        break;
      }

      case "4":
        salir = true;
        console.log("\n¡Hasta luego!");
        break;

      default:
        console.log("Opción no válida, intenta de nuevo.");
    }
  }

  rl.close();
}

// ------------------------------------------------------------
// Punto de entrada
// ------------------------------------------------------------
iniciarApp(); // node LibraryManagement.js
