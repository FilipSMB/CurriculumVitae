// Cargar XML desde archivo externo
window.addEventListener('DOMContentLoaded', function () {
    // Elementos HTML donde se insertará el texto
    var texto1 = document.getElementById('texto1');
    var texto2 = document.getElementById('texto2');
    var texto3 = document.getElementById('texto3');
    var texto4 = document.getElementById('texto4');
    var texto5 = document.getElementById('texto5');
    var texto6 = document.getElementById('texto6');

    var titulo1 = document.getElementById('titulo1');
    var titulo2 = document.getElementById('titulo2');
    var titulo3 = document.getElementById('titulo3');
    var titulo4 = document.getElementById('titulo4');
    var titulo5 = document.getElementById('titulo5');
    var titulo6 = document.getElementById('titulo6');

    // Ruta del archivo XML
    var rutaArchivoXML = './EstudiosXML.xml';

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
            var texto4XML = xmlDoc.querySelector('#texto4');
            var texto5XML = xmlDoc.querySelector('#texto5');
            var texto6XML = xmlDoc.querySelector('#texto6');

            var titulo1XML = xmlDoc.querySelector('#titulo1');
            var titulo2XML = xmlDoc.querySelector('#titulo2');
            var titulo3XML = xmlDoc.querySelector('#titulo3');
            var titulo4XML = xmlDoc.querySelector('#titulo4');
            var titulo5XML = xmlDoc.querySelector('#titulo5');
            var titulo6XML = xmlDoc.querySelector('#titulo6');

            // Insertar el contenido de los elementos XML en los elementos HTML
            texto1.innerHTML = texto1XML.textContent;
            texto2.innerHTML = texto2XML.textContent;
            texto3.innerHTML = texto3XML.textContent;
            texto4.innerHTML = texto4XML.textContent;
            texto5.innerHTML = texto5XML.textContent;
            texto6.innerHTML = texto6XML.textContent;

            titulo1.textContent = titulo1XML.textContent;
            titulo2.textContent = titulo2XML.textContent;
            titulo3.textContent = titulo3XML.textContent;
            titulo4.textContent = titulo4XML.textContent;
            titulo5.textContent = titulo5XML.textContent;
            titulo6.textContent = titulo6XML.textContent;
        }
    };

    // Enviar solicitud
    solicitud.send();
});
