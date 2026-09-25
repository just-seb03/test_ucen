// 1. querySelector: Seleccionamos el elemento de tu sección (toda la página)
const pagina = document.querySelector('body');

// Arreglo con diferentes fuentes
const fuentesDisponibles = [
  "'Courier New', monospace",
  "'Georgia', serif",
  "'Comic Sans MS', cursive",
  "'Impact', sans-serif",
  "'Trebuchet MS', sans-serif",
  'Inter, ui-sans-serif, system-ui' // La fuente original por defecto
];

// 2. addEventListener: Escuchamos el evento 'click' en cualquier parte de la página
pagina.addEventListener('click', (evento) => {
  
  // Condición de seguridad: Si el usuario hace clic en el enlace de "Volver al inicio", 
  // no hacemos nada para que el enlace funcione normalmente y lo regrese.
  if (evento.target.closest('.back-link')) {
    return;
  }

  // Elegimos una fuente aleatoria
  const fuenteAleatoria = fuentesDisponibles[Math.floor(Math.random() * fuentesDisponibles.length)];
  
  // 3. Modificar el DOM: Actualizamos el valor CSS (la fuente) en la pantalla
  pagina.style.fontFamily = fuenteAleatoria;
});