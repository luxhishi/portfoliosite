const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const homeProjects = [...document.querySelectorAll('.home-project-card')];
if (homeProjects.length > 2) {
  const shuffled = homeProjects.sort(() => Math.random() - 0.5);
  shuffled.forEach((project, index) => {
    const selected = index < 2;
    project.hidden = !selected;
    project.classList.toggle('home-project-visible', selected);
    project.classList.toggle('visible', selected);
  });
}

const typingSequence = document.querySelector('.typing-sequence');
const typingParts = document.querySelectorAll('.typing-part');
if (typingSequence && typingParts.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const textParts = ['Digital experiences,', 'built with intention.'];
  let delay = 0;
  typingSequence.classList.add('typing-active-first');
  textParts.forEach((text, partIndex) => {
    if (partIndex === 1) {
      setTimeout(() => {
        typingSequence.classList.remove('typing-active-first');
        typingSequence.classList.add('typing-active-accent');
      }, delay);
    }
    [...text].forEach((character) => {
      setTimeout(() => { typingParts[partIndex].textContent += character; }, delay);
      delay += 62;
    });
  });
  setTimeout(() => typingSequence.classList.add('typing-complete'), delay);
}
