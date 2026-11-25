const inputText = document.getElementById('inputText');
const taskList = document.getElementById('taskList');

inputText.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        taskList.innerText = "Nueva Tarea: " + inputText.value;
        inputText.value = ""
    }
});



