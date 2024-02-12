document.addEventListener("DOMContentLoaded", function () {
    var infoDivs = document.querySelectorAll('.info-div');

    // Función para animar la aparición de los divs de izquierda a derecha
    function animateDivs() {
        var delay = 0;
        infoDivs.forEach(function (div) {
            setTimeout(function () {
                div.style.display = 'block';
                div.style.opacity = '0';
                div.style.transform = 'translateX(-50px)';
                div.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                setTimeout(function () {
                    div.style.opacity = '1';
                    div.style.transform = 'translateX(0)';
                }, 100);
            }, delay);
            delay += 500; // Ajusta el retraso entre cada div
        });
    }

    // Llama a la función de animación cuando se carga la página
    animateDivs();
});