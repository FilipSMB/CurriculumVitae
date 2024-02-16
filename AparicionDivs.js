let titulos = [];
let textos = [];
window.addEventListener('DOMContentLoaded', function () {

    var texto1 = document.getElementById('texto1');

    // Ruta del archivo XML
    var rutaArchivoXML = './ExperienciaXML.xml';

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

        textoElemento.innerHTML = textos[numero-1];        

        // Insertar el elemento de texto dentro del contenedor
        contenedorTexto.appendChild(textoElemento);

        contenedorTexto.style.width = "100%";
        contenedorTexto.style.height = "100%";

        // Insertar el contenedor al lado del elemento dado
        elemento.parentNode.insertBefore(contenedorTexto, elemento.nextSibling);
    }
}

