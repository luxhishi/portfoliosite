(() => {
  const sections = [...document.querySelectorAll('main > section, .site-footer')];
  const workIndex = sections.findIndex((section) => section.classList.contains('writings'));
  let isAnimating = false;
  let unlockTimer;

  if (sections.length < 2 || workIndex < 1) return;

  const getCurrentIndex = () => sections.reduce((closestIndex, section, index) => {
    const closestDistance = Math.abs(sections[closestIndex].getBoundingClientRect().top);
    const sectionDistance = Math.abs(section.getBoundingClientRect().top);
    return sectionDistance < closestDistance ? index : closestIndex;
  }, 0);

  window.addEventListener('wheel', (event) => {
    if (isAnimating || Math.abs(event.deltaY) < 8 || event.ctrlKey) return;

    const currentIndex = getCurrentIndex();
    if (currentIndex >= workIndex) return;

    const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0 || nextIndex > workIndex) return;

    event.preventDefault();
    isAnimating = true;
    sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });

    window.clearTimeout(unlockTimer);
    unlockTimer = window.setTimeout(() => {
      isAnimating = false;
    }, 700);
  }, { passive: false });
})();
