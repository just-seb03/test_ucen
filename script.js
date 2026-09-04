// Seleccionamos los elementos necesarios
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const iframe = document.getElementById('cv-frame');
const closeBtn = document.querySelector('.close-btn');

// Añadimos un evento de clic a cada tarjeta
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Obtenemos el nombre del archivo del atributo data-cv
    const cvFile = card.getAttribute('data-cv');
    
    // Asignamos ese archivo al iframe y mostramos el cuadro
    iframe.src = cvFile;
    modal.style.display = 'flex';
  });
});

// Botón de cerrar
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  iframe.src = ''; // Limpiamos el iframe al cerrar
});

// Cerrar si se hace clic fuera del cuadro blanco
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    iframe.src = '';
  }
});