const state = {
    count: 0,
    maxValue: 0,
    minValue: 0,
    totalChanges: 0,
    history: []
};

const counterText = document.getElementById('counterText');
const counterVisual = document.getElementById('counterVisual');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const resetButton = document.getElementById('resetButton');
const currentValue = document.getElementById('currentValue');
const maxValue = document.getElementById('maxValue');
const minValue = document.getElementById('minValue');
const totalChanges = document.getElementById('totalChanges');
const historyList = document.getElementById('historyList');
const emptyHistory = document.getElementById('emptyHistory');

function updateCounterDisplay() {
    counterText.textContent = `Счетчик: ${state.count}`;
    
    counterVisual.textContent = state.count;
    
    if (state.count > 0) {
        counterVisual.style.color = '#27ae60';
    } else if (state.count < 0) {
        counterVisual.style.color = '#e74c3c';
    } else {
        counterVisual.style.color = '#2c3e50';
    }
    
    counterVisual.classList.add('pulse');
    setTimeout(() => {
        counterVisual.classList.remove('pulse');
    }, 300);
}

function updateStateInfo() {
    currentValue.textContent = state.count;
    maxValue.textContent = state.maxValue;
    minValue.textContent = state.minValue;
    totalChanges.textContent = state.totalChanges;
}

function addToHistory(action) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const historyItem = {
        action: action,
        value: state.count,
        time: timeString
    };
    
    state.history.unshift(historyItem);
    
    if (state.history.length > 10) {
        state.history = state.history.slice(0, 10);
    }
    
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyList.innerHTML = '';
    
    if (state.history.length === 0) {
        emptyHistory.style.display = 'block';
        return;
    }
    emptyHistory.style.display = 'none';
    
    state.history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = `history-item ${item.action}`;
        
        let actionText = '';
        switch (item.action) {
            case 'increase':
                actionText = 'Увеличено до';
                break;
            case 'decrease':
                actionText = 'Уменьшено до';
                break;
            case 'reset':
                actionText = 'Сброшено до';
                break;
        }
        
        historyItem.innerHTML = `
            <span>${actionText} <span class="history-value">${item.value}</span></span>
            <span class="history-time">${item.time}</span>
        `;
        
        historyList.appendChild(historyItem);
    });
}

function updateExtremes() {
    if (state.count > state.maxValue) {
        state.maxValue = state.count;
    }
    
    if (state.count < state.minValue) {
        state.minValue = state.count;
    }
}

function increaseCount() {
    state.count += 1;
    state.totalChanges += 1;
    
    updateExtremes();
    updateCounterDisplay();
    updateStateInfo();
    addToHistory('increase');
}

function decreaseCount() {
    state.count -= 1;
    state.totalChanges += 1;
    
    updateExtremes();
    updateCounterDisplay();
    updateStateInfo();
    addToHistory('decrease');
}

function resetCount() {
    state.count = 0;
    state.totalChanges += 1;
    
    updateCounterDisplay();
    updateStateInfo();
    addToHistory('reset');
}

increaseButton.addEventListener('click', increaseCount);

decreaseButton.addEventListener('click', decreaseCount);

resetButton.addEventListener('click', resetCount);

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case '+':
        case '=':
            increaseCount();
            break;
        case '-':
        case '_':
            decreaseCount();
            break;
        case '0':
        case 'r':
        case 'R':
            if (event.ctrlKey) {
                resetCount();
            }
            break;
        case 'Escape':
            resetCount();
            break;
    }
});

function init() {
    updateCounterDisplay();
    updateStateInfo();
    updateHistoryDisplay();
    
    state.maxValue = state.count;
    state.minValue = state.count;
    
    addToHistory('reset');
}

init();