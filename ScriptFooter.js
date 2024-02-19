window.addEventListener('scroll', function () {
    var piePagina = document.getElementById('pie-pagina');
    var alturaVentana = window.innerHeight;
    var alturaTotal = document.body.offsetHeight;
    var posicionActual = window.pageYOffset || document.documentElement.scrollTop;

    if (alturaTotal <= alturaVentana + posicionActual) {
        piePagina.style.display = 'block';
    } 
});