const card = document.querySelector('.card');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');
const rosa = document.getElementById('rosa');

azul.addEventListener('click', function () {
    card.style.backgroundColor = 'blue';
});

verde.addEventListener('click', function () {
    card.style.backgroundColor = 'green';
});

amarillo.addEventListener('click', function () {
    card.style.backgroundColor = 'yellow';
});

rosa.addEventListener('click', function () {
    card.style.backgroundColor = 'pink';
});