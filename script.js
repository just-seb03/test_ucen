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
