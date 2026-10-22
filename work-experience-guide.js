(() => {
  const workSection = document.querySelector('.writings');
  if (!workSection) return;

  const updateProgress = () => {
    const rect = workSection.getBoundingClientRect();
    const scrollableDistance = Math.max(workSection.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
    document.body.style.setProperty('--work-progress', `${progress * 100}%`);
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

})();
