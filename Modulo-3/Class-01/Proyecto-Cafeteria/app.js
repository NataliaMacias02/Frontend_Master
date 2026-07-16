/* ============================================================
   La Barra — Simulador de Pedidos
   Demuestra el Event Loop de JavaScript usando:
     - setTimeout   -> simula el tiempo de preparación
     - Promise      -> envuelve ese setTimeout para poder "esperarlo"
     - async/await  -> lee el resultado de la Promise y actualiza la UI
   ============================================================ */

// ---------- Referencias al DOM ----------
const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");
const statPending = document.getElementById("statPending");
const statDone = document.getElementById("statDone");
const logEl = document.getElementById("log");
const clearLogBtn = document.getElementById("clearLogBtn");

// ---------- "Menú" de la cafetería ----------
const MENU = [
  "Espresso doble",
  "Latte de vainilla",
  "Capuchino",
  "Cold Brew",
  "Americano",
  "Mocha",
  "Chai Latte",
  "Flat White",
];

let orderId = 1; // identificador incremental de cada pedido

// ---------- 1. Recepción de un nuevo pedido ----------
// Cada click dispara la creación de un pedido y arranca su preparación
// SIN bloquear el hilo principal: por eso no usamos "await" aquí.
// El Event Loop puede seguir atendiendo clicks mientras varios pedidos
// se preparan "al mismo tiempo" en segundo plano.
addOrderBtn.addEventListener("click", () => {
  const order = {
    id: orderId++,
    item: MENU[Math.floor(Math.random() * MENU.length)],
    status: "En Proceso",
    createdAt: new Date(),
  };

  renderOrder(order);
  log(`Pedido #${order.id} recibido (${order.item})`, "proceso");

  // Se "dispara y se olvida": processOrder es async y devuelve una
  // Promise, pero no necesitamos esperarla aquí porque cada pedido
  // debe procesarse de forma independiente y concurrente.
  processOrder(order);
});

// ---------- 2. Actualización visual del estado ----------
function renderOrder(order) {
  const li = document.createElement("li");
  li.id = `order-${order.id}`;
  li.className = "ticket";
  li.innerHTML = ticketMarkup(order);
  orderList.prepend(li);
  updateStats();
}

function updateOrderStatus(order, status) {
  const li = document.getElementById(`order-${order.id}`);
  if (!li) return;

  order.status = status;
  li.innerHTML = ticketMarkup(order);

  if (status === "Completado") {
    li.classList.add("ticket--done", "ticket--justCompleted");
  }

  updateStats();
}

function ticketMarkup(order) {
  const isDone = order.status === "Completado";
  const time = order.createdAt.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `
    <div class="ticket__row">
      <span class="ticket__id">#${String(order.id).padStart(3, "0")}</span>
      <span class="ticket__time">${time}</span>
    </div>
    <p class="ticket__item">${order.item}</p>
    <span class="badge ${isDone ? "badge--done" : "badge--processing"}">
      <span class="badge__dot"></span>
      ${order.status}
    </span>
  `;
}

function updateStats() {
  const items = orderList.querySelectorAll(".ticket");
  const done = orderList.querySelectorAll(".ticket--done");
  statPending.textContent = items.length - done.length;
  statDone.textContent = done.length;
}

// ---------- 3. Simulación de la preparación (setTimeout + Promise) ----------
// Esta función NO es async: es una función normal que crea y devuelve
// una Promise. Dentro, setTimeout simula el tiempo que tarda el barista
// en preparar la bebida. Cuando el tiempo se cumple, resolve() marca la
// Promise como cumplida y entrega el pedido ya "listo".
function simulatePreparation(order) {
  const prepTime = 2000 + Math.random() * 4000; // entre 2 y 6 segundos

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...order, prepTime });
    }, prepTime);
  });
}

// ---------- 4. Procesamiento asincrónico de cada pedido ----------
// async/await hace que este código se lea como si fuera síncrono, pero
// mientras "await" espera la Promise, el Event Loop sigue libre para
// procesar otros pedidos, clicks, o refrescar la pantalla.
async function processOrder(order) {
  try {
    log(`Barista empieza a preparar #${order.id}...`, "proceso");

    const finished = await simulatePreparation(order);

    updateOrderStatus(order, "Completado");
    log(
      `Pedido #${order.id} completado en ${(finished.prepTime / 1000).toFixed(1)}s`,
      "listo",
    );
  } catch (error) {
    // Si algo falla durante la preparación, lo dejamos registrado
    // en lugar de romper el flujo de otros pedidos.
    log(`Error al preparar #${order.id}: ${error.message}`, "proceso");
  }
}

// ---------- Bitácora del Event Loop ----------
function log(message, kind) {
  const li = document.createElement("li");
  const tagClass = kind === "listo" ? "tag tag--done" : "tag";
  const tagText = kind === "listo" ? "[LISTO]" : "[PROCESO]";
  const time = new Date().toLocaleTimeString("es-MX", { hour12: false });

  li.innerHTML = `<span class="${tagClass}">${tagText}</span> ${time} — ${message}`;
  logEl.prepend(li);
}

clearLogBtn.addEventListener("click", () => {
  logEl.innerHTML = "";
});
