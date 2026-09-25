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

toggleBtn.addEventListener('click', () => {
  // Alterna (añade o quita) la clase 'vertical-layout' en el contenedor
  cardsContainer.classList.toggle('vertical-layout');
  
  // Cambia el texto del botón dependiendo de la vista actual
  if (cardsContainer.classList.contains('vertical-layout')) {
    toggleBtn.textContent = 'Cambiar a vista horizontal';
  } else {
    toggleBtn.textContent = 'Cambiar a vista vertical';
  }
});