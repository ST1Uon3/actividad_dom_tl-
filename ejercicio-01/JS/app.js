let nombreUsuario = document.getElementById("nombre");
let boton = document.getElementById("btn-saludar");
let texto = document.getElementById("texto");

boton.addEventListener("click", function () {
    if (nombreUsuario.value === "") {
        texto.textContent = "por favor ingresa tu nombre.";
    } else {
        texto.textContent = "Hola, " + nombreUsuario.value + ", Bienvenido.";
    }
});
