// Numéros de ligne, fil d'Ariane et barre d'état de la variante IDE
const gutter = document.querySelector('.gutter');
const code = document.querySelector('.code');
const crumb = document.querySelector('.breadcrumb-file');
const ln = document.querySelector('[data-ln]');
const lang = document.querySelector('[data-lang]');
const LINE = 24;

const langs = { sh: 'Shell', md: 'Markdown', json: 'JSON', log: 'Log' };

function drawGutter() {
  const count = Math.ceil(code.offsetHeight / LINE);
  gutter.textContent = Array.from({ length: count }, (_, i) => i + 1).join('\n');
}

function updateStatus() {
  const active = document.querySelector('.explorer a.is-active');
  if (active) {
    const path = active.dataset.path;
    crumb.innerHTML = path.split('/').join(' <span>&gt;</span> ');
    const ext = path.split('.').pop();
    lang.textContent = langs[ext] || 'Dossier';
  }
  ln.textContent = 'Ln ' + (Math.floor(window.scrollY / LINE) + 1) + ', Col 1';
}

window.addEventListener('scroll', updateStatus, { passive: true });
window.addEventListener('resize', drawGutter);
document.fonts.ready.then(drawGutter);
drawGutter();
updateStatus();
