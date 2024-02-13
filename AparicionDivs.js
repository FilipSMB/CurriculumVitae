const infoPanel = document.getElementById('infoPanel');
const infoPanelContent = document.getElementById('infoPanelContent');

function aparecer(image, index) {
    const rect = image.getBoundingClientRect(); // Obtiene la posición de la imagen
    infoPanelContent.innerHTML = `Aquí va la información relacionada con la imagen ${index}`;
    infoPanel.style.top = `${rect.top + document.documentElement.scrollTop}px`; // Establece la posición superior del panel de información
    infoPanel.style.left = `${rect.left}px`; // Establece la posición izquierda del panel de información
    //infoPanel.style.width = `${image.clientWidth}px`; // Establece el ancho del panel de información como el ancho de la imagen
    infoPanel.style.height = `${image.clientHeight}px`; // Establece la altura del panel de información como la altura de la imagen
    infoPanel.classList.add('active');

}


