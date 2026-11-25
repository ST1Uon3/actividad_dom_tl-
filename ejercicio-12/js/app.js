const numero = document.getElementById('numero');
const boton = document.getElementById('boton');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', function () {
    let valorNumero = numero.value.trim();
    let num = Number(valorNumero);

    if (valorNumero === '') {
        resultado.innerHTML = 'Ingresa un numero por favor'
    } else {
        resultado.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let multiplicacion = num * i;
            resultado.innerHTML += `<tr><td>${num} × ${i}</td><td>${multiplicacion}</td></tr>`;
        }
        numero.value = ''
    }
})

