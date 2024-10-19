function appendNumber(number) {
    const screen = document.getElementById('screen');
    screen.value += number;
}

function appendOperator(operator) {
    const screen = document.getElementById('screen');
    if (screen.value === '') return;
    screen.value += ` ${operator} `;
}

function appendDot() {
    const screen = document.getElementById('screen');
    if (!screen.value.includes('.')) {
        screen.value += '.';
    }
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('screen').value = '';
}
