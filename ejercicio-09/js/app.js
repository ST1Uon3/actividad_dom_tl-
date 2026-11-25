const nombre = document.getElementById('nombre')
const profesion = document.getElementById('profesion')
const imagen = document.getElementById('imagen')
let nuevoNombre = document.getElementById('nuevoNombre')
let nuevaProfesion = document.getElementById('nuevaProfesion')
let nuevaImagen = document.getElementById('nuevaImagen')

nombre.addEventListener('input', function() {
    let valorNombre = nombre.value

    if (valorNombre === "") {
        nuevoNombre.innerText = "Nombre: luna"
    } else {
        nuevoNombre.innerText = "Nombre: " + valorNombre
    }
})

profesion.addEventListener('input', function() {
    let valorProfesion = profesion.value

    if (valorProfesion === "") {
        nuevaProfesion.innerText = "Profesion: satelite natural" 
    } else {
        nuevaProfesion.innerText = "Profesion: " + valorProfesion
    }      
})

imagen.addEventListener('input', function() {
    let valorImagen = imagen.value

    if (valorImagen === "") {
        nuevaImagen.src = "../img/luna.jpeg" 
    } else {
        nuevaImagen.src = valorImagen.trim()
    }
})