const cards = document.querySelectorAll('.card');
const cvPaths = [
  'paginasCV/SArredondoCV/sebastianArredondoCV.html',
  'paginasCV/MCantuariasCV/maximilianoCantuariasCV.html',
  'paginasCV/CVegaCV/cristianVegaCV.html'
];

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    window.location.href = cvPaths[index];
  });
});

const toggleBtn = document.getElementById('toggle-layout-btn');
const cardsContainer = document.querySelector('.cards');

const darkModeBtn = document.getElementById('toggle-dark-mode');

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = isDarkMode ? 'Modo claro' : 'Modo oscuro';
    darkModeBtn.setAttribute('aria-label', isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro');
  });
}

if (toggleBtn && cardsContainer) {
  toggleBtn.addEventListener('click', () => {
    cardsContainer.classList.toggle('vertical-layout');
    toggleBtn.textContent = cardsContainer.classList.contains('vertical-layout')
      ? 'Cambiar a vista horizontal'
      : 'Cambiar a vista vertical';
  });
}