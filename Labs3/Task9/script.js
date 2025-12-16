const textElement = document.getElementById('textElement');
const colorSelect = document.getElementById('colorSelect');
const currentColorDisplay = document.getElementById('currentColor');

colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    
    textElement.style.color = selectedColor;
    
    if (selectedColor) {
        currentColorDisplay.innerHTML = `Текущий цвет: <span style="color: ${selectedColor}; font-weight: bold;">${colorSelect.options[colorSelect.selectedIndex].text}</span>`;
    } else {
        currentColorDisplay.textContent = 'Текущий цвет: не выбран';
    }
});