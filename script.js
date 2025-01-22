function appendNumber(value) {
    const display = document.getElementById('calc-display');
    display.value += value;
}

function clearCalc() {
    document.getElementById('calc-display').value = '';
}

function deleteLast() {
    const display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/')) || '';
    } catch (error) {
        display.value = 'Error';
    }
}


const facts = [
    "Tahukah kamu? Pi (π) adalah angka yang tidak pernah berakhir!",
    "Matematika digunakan untuk mempelajari pola dalam alam semesta.",
    "Angka 0 ditemukan oleh matematikawan India bernama Brahmagupta.",
    "E adalah basis logaritma natural, dengan nilai mendekati 2,718.",
    "Seorang matematikawan bernama Paul Erdős memiliki lebih dari 1.500 publikasi!",
    "Fibonacci adalah urutan angka yang ditemukan dalam banyak pola di alam.",
    "Sudut segitiga dalam sebuah segitiga selalu berjumlah 180 derajat.",
];

function generateNewFact() {
    const factElement = document.getElementById('fact-text');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

