const formulario = document.getElementById('formulario')
let nombre = document.getElementById('nombre')
let correo = document.getElementById('correo')
let edad = document.getElementById('edad')
const avisoNombre = document.getElementById('avisoNombre')
const avisoCorreo = document.getElementById('avisoCorreo')
const avisoEdad = document.getElementById('avisoEdad')
const boton = document.getElementById('boton')
const mensajeExito = document.getElementById('mensajeExito')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()


    let valorNombre = nombre.value
    let valorCorreo = correo.value
    let valorEdad = edad.value

    if (valorNombre === "") {
        avisoNombre.innerText = 'Por favor ingresa tu nombre completo, sin simbolos. Asegurate de no tener ningun campo vacio.'
    } else {
        avisoNombre.innerText = '' 
    }

    if (valorCorreo.includes('@')) {
        avisoCorreo.innerText = ''
    } else {
        avisoCorreo.innerText = 'Por favor ingresa tu correo y asegurate de incluir el signo: @. Asegurate de no tener ningun campo vacio.'
    }

    if (valorEdad >= 18) {
        avisoEdad.innerText = ''
    } else {
        avisoEdad.innerText = 'Por favor ingresa tu edad, debes ser mayor de edad. Asegurate de no tener ningun campo vacio.'
    }

    if (valorNombre && valorCorreo && valorEdad) {
        mensajeExito.innerText = 'Registro completado correctamente'
    } else {
        mensajeExito.innerText = ''
    }
});

