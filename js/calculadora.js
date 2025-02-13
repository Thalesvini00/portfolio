let display = document.getElementById('display');

function clearDisplay() { //substitui todos os número presentes pelo espaço em branco
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
        display.value = eval(display.value);
}
