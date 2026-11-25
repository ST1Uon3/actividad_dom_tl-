let circuloVerde = document.getElementById('circuloVerde')
let circuloAmarillo = document.getElementById('circuloAmarillo')
let circuloRojo = document.getElementById('circuloRojo')

const botonVerde = document.getElementById('botonVerde')
const botonAmarillo = document.getElementById('botonAmarillo')
const botonRojo= document.getElementById('botonRojo')

const puedesAvanzar = document.getElementById('puedesAvanzar')
const precaucion = document.getElementById('precaucion')
const detente = document.getElementById('detente')


botonVerde.addEventListener('click', function() {
    circuloVerde.style.backgroundColor = 'green'
    circuloAmarillo.style.backgroundColor = ''
    circuloRojo.style.backgroundColor = ''
    puedesAvanzar.innerText = 'Puedes avanzar, ten un lindo día'
    precaucion.innerText = ''
    detente.innerText = ''
    
});

botonAmarillo.addEventListener('click', function() {
    circuloAmarillo.style.backgroundColor = 'yellow'
    circuloVerde.style.backgroundColor = ''
    circuloRojo.style.backgroundColor = ''
    precaucion.innerText = 'Ten Precaución'
    puedesAvanzar.innerText = ''
    detente.innerText = ''
});

botonRojo.addEventListener('click', function() {
    circuloRojo.style.backgroundColor = 'red'
    circuloAmarillo.style.backgroundColor = ''
    circuloVerde.style.backgroundColor = ''
    detente.innerText = 'Detente!'
    precaucion.innerText = ''
    puedesAvanzar.innerText = ''
});