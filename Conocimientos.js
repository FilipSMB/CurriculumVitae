//const popup = document.getElementById('popup');
//const popupContent = document.getElementById('popup-content');
//const popupClose = document.getElementById('popup-close');

//const popupTriggers = document.querySelectorAll('.popup-trigger');

//popupTriggers.forEach(trigger => {
//    trigger.addEventListener('click', () => {
//        const info = trigger.getAttribute('data-info');
//        popupContent.textContent = info;
//        popup.style.display = 'block';
//    });
//});

//popupClose.addEventListener('click', () => {
//    popup.style.display = 'none';
//});

var popup = document.getElementById('popup');
var popupContent = document.getElementById('popup-content');
var popupClose = document.getElementById('popup-close');

var popupTriggers = document.querySelectorAll('.popup-trigger');

var textos = [];//ConocimientosXML.xml

window.addEventListener('load', function () {
    popupContent.innerHTML = "Haz clic en cada conocimiento para saber mas sobre la experiencia y como ha sido adquirida.<br>" +
                             "Pulsa en la X para cerrar el popup.";
    popup.style.display = "block";

});

window.addEventListener('DOMContentLoaded', function () {

    // Ruta del archivo XML
    var rutaArchivoXML = './ConocimientosXML.xml';

    // Realizar solicitud para cargar el archivo XML
    var solicitud = new XMLHttpRequest();
    solicitud.open('GET', rutaArchivoXML);

    // Cuando se cargue el archivo XML
    solicitud.onload = function () {
        if (solicitud.status === 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(solicitud.responseText, 'text/xml');

            let contenidos = xmlDoc.getElementsByTagName('contenidos')[0];

            // Obtener todas las etiquetas <texto> dentro de <contenidos>
            let etiquetasTexto = contenidos.getElementsByTagName('texto');

            // Recorrer cada etiqueta de texto y almacenar su contenido
            for (let i = 0; i < etiquetasTexto.length; i++) {
                let texto = etiquetasTexto[i].textContent.trim(); // Trim para eliminar espacios en blanco innecesarios
                textos.push(texto);
            }
        }
    };

    // Enviar solicitud
    solicitud.send();
});


popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        var posicion = trigger.getAttribute('data-info');
        popupContent.innerHTML = textos[posicion];
        popup.style.display = 'block';
    });
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});
