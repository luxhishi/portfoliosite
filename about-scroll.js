(() => {
  const sections = [...document.querySelectorAll('main > section, .site-footer')];
  const workIndex = sections.findIndex((section) => section.classList.contains('writings'));
  let isAnimating = false;

  if (sections.length < 2 || workIndex < 1) return;

  window.addEventListener('wheel', (event) => {
    if (isAnimating || Math.abs(event.deltaY) < 8) return;

    const currentIndex = sections.reduce((closestIndex, section, index) => {
      const closestDistance = Math.abs(sections[closestIndex].getBoundingClientRect().top);
      const sectionDistance = Math.abs(section.getBoundingClientRect().top);
      return sectionDistance < closestDistance ? index : closestIndex;
    }, 0);

    if (currentIndex >= workIndex || document.body.classList.contains('work-reached')) return;

    const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    event.preventDefault();
    isAnimating = true;
    sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });

    window.setTimeout(() => {
      isAnimating = false;
    }, 850);
  }, { passive: false });
})();
