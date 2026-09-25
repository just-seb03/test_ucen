const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('cristian-cv-theme');

if (savedTheme === 'dark') {
	document.body.classList.add('dark-mode');
}

function updateThemeButton() {
	const isDarkMode = document.body.classList.contains('dark-mode');
	themeToggle.textContent = isDarkMode ? 'Fondo claro' : 'Fondo oscuro';
	themeToggle.setAttribute(
		'aria-label',
		isDarkMode ? 'Activar fondo claro' : 'Activar fondo oscuro'
	);
}

updateThemeButton();

themeToggle.addEventListener('click', () => {
	const isDarkMode = document.body.classList.toggle('dark-mode');
	localStorage.setItem('cristian-cv-theme', isDarkMode ? 'dark' : 'light');
	updateThemeButton();
});
