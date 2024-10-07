// Pobieranie elementów
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const overlayMenu = document.getElementById('overlayMenu');

// Funkcja otwierająca menu
openMenuBtn.addEventListener('click', () => {
    overlayMenu.style.display = 'flex';
});

// Funkcja zamykająca menu
closeMenuBtn.addEventListener('click', () => {
    overlayMenu.style.display = 'none';
});
