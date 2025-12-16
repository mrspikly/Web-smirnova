const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    messageDiv.textContent = '';
    messageDiv.className = '';
    messageDiv.style.display = 'none';
    
    let hasError = false;
    
    if (nameInput.value.trim() === '') {
        showMessage('Поле "Имя" не может быть пустым', 'error');
        nameInput.style.borderColor = '#c62828';
        hasError = true;
    } else {
        nameInput.style.borderColor = '';
    }
    
    if (emailInput.value.trim() === '') {
        showMessage('Поле "Email" не может быть пустым', 'error');
        emailInput.style.borderColor = '#c62828';
        hasError = true;
    } else {
        emailInput.style.borderColor = '';
    }
    
    if (!hasError) {
        showMessage('Форма успешно отправлена (в консоль)!', 'success');
        
        const formData = new FormData();
        formData.append('name', nameInput.value);
        formData.append('email', emailInput.value);
        
        console.log('Данные формы:');
        console.log('Имя:', nameInput.value);
        console.log('Email:', emailInput.value);
        
        console.log('FormData объект:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
});

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = type;
    messageDiv.style.display = 'block';
}