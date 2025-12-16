const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const itemList = document.getElementById('itemList');
const emptyMessage = document.getElementById('emptyMessage');
const itemCount = document.getElementById('itemCount');

function updateItemCount() {
    const count = itemList.children.length;
    itemCount.textContent = count;
    
    if (count === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function addListItem() {
    const inputText = itemInput.value.trim();
    
    if (inputText === '') {
        itemInput.style.borderColor = '#e74c3c';
        itemInput.placeholder = 'Введите текст перед добавлением!';
        setTimeout(() => {
            itemInput.style.borderColor = '#ddd';
            itemInput.placeholder = 'Введите текст для нового пункта...';
        }, 2000);
        return;
    }
    
    const newListItem = document.createElement('li');
    
    const itemText = document.createElement('span');
    itemText.className = 'item-text';
    itemText.textContent = inputText;
    
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-btn';
    removeButton.textContent = 'Удалить';
    
    removeButton.addEventListener('click', function() {
        newListItem.remove();
        updateItemCount();
    });
    
    newListItem.appendChild(itemText);
    newListItem.appendChild(removeButton);
    
    itemList.appendChild(newListItem);
    
    itemInput.value = '';
    
    itemInput.focus();
    
    updateItemCount();
    
    newListItem.style.backgroundColor = '#d4edda';
    setTimeout(() => {
        newListItem.style.backgroundColor = '';
    }, 300);
}

function clearList() {
    if (itemList.children.length === 0) {
        const originalColor = clearButton.style.backgroundColor;
        clearButton.style.backgroundColor = '#f39c12';
        setTimeout(() => {
            clearButton.style.backgroundColor = originalColor;
        }, 300);
        return;
    }
    
    if (confirm('Вы уверены, что хотите удалить все элементы списка?')) {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
        
        updateItemCount();
        
        clearButton.style.backgroundColor = '#2ecc71';
        setTimeout(() => {
            clearButton.style.backgroundColor = '';
        }, 300);
    }
}

addButton.addEventListener('click', addListItem);

clearButton.addEventListener('click', clearList);

itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addListItem();
    }
});

updateItemCount();