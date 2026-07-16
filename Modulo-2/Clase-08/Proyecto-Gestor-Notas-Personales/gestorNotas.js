const fs = require('fs');
const readline = require('readline');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Lee y devuelve el arreglo de notas guardadas en notas.json.
 * Si el archivo no existe o está vacío/corrupto, devuelve un arreglo vacío.
 * @returns {Array<{titulo: string, contenido: string}>}
 */
function leerNotas() {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch (error) {
    console.error('El archivo notas.json está dañado o no es JSON válido:', error.message);
    return [];
  }
}

/**
 * Sobrescribe notas.json con el arreglo de notas dado.
 * @param {Array<{titulo: string, contenido: string}>} notas
 */
function guardarNotas(notas) {
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), 'utf8');
}

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  if (!titulo || !titulo.trim()) {
    console.log('El título no puede estar vacío. Nota no guardada.');
    return;
  }

  const notas = leerNotas();

  // Evitamos títulos duplicados para que "eliminar por título" sea inequívoco
  const existe = notas.some((nota) => nota.titulo === titulo);
  if (existe) {
    console.log(`Ya existe una nota con el título "${titulo}". Elige otro título.`);
    return;
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  guardarNotas(notas);
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  const notas = leerNotas();

  if (notas.length === 0) {
    console.log('No hay notas guardadas.');
    return;
  }

  console.log('\n--- Mis Notas ---');
  notas.forEach((nota, index) => {
    console.log(`${index + 1}. ${nota.titulo}`);
    console.log(`   ${nota.contenido}`);
  });
  console.log('-----------------\n');
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  const notas = leerNotas();

  if (notas.length === 0) {
    console.log('No hay notas para eliminar.');
    return;
  }

  const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

  if (notasRestantes.length === notas.length) {
    console.log(`No se encontró ninguna nota con el título "${titulo}".`);
    return;
  }

  guardarNotas(notasRestantes);
  console.log(`Nota con título "${titulo}" eliminada.`);
}

// ============================================================
// Interfaz de consola (menú interactivo)
// ============================================================

let rl;

function pregunta(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function mostrarMenu() {
  console.log('=== Gestor de Notas Personales ===');
  console.log('1. Crear una nota');
  console.log('2. Listar notas');
  console.log('3. Eliminar una nota');
  console.log('4. Salir');

  const opcion = await pregunta('Elige una opción: ');

  switch (opcion.trim()) {
    case '1': {
      const titulo = await pregunta('Título de la nota: ');
      const contenido = await pregunta('Contenido de la nota: ');
      agregarNota(titulo.trim(), contenido.trim());
      break;
    }
    case '2': {
      listarNotas();
      break;
    }
    case '3': {
      const tituloEliminar = await pregunta('Título de la nota a eliminar: ');
      eliminarNota(tituloEliminar.trim());
      break;
    }
    case '4': {
      console.log('¡Hasta luego!');
      rl.close();
      return;
    }
    default: {
      console.log('Opción no válida. Intenta de nuevo.\n');
    }
  }

  // Volvemos a mostrar el menú hasta que el usuario elija salir
  await mostrarMenu();
}

// Si el script se ejecuta directamente (node gestorNotas.js), arranca el menú.
// Si se importa con require() desde otro archivo (por ejemplo, para pruebas),
// no se dispara el menú automáticamente.
if (require.main === module) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  mostrarMenu();
}

module.exports = { agregarNota, listarNotas, eliminarNota, leerNotas };