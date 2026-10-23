// Duplique la liste du carrousel pour une boucle sans coupure
const track = document.querySelector('.marquee-track');
if (track) {
  track.innerHTML += track.innerHTML;
  track.querySelectorAll('li').forEach((li, i, all) => {
    if (i >= all.length / 2) li.setAttribute('aria-hidden', 'true');
  });
}

// Met en surbrillance la section visible dans la sidebar
const links = document.querySelectorAll('[data-nav]');
const targets = [...links].map(link => document.querySelector(link.getAttribute('href')));

function setActive() {
  const line = window.innerHeight * 0.3;
  let current = targets[0];

  targets.forEach(target => {
    if (target.getBoundingClientRect().top <= line) current = target;
  });

  links.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === '#' + current.id);
  });
}

window.addEventListener('scroll', setActive, { passive: true });
setActive();

// Garde la section en cours quand on change de version
const switchLink = document.querySelector('.switch');
if (switchLink) {
  switchLink.addEventListener('click', () => {
    const active = document.querySelector('[data-nav].is-active');
    switchLink.href = switchLink.getAttribute('href').split('#')[0] + (active ? active.getAttribute('href') : '');
  });
}
