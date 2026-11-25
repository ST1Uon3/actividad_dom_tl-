const areaDeTexto = document.getElementById('textarea')
const duplica = document.getElementById('duplicado')

areaDeTexto.addEventListener('keyup', function () {
    duplica.innerText = areaDeTexto.value
});