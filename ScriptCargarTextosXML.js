// Cargar XML desde archivo externo
window.addEventListener('DOMContentLoaded', function () {
    // Elementos HTML donde se insertará el texto
    var texto1 = document.getElementById('texto-1');
    var texto2 = document.getElementById('texto-2');

    // Ruta del archivo XML
    var rutaArchivoXML = 'contenido.xml';

    // Realizar solicitud para cargar el archivo XML
    var solicitud = new XMLHttpRequest();
    solicitud.open('GET', rutaArchivoXML);

    // Cuando se cargue el archivo XML
    solicitud.onload = function () {
        if (solicitud.status === 200) {
            // Parsear el contenido XML
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(solicitud.responseText, 'text/xml');

            // Obtener los elementos de texto del XML
            var texto1XML = xmlDoc.querySelector('#texto-1');
            var texto2XML = xmlDoc.querySelector('#texto-2');

            // Insertar el contenido de los elementos XML en los elementos HTML
            texto1.textContent = texto1XML.textContent;
            texto2.textContent = texto2XML.textContent;
        }
    };

    // Enviar solicitud
    solicitud.send();
});
