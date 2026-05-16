let libros = [];
let filtroActivo = 'todos';

const inTitulo = document.getElementById('inTitulo');
const inAutor = document.getElementById('inAutor');
const inEstado = document.getElementById('inEstado');
const inCalif = document.getElementById('inCalif');
const inComentario = document.getElementById('inComentario');
const btnAgregar = document.getElementById('btnAgregar');
const btLista = document.getElementById('btLista');
const btEmpty = document.getElementById('btEmpty');
const btCount = document.getElementById('btCount');

const estadoLabel = { pendiente: 'Pendiente', leyendo: 'Leyendo', leido: 'Leído' };

function formatFecha(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
}

function stars(n) {
  if (!n) return '';
  return '★'.repeat(parseInt(n)) + '☆'.repeat(5 - parseInt(n));
}

function renderLista() {
  const filtrados = filtroActivo === 'todos' ? libros : libros.filter(l => l.estado === filtroActivo);
  const cards = btLista.querySelectorAll('.bt-book-card');
  cards.forEach(c => c.remove());

  btCount.textContent = libros.length === 1 ? '1 libro' : libros.length + ' libros';

  if (filtrados.length === 0) {
    btEmpty.style.display = 'block';
    return;
  }
  btEmpty.style.display = 'none';

  filtrados.slice().reverse().forEach(libro => {
    const card = document.createElement('div');
    card.className = 'bt-book-card';
    card.dataset.id = libro.id;
    card.innerHTML = `
      <div class="bt-book-top">
        <div class="bt-book-info">
          <p class="bt-book-title">${libro.titulo}</p>
          <p class="bt-book-author">${libro.autor || 'Autor desconocido'}</p>
          ${libro.comentario ? `<p class="bt-book-comment">${libro.comentario}</p>` : ''}
          <div class="bt-book-meta">
            <span class="bt-badge ${libro.estado}">${estadoLabel[libro.estado]}</span>
            ${libro.calificacion ? `<span style="font-size:12px; color: #BA7517; letter-spacing:1px">${stars(libro.calificacion)}</span>` : ''}
            <span class="bt-book-date">
              <i class="ti ti-clock" style="font-size:11px" aria-hidden="true"></i>
              ${formatFecha(libro.fecha)}
            </span>
          </div>
        </div>
        <div class="bt-book-actions">
          <button class="bt-icon-btn danger" aria-label="Eliminar libro" data-id="${libro.id}">
            <i class="ti ti-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    `;
    btLista.appendChild(card);
  });

  btLista.querySelectorAll('.bt-icon-btn.danger').forEach(btn => {
    btn.addEventListener('click', () => {
      libros = libros.filter(l => l.id !== btn.dataset.id);
      renderLista();
    });
  });
}

btnAgregar.addEventListener('click', () => {
  const titulo = inTitulo.value.trim();
  if (!titulo) { inTitulo.focus(); return; }

  libros.push({
    id: Date.now().toString(),
    titulo,
    autor: inAutor.value.trim(),
    estado: inEstado.value,
    calificacion: inCalif.value,
    comentario: inComentario.value.trim(),
    fecha: Date.now()
  });

  inTitulo.value = '';
  inAutor.value = '';
  inComentario.value = '';
  inCalif.value = '';
  inEstado.value = 'pendiente';

  renderLista();
});

document.querySelectorAll('.bt-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.bt-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filtroActivo = chip.dataset.filter;
    renderLista();
  });
});

renderLista();