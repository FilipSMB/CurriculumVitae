let titulos = [];
let textos = [];
window.addEventListener('DOMContentLoaded', function () {

    var texto1 = document.getElementById('texto1');

    // Ruta del archivo XML
    var rutaArchivoXML = './ScriptCargarTextosXMLExperiencia.xml';

    // Realizar solicitud para cargar el archivo XML
    var solicitud = new XMLHttpRequest();
    solicitud.open('GET', rutaArchivoXML);

    // Cuando se cargue el archivo XML
    solicitud.onload = function () {
        if (solicitud.status === 200) {
            var texto1XML = xmlDoc.querySelector('#texto1');

            textos[0] = texto1XML.textContent;
        }
    };

    // Enviar solicitud
    solicitud.send();
});

function aparecer(elemento, numero, imgMas) {

    var imagen = document.getElementById(imgMas);
    imagen.src = "Logos/Menos.png";
    // Verificar si ya hay un texto presente
    var texto = elemento.nextSibling;
    if (texto && texto.classList && texto.classList.contains('texto-al-lado')) {
        // Si ya hay un texto, eliminarlo
        elemento.parentNode.removeChild(texto);
        imagen.src = "Logos/Mas.png";
    } else {
        // Crear un nuevo contenedor para el texto
        var contenedorTexto = document.createElement('div');
        contenedorTexto.classList.add('texto-al-lado');

        contenedorTexto.classList.add('info-div-dos');

        // Crear un nuevo elemento de texto
        var textoElemento = document.createElement('p');
        textoElemento.innerHTML = textos[0];

        // Insertar el elemento de texto dentro del contenedor
        contenedorTexto.appendChild(textoElemento);

        contenedorTexto.style.width = "100%";
        contenedorTexto.style.height = "100%";

        // Insertar el contenedor al lado del elemento dado
        elemento.parentNode.insertBefore(contenedorTexto, elemento.nextSibling);
    }
}

