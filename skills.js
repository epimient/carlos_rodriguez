document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    const statNumbers = document.querySelectorAll('[data-value]');

    // Función para verificar si un elemento está visible en la pantalla
    const isVisible = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    // Función para animar las barras de progreso
    const animateProgressBars = () => {
        progressBars.forEach((bar) => {
            if (isVisible(bar)) {
                const width = bar.getAttribute('data-width');
                bar.style.width = `${width}%`;
            }
        });
    };

    // Función para animar los números
    const animateNumbers = () => {
        statNumbers.forEach((counter) => {
            if (isVisible(counter) && !counter.classList.contains('animated')) {
                const target = +counter.getAttribute('data-value');
                const speed = 200; // Velocidad de animación
                const increment = target / speed;
                const updateCount = () => {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                        counter.classList.add('animated'); // Marca como animado
                    }
                };
                updateCount();
            }
        });
    };

    // Combinar animaciones
    const animateAll = () => {
        animateProgressBars();
        animateNumbers();
    };

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animateAll);
    animateAll(); // Ejecutar al inicio
});
