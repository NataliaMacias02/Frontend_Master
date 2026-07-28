/* ============================================
   Registro de Eventos — Validaciones
   ============================================
   Validaciones base (ya venían en el formulario original):
     - Campos de texto/correo/teléfono no vacíos
     - Al menos un interés seleccionado
     - Un horario seleccionado

   Validaciones ADICIONALES agregadas en esta versión:
     1. Nombre: longitud mínima y solo letras/espacios (nada de números o símbolos)
     2. Correo: formato válido con expresión regular
     3. Teléfono: exactamente 10 dígitos numéricos
     4. Fecha: no se permite seleccionar una fecha pasada
     5. Archivo (opcional): si se adjunta, se valida su tipo y que pese máximo 2 MB
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroEvento");
  const mensajeEstado = document.getElementById("mensajeEstado");

  const campos = {
    nombre: document.getElementById("nombre"),
    correo: document.getElementById("correo"),
    telefono: document.getElementById("telefono"),
    fecha: document.getElementById("fecha"),
    archivo: document.getElementById("archivo"),
  };

  const TAMANIO_MAX_ARCHIVO = 2 * 1024 * 1024; // 2 MB
  const TIPOS_ARCHIVO_VALIDOS = ["application/pdf", "image/jpeg", "image/png"];

  // ---------- Funciones de validación individuales ----------
  // Cada una regresa un string con el mensaje de error, o '' si el campo es válido.

  function validarNombre() {
    const valor = campos.nombre.value.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚÑÜáéíóúñü\s]+$/;

    if (!valor) return "Escribe tu nombre completo.";
    if (valor.length < 3) return "El nombre debe tener al menos 3 caracteres.";
    if (!soloLetras.test(valor))
      return "El nombre solo puede contener letras y espacios.";
    return "";
  }

  function validarCorreo() {
    const valor = campos.correo.value.trim();
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!valor) return "Escribe tu correo electrónico.";
    if (!formatoCorreo.test(valor))
      return "El correo no tiene un formato válido (ej. nombre@dominio.com).";
    return "";
  }

  function validarTelefono() {
    const valor = campos.telefono.value.trim();
    const diezDigitos = /^\d{10}$/;

    if (!valor) return "Escribe tu número de teléfono.";
    if (!diezDigitos.test(valor))
      return "El teléfono debe tener exactamente 10 dígitos, sin espacios ni guiones.";
    return "";
  }

  function validarIntereses() {
    const seleccionados = document.querySelectorAll(
      'input[name="intereses"]:checked',
    );
    if (seleccionados.length === 0) return "Selecciona al menos un interés.";
    return "";
  }

  function validarHorario() {
    const seleccionado = document.querySelector(
      'input[name="horario"]:checked',
    );
    if (!seleccionado) return "Elige un horario preferido.";
    return "";
  }

  function validarFecha() {
    const valor = campos.fecha.value;
    if (!valor) return "Selecciona la fecha en la que asistirás.";

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaElegida = new Date(valor + "T00:00:00");

    if (fechaElegida < hoy) return "La fecha no puede ser anterior a hoy.";
    return "";
  }

  function validarArchivo() {
    const archivos = campos.archivo.files;
    if (!archivos || archivos.length === 0) return ""; // es opcional

    const archivo = archivos[0];
    if (!TIPOS_ARCHIVO_VALIDOS.includes(archivo.type)) {
      return "El archivo debe ser PDF, JPG o PNG.";
    }
    if (archivo.size > TAMANIO_MAX_ARCHIVO) {
      return "El archivo no debe superar los 2 MB.";
    }
    return "";
  }

  // Mapa de campo -> [función de validación, id del contenedor de error]
  const validadores = {
    nombre: [validarNombre, "error-nombre"],
    correo: [validarCorreo, "error-correo"],
    telefono: [validarTelefono, "error-telefono"],
    intereses: [validarIntereses, "error-intereses"],
    horario: [validarHorario, "error-horario"],
    fecha: [validarFecha, "error-fecha"],
    archivo: [validarArchivo, "error-archivo"],
  };

  // ---------- Utilidades para mostrar/ocultar errores ----------

  function mostrarError(nombreCampo, mensaje) {
    const [, idError] = validadores[nombreCampo];
    const contenedorError = document.getElementById(idError);
    contenedorError.textContent = mensaje;

    if (campos[nombreCampo]) {
      campos[nombreCampo].classList.toggle("campo-invalido", Boolean(mensaje));
    }
  }

  function ejecutarValidacion(nombreCampo) {
    const [funcionValidadora] = validadores[nombreCampo];
    const mensaje = funcionValidadora();
    mostrarError(nombreCampo, mensaje);
    return mensaje === "";
  }

  // ---------- Validación en tiempo real ----------

  ["nombre", "correo", "telefono", "fecha"].forEach((nombreCampo) => {
    campos[nombreCampo].addEventListener("blur", () =>
      ejecutarValidacion(nombreCampo),
    );
    campos[nombreCampo].addEventListener("input", () => {
      // Si ya había un error visible, lo revalida mientras el usuario corrige
      if (campos[nombreCampo].classList.contains("campo-invalido")) {
        ejecutarValidacion(nombreCampo);
      }
    });
  });

  campos.archivo.addEventListener("change", () =>
    ejecutarValidacion("archivo"),
  );

  document.querySelectorAll('input[name="intereses"]').forEach((casilla) => {
    casilla.addEventListener("change", () => ejecutarValidacion("intereses"));
  });

  document.querySelectorAll('input[name="horario"]').forEach((radio) => {
    radio.addEventListener("change", () => ejecutarValidacion("horario"));
  });

  // ---------- Envío del formulario ----------

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ordenDeCampos = [
      "nombre",
      "correo",
      "telefono",
      "intereses",
      "horario",
      "fecha",
      "archivo",
    ];
    let primerCampoInvalido = null;

    ordenDeCampos.forEach((nombreCampo) => {
      const esValido = ejecutarValidacion(nombreCampo);
      if (!esValido && !primerCampoInvalido && campos[nombreCampo]) {
        primerCampoInvalido = campos[nombreCampo];
      }
    });

    const todoValido = ordenDeCampos.every((nombreCampo) => {
      const [funcionValidadora] = validadores[nombreCampo];
      return funcionValidadora() === "";
    });

    if (!todoValido) {
      mensajeEstado.textContent =
        "Revisa los campos marcados en rojo antes de continuar.";
      mensajeEstado.className = "mensaje-estado fallo";
      if (primerCampoInvalido) primerCampoInvalido.focus();
      return;
    }

    // Si todo está bien, se arma el objeto con los datos capturados
    const datosRegistro = {
      nombre: campos.nombre.value.trim(),
      correo: campos.correo.value.trim(),
      telefono: campos.telefono.value.trim(),
      intereses: Array.from(
        document.querySelectorAll('input[name="intereses"]:checked'),
      ).map((i) => i.value),
      horario: document.querySelector('input[name="horario"]:checked').value,
      fecha: campos.fecha.value,
      archivo: campos.archivo.files[0] ? campos.archivo.files[0].name : null,
    };

    console.log("Registro válido:", datosRegistro);

    mensajeEstado.textContent =
      "¡Registro exitoso! Te esperamos en Cumbre Norte.";
    mensajeEstado.className = "mensaje-estado exito";
    form.reset();
    document
      .querySelectorAll(".campo-invalido")
      .forEach((el) => el.classList.remove("campo-invalido"));
  });
});
