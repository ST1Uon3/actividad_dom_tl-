const numero = document.getElementById("numero");
const sumarClick = document.getElementById("sumarClick");
const reiniciar = document.getElementById("reiniciar");

let contador = 0;

sumarClick.addEventListener("click", function () {
    contador += 1;
    numero.textContent = contador;
    if (contador >= 10) {
        numero.style.color = "green";
    } else {
        numero.style.color = "blue";
    }
});

reiniciar.addEventListener("click", function () {
    contador = 0;
    numero.textContent = contador;
    numero.style.color = "black";
});
