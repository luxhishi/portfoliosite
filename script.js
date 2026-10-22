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

const typingSequence = document.querySelector('.typing-sequence');
const typingParts = document.querySelectorAll('.typing-part');
if (typingSequence && typingParts.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const textParts = ['Digital experiences,', 'built with intention.'];
  let delay = 0;
  textParts.forEach((text, partIndex) => {
    [...text].forEach((character) => {
      setTimeout(() => { typingParts[partIndex].textContent += character; }, delay);
      delay += 62;
    });
  });
  setTimeout(() => typingSequence.classList.add('typing-complete'), delay);
}
