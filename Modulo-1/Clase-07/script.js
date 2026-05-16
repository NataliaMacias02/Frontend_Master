const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const slider = document.getElementById('lengthSlider');
const lenVal = document.getElementById('lenVal');
const pwDisplay = document.getElementById('pwDisplay');
const copyBtn = document.getElementById('copyBtn');
const genBtn = document.getElementById('genBtn');
const toast = document.getElementById('toast');
const chkUpper = document.getElementById('chkUpper');
const chkLower = document.getElementById('chkLower');
const chkNumbers = document.getElementById('chkNumbers');
const chkSymbols = document.getElementById('chkSymbols');
const strengthText = document.getElementById('strengthText');
const bars = [document.getElementById('bar1'), document.getElementById('bar2'), document.getElementById('bar3'), document.getElementById('bar4')];

let currentPw = '';

slider.addEventListener('input', () => { lenVal.textContent = slider.value; });

function getStrength(pw, opts) {
  let score = 0;
  if (pw.length >= 12) score++;
  if (pw.length >= 20) score++;
  if (opts.upper && opts.lower) score++;
  if (opts.numbers) score++;
  if (opts.symbols) score++;
  if (score <= 1) return { level: 1, label: 'Muy débil', color: '#E24B4A' };
  if (score === 2) return { level: 2, label: 'Débil', color: '#EF9F27' };
  if (score === 3) return { level: 3, label: 'Moderada', color: '#97C459' };
  return { level: 4, label: 'Fuerte', color: '#1D9E75' };
}

function updateBars(level, color) {
  bars.forEach((b, i) => {
    if (i < level) {
      b.style.background = color;
      b.style.borderColor = color;
    } else {
      b.style.background = 'var(--color-background-tertiary)';
      b.style.borderColor = 'var(--color-border-secondary)';
    }
  });
}

function generatePassword() {
  const opts = {
    upper: chkUpper.checked,
    lower: chkLower.checked,
    numbers: chkNumbers.checked,
    symbols: chkSymbols.checked
  };
  const len = parseInt(slider.value);

  let pool = '';
  let required = [];
  if (opts.upper) { pool += upper; required.push(upper[Math.floor(Math.random() * upper.length)]); }
  if (opts.lower) { pool += lower; required.push(lower[Math.floor(Math.random() * lower.length)]); }
  if (opts.numbers) { pool += numbers; required.push(numbers[Math.floor(Math.random() * numbers.length)]); }
  if (opts.symbols) { pool += symbols; required.push(symbols[Math.floor(Math.random() * symbols.length)]); }

  if (!pool) { pwDisplay.textContent = 'Selecciona al menos una opción'; pwDisplay.className = 'pg-password empty'; return; }

  let pw = [...required];
  for (let i = required.length; i < len; i++) {
    pw.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  pw = pw.sort(() => Math.random() - 0.5).join('');
  currentPw = pw;

  pwDisplay.textContent = pw;
  pwDisplay.className = 'pg-password';

  const s = getStrength(pw, opts);
  strengthText.textContent = s.label;
  strengthText.style.color = s.color;
  updateBars(s.level, s.color);
}

genBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  if (!currentPw) return;
  navigator.clipboard.writeText(currentPw).then(() => {
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 1500);
  });
});

generatePassword();