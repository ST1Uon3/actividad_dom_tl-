const imagenPrincipal = document.getElementById('imagenPrincipal')
const tituloImagenPrincipal = document.getElementById('tituloImagenPrincipal')
const miniatura = document.querySelectorAll('.miniatura')

miniatura.forEach(function(item) {
    item.addEventListener('click', function() {
        imagenPrincipal.src  = item.src
        imagenPrincipal.alt = item.alt
        tituloImagenPrincipal.innerText = item.alt

        miniatura.forEach(function(otroItem) {
            otroItem.classList.remove('activa')
        })
        item.classList.add('activa')

    })
});