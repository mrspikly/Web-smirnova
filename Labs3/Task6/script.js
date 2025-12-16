const itemList = document.getElementById('itemList');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild;
    
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
});