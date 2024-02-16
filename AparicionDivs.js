var textoXML = "";

function aparecer(elemento, numero, imgMas) {
    var textoXML = document.getElementById('texto1');

    var rutaArchivoXML = 'ExperienciaXML.xml';

    var solicitud = new XMLHttpRequest();
    solicitud.open('GET', rutaArchivoXML);

    solicitud.onload = function () {
        if (solicitud.status === 200) {
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
                textoElemento.textContent = textoXML + numero;

                // Insertar el elemento de texto dentro del contenedor
                contenedorTexto.appendChild(textoElemento);

                contenedorTexto.style.width = "100%";
                contenedorTexto.style.height = "100%";

                // Insertar el contenedor al lado del elemento dado
                elemento.parentNode.insertBefore(contenedorTexto, elemento.nextSibling);
            }
        }
    };

    // Enviar solicitud
    solicitud.send();


}

