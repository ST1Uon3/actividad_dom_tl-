const tarea = document.getElementById("tarea");
const selector = document.getElementById("selector");
const boton = document.getElementById("boton");
const listaTareas = document.getElementById("listaTareas");
const tareasPendientes = document.getElementById("tareasPendientes");

let pendientes = 0;

boton.addEventListener("click", function () {
  if (tarea.value.trim() !== "") {
    pendientes++;
    tareasPendientes.innerText = "Tareas pendientes: " + pendientes;

    const item = document.createElement("li");
    item.dataset.completada = "false";
    const contenidoItem = document.createElement("span");
    contenidoItem.innerText = `${tarea.value.trim()} (${selector.value}) `;

    const botonCompletar = document.createElement("button");
    botonCompletar.innerText = "Completar";
    botonCompletar.type = "button";
    botonCompletar.classList.add("btn-completar");

    botonCompletar.addEventListener("click", function () {
      contenidoItem.style.textDecoration = "line-through";
      item.dataset.completada = "true";
      pendientes--;
      tareasPendientes.innerText = "Tareas pendientes: " + pendientes;
      botonCompletar.disabled = true;
    });

    item.appendChild(contenidoItem);
    item.appendChild(botonCompletar);
    listaTareas.appendChild(item);

    tarea.value = "";
  }
});

const botonEliminar = document.getElementById('botonEliminar')

botonEliminar.addEventListener("click", function () {
  const ultimaTarea = listaTareas.lastElementChild;
  if (!ultimaTarea) return;

  if (ultimaTarea.dataset.completada !== "true") {
    pendientes--;
    tareasPendientes.innerText = "Tareas pendientes: " + pendientes;
  }

  ultimaTarea.remove();
});

function aplicarFiltro(modo) {
  const items = listaTareas.querySelectorAll("li");

  items.forEach(function (li) {
    const estaCompletada = li.dataset.completada === "true";

    if (modo === "todas") {
      li.style.display = "";
    } else if (modo === "pendientes") {
      li.style.display = estaCompletada ? "none" : "";
    } else if (modo === "completadas") {
      li.style.display = estaCompletada ? "" : "none";
    }
  });
}

document.getElementById("filtroTodas").addEventListener("click", function () {
  aplicarFiltro("todas");
});

document.getElementById("filtroPendientes").addEventListener("click", function () {
  aplicarFiltro("pendientes");
});

document.getElementById("filtroCompletadas").addEventListener("click", function () {
  aplicarFiltro("completadas");
});
