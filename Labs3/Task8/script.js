const toggleDiv = document.getElementById('toggleDiv');
const toggleButton = document.getElementById('toggleButton');
const statusElement = document.getElementById('status');

toggleButton.addEventListener('click', function() {
    if (toggleDiv.classList.contains('visible')) {
        toggleDiv.classList.remove('visible');
        toggleDiv.classList.add('hidden');
        toggleButton.textContent = 'Показать блок';
        statusElement.textContent = 'Статус: блок скрыт';
        statusElement.style.borderLeftColor = '#e74c3c';
        statusElement.style.backgroundColor = '#ffeaea';
    } else {
        toggleDiv.classList.remove('hidden');
        toggleDiv.classList.add('visible');
        toggleButton.textContent = 'Скрыть блок';
        statusElement.textContent = 'Статус: блок виден';
        statusElement.style.borderLeftColor = '#28a745';
        statusElement.style.backgroundColor = '#f8f9fa';
    }
});