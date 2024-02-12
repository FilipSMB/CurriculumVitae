document.addEventListener("DOMContentLoaded", function () {
    var infoDivs = document.querySelectorAll('.info-div');
    var windowHeight = window.innerHeight;

    function checkAndAnimate() {
        infoDivs.forEach(function (div) {
            var divTop = div.getBoundingClientRect().top;
            if (divTop < windowHeight * 0.8) { // Si el div está dentro del 80% de la ventana
                div.style.opacity = '1';
                div.style.transform = 'translateX(0)';
            }
        });
    }

    function animateDiv(div, delay) {
        setTimeout(function () {
            div.style.display = 'block';
            div.style.opacity = '0';
            div.style.transform = 'translateX(-50px)';
            div.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            checkAndAnimate();
        }, delay);
    }

    // Función para animar la aparición de los divs de izquierda a derecha
    function animateDivs() {
        var delay = 0;
        infoDivs.forEach(function (div) {
            animateDiv(div, delay);
            delay += 500; // Ajusta el retraso entre cada div
        });
    }

    // Llama a la función de animación cuando se carga la página
    animateDivs();

    window.addEventListener('scroll', checkAndAnimate); // Llama a checkAndAnimate() en cada evento de scroll
});
