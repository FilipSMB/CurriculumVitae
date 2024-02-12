// Cargar texto desde archivo externo
window.addEventListener('DOMContentLoaded', function () {
    // Elemento HTML donde se insertará el texto
    var texto1 = document.getElementById('texto-1');
    var texto2 = document.getElementById('texto-2');

    // Ruta del archivo de texto
    var rutaArchivoTexto = 'texto.txt';

    // Realizar solicitud para cargar el archivo de texto
    var solicitud = new XMLHttpRequest();
    solicitud.open('GET', rutaArchivoTexto);

    // Cuando se cargue el archivo de texto
    solicitud.onload = function () {
        if (solicitud.status === 200) {
            // Insertar el contenido del archivo en el elemento HTML
            texto1.textContent = solicitud.responseText;
            texto2.textContent = solicitud.responseText;
        }
    };

    // Enviar solicitud
    solicitud.send();
});