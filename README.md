# Ejercicios de Manipulación del DOM

Colección de 15 ejercicios prácticos de JavaScript y manipulación del DOM organizados en capas por cada ejercicio, compartiendo una estructura visual uniforme basada en tarjetas centradas y una paleta de colores global.

## Estructura por Ejercicio

Cada carpeta o ejercicio sigue la misma separación de responsabilidades:

```
ejercicio-01/
├── index.html      # Estructura semántica y elementos del DOM
├── css/
│   └── styles.css  # Estilos visuales, variables (:root) y diseño responsive
└── js/
    └── app.js      # Lógica del DOM, eventos y estados dinámicos
```

## Paleta de Colores (`:root`)

Todos los ejercicios comparten las siguientes variables CSS definidas en `css/styles.css`:

| Variable | Hex | Uso principal |
| :--- | :--- | :--- |
| `--negro` | `#121212` | Textos principales, contrastes y elementos oscuros |
| `--gris` | `#5e5e5e` | Textos descriptivos, placeholders y bordes neutros |
| `--gris-claro` | `#d6d1c7` | Bordes de tarjetas, contenedores y estados deshabilitados |
| `--dorado` | `#c9a227` | Acento superior, enfoque de campos y botones secundarios |
| `--rojo` | `#b3262e` | Acciones principales (`:hover` y botones primarios) y alertas |
| `--beige` | `#f3ead9` | Fondo general de la página y superficies de apoyo |

## Ejercicios Incluidos (1 al 15)

1. **Saludo personalizado:** Toma el nombre escrito por una persona y la saluda en la misma página.
2. **Contador de clics:** Cuenta cuántas veces se presiona un botón, permite reiniciar y resalta en verde al llegar a 10 clics.
3. **Vista previa de texto:** Muestra en tiempo real el texto escrito en otro elemento de la página mientras se digita.
4. **Cambiador de color:** Cambia el color de fondo de una tarjeta según la opción elegida en un selector.
5. **Mensaje al presionar Enter:** Muestra una tarea y limpia el campo cuando el usuario presiona la tecla Enter.
6. **Calculadora de IMC:** Calcula el Índice de Masa Corporal a partir de peso y estatura con validación y color según rango.
7. **Verificador de contraseña:** Evalúa la longitud de la contraseña mientras se escribe y actualiza el mensaje y su color.
8. **Lista de compras:** Agrega productos a una lista visible evitando entradas vacías con avisos en la página.
9. **Tarjeta de perfil en vivo:** Actualiza nombre, profesión y foto de una tarjeta en tiempo real desde un formulario.
10. **Semáforo interactivo:** Simula un semáforo iluminando una luz a la vez y mostrando su mensaje de estado.
11. **Formulario de registro con validación:** Valida nombre, correo y edad sin recargar la página y muestra errores o confirmación.
12. **Generador de tabla de multiplicar:** Genera la tabla del 1 al 10 para el número ingresado dentro de la vista.
13. **Galería de imágenes con miniaturas:** Cambia la imagen principal, su título y la clase activa al hacer clic en una miniatura.
14. **Calculadora de presupuesto:** Registra presupuesto inicial y gastos mostrando total gastado, restante y alerta si es negativo.
15. **Gestor de tareas con estado:** Registra tareas con prioridad, marca completadas, elimina, filtra y actualiza pendientes.

## Convenciones del Proyecto

* **Preservación de Selectores:** Los `id`, clases y atributos esperados por `js/app.js` se mantienen estables al aplicar los estilos.
* **Flujo de Trabajo:** Primero estructura HTML, luego estilos CSS y finalmente lógica en JavaScript, definiendo antes la interacción esperada.
* **Commits:** El historial sigue la convención de *Conventional Commits* (`style(...)`, `feat(...)`, `fix(...)`, `docs(...)`).