const itemList = document.getElementById('itemList');
const addButton = document.getElementById('addButton');

let itemCounter = 4;

itemList.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    if (clickedElement.tagName === 'LI') {
        clickedElement.textContent = 'Нажато!';
        
        clickedElement.classList.add('clicked');
    }
});

addButton.addEventListener('click', function() {
    itemCounter++;
    
    const newItem = document.createElement('li');
    newItem.textContent = `Новый элемент ${itemCounter}`;
    
    itemList.appendChild(newItem);
});