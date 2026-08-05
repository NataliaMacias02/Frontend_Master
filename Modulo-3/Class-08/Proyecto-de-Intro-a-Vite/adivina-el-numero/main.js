import './style.css';

// --- Elementos del DOM ---
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const spanIntentos = document.getElementById('intentos');
const mejorPuntajeEl = document.getElementById('mejorPuntaje');

// --- Estado del juego ---
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let juegoTerminado = false;

// --- Funcionalidad extra 1: mejor puntaje guardado en localStorage ---
mostrarMejorPuntaje();

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function mostrarMejorPuntaje() {
    const mejor = localStorage.getItem('mejorPuntaje');
    mejorPuntajeEl.textContent = mejor
        ? `Mejor puntaje: ${mejor} intento(s)`
        : 'Mejor puntaje: aún no hay récord';
}

// --- Funcionalidad extra 2: pistas "frío/caliente" según la cercanía ---
function obtenerPistaTemperatura(numeroJugador) {
    const distancia = Math.abs(numeroSecreto - numeroJugador);
    if (distancia <= 3) return '🔥 ¡Muy caliente!';
    if (distancia <= 10) return '🌤️ Tibio';
    return '❄️ Frío';
}

function procesarIntento() {
    if (juegoTerminado) return;

    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        mensaje.className = 'aviso';
        return;
    }

    intentos++;
    spanIntentos.textContent = intentos;

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${intentos} intento(s)!`;
        mensaje.className = 'exito';
        terminarJuego();
    } else {
        const direccion = numeroJugador < numeroSecreto ? 'más alto' : 'más bajo';
        const pista = obtenerPistaTemperatura(numeroJugador);
        mensaje.textContent = `El número es ${direccion}. ${pista}`;
        mensaje.className = 'pista';
    }

    inputNumero.value = '';
    inputNumero.focus();
}

function terminarJuego() {
    juegoTerminado = true;
    botonAdivinar.disabled = true;
    inputNumero.disabled = true;
    botonReiniciar.classList.remove('oculto');

    const mejorActual = localStorage.getItem('mejorPuntaje');
    if (!mejorActual || intentos < parseInt(mejorActual)) {
        localStorage.setItem('mejorPuntaje', intentos);
    }
    mostrarMejorPuntaje();
}

function reiniciarJuego() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    juegoTerminado = false;

    spanIntentos.textContent = intentos;
    mensaje.textContent = '';
    mensaje.className = '';
    inputNumero.value = '';
    inputNumero.disabled = false;
    botonAdivinar.disabled = false;
    botonReiniciar.classList.add('oculto');
    inputNumero.focus();
}

// --- Eventos ---
botonAdivinar.addEventListener('click', procesarIntento);

// Funcionalidad extra 3: permitir adivinar presionando "Enter"
inputNumero.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        procesarIntento();
    }
});

botonReiniciar.addEventListener('click', reiniciarJuego);