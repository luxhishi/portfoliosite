(() => {
  const slides = [...document.querySelectorAll('.about-visuals > div')];
  if (slides.length < 2) return;

  let current = 0;
  window.setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 4200);
})();
