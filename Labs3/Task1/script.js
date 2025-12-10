// Получаем ссылки на элементы по их ID
const titleElement = document.getElementById('mainTitle');
const buttonElement = document.getElementById('changeButton');
const changeCountElement = document.getElementById('changeCount');

// Счетчик изменений
let changeCount = 0;

// Добавляем обработчик события click на кнопку
buttonElement.addEventListener('click', function() {
    // Изменяем textContent элемента h1
    titleElement.textContent = 'Заголовок изменен!';
    
    // Добавляем визуальный эффект
    titleElement.classList.add('changed');
    
    // Увеличиваем счетчик изменений
    changeCount++;
    changeCountElement.textContent = changeCount;
    
    // Через 0.5 секунды убираем класс с эффектом
    setTimeout(() => {
        titleElement.classList.remove('changed');
    }, 500);
    
    // Меняем текст кнопки после первого клика
    if (changeCount === 1) {
        buttonElement.textContent = 'Изменить заголовок снова';
    }
});

// Добавим дополнительную функциональность: 
// Возможность вернуть исходный текст при двойном клике на заголовок
titleElement.addEventListener('dblclick', function() {
    titleElement.textContent = 'Привет, мир!';
    changeCount = 0;
    changeCountElement.textContent = changeCount;
    buttonElement.textContent = 'Изменить заголовок';
    titleElement.classList.add('changed');
    
    setTimeout(() => {
        titleElement.classList.remove('changed');
    }, 500);
});