const peso = document.getElementById('peso');
const estatura = document.getElementById('estatura');
const boton = document.getElementById('boton');
let resultado = document.getElementById('resultado');

boton.addEventListener('click', function() {
    let valorPeso = Number(peso.value)
    let valorEstatura = Number(estatura.value)

    if (valorPeso <= 0) {
        resultado.innerText = "Dato no valido! tu peso es menor o igual a cero, cambialo por favor.";
    }else if (valorEstatura <= 0) {
        resultado.innerText = "Dato no valido! tu estatura es menor o igual a cero, cambiala por favor.";
    }else{
        let estaturaMetros = valorEstatura / 100;
        let imc = valorPeso / (estaturaMetros * estaturaMetros);
        resultado.innerText = "Tu IMC es: " + imc.toFixed(2);

        if (imc >= 30.0) {
            resultado.style.color = 'red'
        } else if (imc > 18.5) {
            resultado.style.color = 'green'
        } else if ( imc <= 18.5) {
            resultado.style.color = 'blue'
        }
    }

})


