document.addEventListener('DOMContentLoaded', () => {
  const titleFade = document.querySelector('.hero-title-fade');
  const scrollHint = document.querySelector('.scroll-hint');
  const btnRow = document.querySelector('.hero-btn-row');

  const updateScrollState = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const opacity = Math.max(0, 1 - scrollY / 180);

    if (titleFade) {
      titleFade.style.opacity = opacity;
    }

    if (btnRow) {
      btnRow.style.opacity = opacity;
    }

    if (scrollHint) {
      const isScrolled = scrollY > 160;
      if (isScrolled) {
        scrollHint.classList.add('is-scrolled');
        scrollHint.setAttribute('aria-label', 'Volver al inicio');
      } else {
        scrollHint.classList.remove('is-scrolled');
        scrollHint.setAttribute('aria-label', 'Desplazarse hacia abajo');
      }
    }
  };

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  if (scrollHint) {
    scrollHint.addEventListener('click', () => {
      const isScrolled = scrollHint.classList.contains('is-scrolled');
      if (isScrolled) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.getElementById('explorar');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        }
      }
    });
  }
});
