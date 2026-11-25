const presupuesto = document.getElementById('presupuesto')
const nombreGasto = document.getElementById('nombreGasto')
const precioGasto = document.getElementById('precioGasto')
const boton = document.getElementById('boton')
const lista = document.getElementById('lista')
const totalPresupuesto = document.getElementById('totalPresupuesto')
const totalGasto = document.getElementById('totalGasto')
const dineroRestante = document.getElementById('dineroRestante')
const alertaPresupuesto = document.getElementById('alertaPresupuesto')

let valorTotalGasto = 0

boton.addEventListener('click', function() {
    let valorPresupuesto = presupuesto.value
    let valorNombreGasto = nombreGasto.value
    let valorPrecioGasto = precioGasto.value
    let monto = Number(valorPrecioGasto)
    let montoPresupuesto = Number(valorPresupuesto)

    if (monto > 0 && montoPresupuesto > 0) {
        valorTotalGasto += monto

        lista.innerHTML  += `<li>${valorNombreGasto.trim()} - $${monto}</li>`

        let restante = montoPresupuesto - valorTotalGasto
        totalPresupuesto.innerText = 'Tu presupuesto es: ' + montoPresupuesto
        totalGasto.innerText = 'Tu gasto total es de: ' + valorTotalGasto
        dineroRestante.innerText = 'Tu dinero restante es de: ' + restante
        
        if (restante < 0) {
            dineroRestante.style.color = 'red'
            alertaPresupuesto.innerText = 'Has superado tu presupuesto!'
            alertaPresupuesto.style.color = 'red'
        } else {
            dineroRestante.style.color = ''
            alertaPresupuesto.innerText = ''
            alertaPresupuesto.style.color = ''
        }
        nombreGasto.value = ''
        precioGasto.value = ''
    }
})