document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-filter');
    const items = document.querySelectorAll('.portfolio-item');

    // Mostrar todos los elementos al cargar la página
    items.forEach((item) => {
        item.classList.add('show');
    });

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Manejo de clases activas en los botones
            buttons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrar elementos
            items.forEach((item) => {
                item.classList.remove('show'); // Ocultar todos los elementos
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('show'); // Mostrar los elementos que coincidan con el filtro
                }
            });
        });
    });
});
