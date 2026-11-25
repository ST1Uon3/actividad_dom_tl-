const clave = document.getElementById('clave')
const textoAyuda = document.getElementById('textoAyuda')

clave.addEventListener('keyup', function() {
    let longitud = clave.value.length;

    if (longitud === 0) {
        textoAyuda.innerText = 'No contraseña aún'
        textoAyuda.style.color = 'black'
    }
    else if (longitud >= 10) {
        textoAyuda.innerText = 'Contraseña muy fuerte',
        textoAyuda.style.color = 'green';
    } else if (longitud >= 6) {
        textoAyuda.innerText = 'Contraseña aceptable',
        textoAyuda.style.color = 'yellow';
    } else if (longitud < 6) {
        textoAyuda.innerText = 'Contraseña muy corta';
        textoAyuda.style.color = 'red'
    }
    
});