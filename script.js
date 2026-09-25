// ===== LÓGICA DE NAVEGACIÓN =====
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

// ===== LÓGICA DEL BOTÓN DE CAMBIO DE VISTA =====
const toggleBtn = document.getElementById('toggle-layout-btn');
const cardsContainer = document.querySelector('.cards');

toggleBtn.addEventListener('click', () => {
  cardsContainer.classList.toggle('vertical-layout');
  
  if (cardsContainer.classList.contains('vertical-layout')) {
    toggleBtn.textContent = 'Cambiar a vista horizontal';
  } else {
    toggleBtn.textContent = 'Cambiar a vista vertical';
  }
});

// ===== LÓGICA DEL BOTÓN DE FUENTE ALEATORIA =====
const randomFontBtn = document.getElementById('random-font-btn');

// Arreglo de fuentes disponibles
const fonts = [
  "'Arial', sans-serif",
  "'Courier New', monospace",
  "'Georgia', serif",
  "'Times New Roman', serif",
  "'Verdana', sans-serif",
  "'Tahoma', sans-serif",
  "'Trebuchet MS', sans-serif",
  "'Impact', sans-serif",
  "'Comic Sans MS', cursive",
  "'Lucida Console', monospace"
];

randomFontBtn.addEventListener('click', () => {
  // Selecciona un índice aleatorio basado en la longitud del arreglo
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  // Aplica la fuente al cuerpo del documento
  document.body.style.fontFamily = randomFont;
});