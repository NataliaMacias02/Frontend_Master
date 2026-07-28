// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
  // El nombre debe ser una cadena no vacía (mínimo 2 caracteres para que tenga sentido).
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(50, "El nombre no puede superar los 50 caracteres."),

  // El correo debe tener el formato correcto.
  email: z
    .string()
    .min(1, "El correo es obligatorio.")
    .email("Ingresa un correo electrónico válido."),

  // La contraseña debe tener al menos 6 caracteres.
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres."),
});

// Referencias a los elementos del DOM
const form = document.getElementById("registerForm");
const fields = {
  name: {
    input: document.getElementById("name"),
    errorEl: document.getElementById("nameError"),
  },
  email: {
    input: document.getElementById("email"),
    errorEl: document.getElementById("emailError"),
  },
  password: {
    input: document.getElementById("password"),
    errorEl: document.getElementById("passwordError"),
  },
};
const formStatus = document.getElementById("formStatus");

// Valida un solo campo usando el esquema completo, pero sólo
// se queda con los errores que correspondan a ese campo.
function validateField(fieldName) {
  const formData = {
    name: fields.name.input.value,
    email: fields.email.input.value,
    password: fields.password.input.value,
  };

  // safeParse no lanza excepciones: devuelve { success, data } o { success, error }
  const result = registerSchema.safeParse(formData);
  const { input, errorEl } = fields[fieldName];

  if (result.success) {
    errorEl.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
    return true;
  }

  // Buscamos si hay un error específico para este campo
  const fieldIssue = result.error.issues.find(
    (issue) => issue.path[0] === fieldName
  );

  if (fieldIssue) {
    errorEl.textContent = fieldIssue.message;
    input.classList.add("invalid");
    input.classList.remove("valid");
    return false;
  } else {
    // El campo en sí es válido, aunque otros campos no lo sean
    errorEl.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
    return true;
  }
}

// Validación en tiempo real: cada vez que el usuario escribe,
// se valida solo el campo que está editando.
Object.keys(fields).forEach((fieldName) => {
  fields[fieldName].input.addEventListener("input", () => {
    validateField(fieldName);
  });
});

// Validación al enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: fields.name.input.value,
    email: fields.email.input.value,
    password: fields.password.input.value,
  };

  // Usamos safeParse para validar el esquema completo sin lanzar excepciones
  const result = registerSchema.safeParse(formData);

  if (result.success) {
    formStatus.textContent = "¡Registro exitoso!";
    formStatus.className = "success";
    // Limpiamos errores visuales
    Object.values(fields).forEach(({ errorEl }) => (errorEl.textContent = ""));
    form.reset();
    Object.values(fields).forEach(({ input }) =>
      input.classList.remove("valid", "invalid")
    );
  } else {
    formStatus.textContent =
      "Por favor corrige los errores marcados en el formulario.";
    formStatus.className = "error";

    // Mostramos el mensaje de error correspondiente a cada campo
    Object.keys(fields).forEach((fieldName) => validateField(fieldName));
  }
});