const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupClose = document.getElementById('popup-close');

const popupTriggers = document.querySelectorAll('.popup-trigger');

popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const info = trigger.getAttribute('data-info');
        popupContent.textContent = info;
        popup.style.display = 'block';
    });
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});
