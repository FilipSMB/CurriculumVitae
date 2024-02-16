let titulos = [];
let textos = [];
solicitud.onload = function () {
    if (solicitud.status === 200) {
        // Convertir la respuesta XML en un objeto Document
        var xmlDoc = solicitud.responseXML;

        // Obtener el elemento <contenidos>
        var contenidos = xmlDoc.getElementsByTagName('contenidos')[0];

        // Obtener el título y el texto del elemento <contenidos>
        var titulo = contenidos.getElementsByTagName('titulo')[0].textContent;
        var texto = contenidos.getElementsByTagName('texto')[0].textContent;

        // Asignar el título y el texto a los elementos HTML
        titulos[0].textContent = titulo;
        textos[0].textContent = texto;
    }
};



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
        textoElemento.textContent = textos[0];

        // Insertar el elemento de texto dentro del contenedor
        contenedorTexto.appendChild(textoElemento);

        contenedorTexto.style.width = "100%";
        contenedorTexto.style.height = "100%";

        // Insertar el contenedor al lado del elemento dado
        elemento.parentNode.insertBefore(contenedorTexto, elemento.nextSibling);
    }
}

