const producto = document.getElementById('producto')
const boton = document.getElementById('boton')
const lista = document.getElementById('lista')
const aviso = document.getElementById('aviso')

boton.addEventListener('click', function() {
    let valorProducto = (producto.value)

    if (valorProducto.trim() === "") {
    aviso.innerText = "No has ingresado ninguna clase de producto, por favor ingresa alguna, ejm: leche";
    } else {
        aviso.innerText = ""
        let item = document.createElement('li')
        item.innerText = valorProducto
        lista.appendChild(item)
        producto.value = ""
        
} 
});
