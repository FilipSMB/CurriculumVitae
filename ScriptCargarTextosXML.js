// Cargar XML desde archivo externo
window.addEventListener('DOMContentLoaded', function () {
    // Elementos HTML donde se insertará el texto
    var texto1 = document.getElementById('texto1');
    var texto2 = document.getElementById('texto2');
    var texto3 = document.getElementById('texto3');

    var titulo1 = document.getElementById('titulo1');
    var titulo2 = document.getElementById('titulo2');
    var titulo3 = document.getElementById('titulo3');

    // Ruta del archivo XML
    var rutaArchivoXML = 'textoXML.xml';

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
            var texto1XML = xmlDoc.querySelector('#texto1');
            var texto2XML = xmlDoc.querySelector('#texto2');
            var texto3XML = xmlDoc.querySelector('#texto3');

            var titulo1XML = xmlDoc.querySelector('#titulo1');
            var titulo2XML = xmlDoc.querySelector('#titulo2');
            var titulo3XML = xmlDoc.querySelector('#titulo3');

            // Insertar el contenido de los elementos XML en los elementos HTML
            texto1.innerHTML = texto1XML.textContent;
            texto2.innerHTML = texto2XML.textContent;
            texto3.innerHTML = texto3XML.textContent;

            titulo1.textContent = titulo1XML.textContent;
            titulo2.textContent = titulo2XML.textContent;
            titulo3.textContent = titulo3XML.textContent;
        }
    };

    // Enviar solicitud
    solicitud.send();
});
