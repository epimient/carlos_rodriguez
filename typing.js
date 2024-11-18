document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing-effect");
    const texts = ["Desarrollador Web", "Desarrollador Móvil", "Fotógrafo"]; // Textos a rotar
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Velocidad de escritura
    const deletingSpeed = 50; // Velocidad de borrado
    const delayBetweenTexts = 1500; // Tiempo de espera entre textos
  
    function typeEffect() {
      const currentText = texts[textIndex];
  
      if (isDeleting) {
        // Borrando texto
        typingElement.textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length; // Cambia al siguiente texto
          setTimeout(typeEffect, 500); // Pausa antes de escribir el siguiente texto
          return;
        }
      } else {
        // Escribiendo texto
        typingElement.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
          isDeleting = true; // Cambia al estado de borrado
          setTimeout(typeEffect, delayBetweenTexts); // Pausa antes de borrar
          return;
        }
      }
  
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  
    typeEffect();
  });
  