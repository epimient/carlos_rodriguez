// Obtener todos los botones de filtro y las imágenes de la galería
const filterButtons = document.querySelectorAll('.btn-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Función para filtrar elementos de la galería
function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block'; // Muestra el elemento
        } else {
            item.style.display = 'none'; // Oculta el elemento
        }
    });
}

// Agregar evento a cada botón de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar la clase 'active' al botón clickeado
        button.classList.add('active');

        // Filtrar la galería según la categoría seleccionada
        const filterCategory = button.getAttribute('data-filter');
        filterPortfolio(filterCategory);
    });
});

// Inicializar la galería mostrando todos los elementos al cargar la página
window.addEventListener('load', () => {
    filterPortfolio('all'); // Muestra todo por defecto
});
