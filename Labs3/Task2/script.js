const targetDiv = document.getElementById('targetDiv');
const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('statusText');
const counterElement = document.getElementById('counter');

let toggleCount = 0;

function updateStatus() {
    toggleCount++;
    counterElement.textContent = toggleCount;
    
    if (targetDiv.classList.contains('highlight')) {
        statusText.textContent = 'Класс "highlight" применён';
        statusText.style.color = '#27ae60';
    } else {
        statusText.textContent = 'Класс "highlight" не применён';
        statusText.style.color = '#2c3e50';
    }
}

toggleButton.addEventListener('click', function() {
    targetDiv.classList.toggle('highlight');
    
    updateStatus();
});

targetDiv.addEventListener('click', function() {
    targetDiv.classList.toggle('highlight');

    updateStatus();
});

updateStatus();

toggleButton.addEventListener('click', function firstClickAnimation() {
    if (toggleCount === 1) {
        toggleButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            toggleButton.style.transform = '';
        }, 300);
    }

    if (toggleCount > 0) {
        toggleButton.removeEventListener('click', firstClickAnimation);
    }
});