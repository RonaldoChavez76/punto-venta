// Seleccionar el botón y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Agregar el evento de clic
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    
});
