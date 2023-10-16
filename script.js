// Pon a prueba tus conocimientos sobre JavaScript aqui

// Array para almacenar todas las tareas
const tasks = [];

// Obtengo las referencias a los elementos del DOM
const taskInput = document.getElementById('taskInput'); // Obtengo el input donde se ingresa la tarea
const addTaskButton = document.getElementById('addTaskButton'); // Obtengo el botón para agregar tareas
const taskList = document.getElementById('taskList'); // Obtengo la lista de tareas en el DOM

let idTask = 1; // Contador para el identificador ùnico

// Función para agregar una tarea
function addTask() {
  const taskText = taskInput.value; // Obtengo el texto ingresado en el input
  if (taskText.trim() !== '') { // Verificar que el texto no esté vacío después de eliminar espacios en blanco
    const task = { // Crear un objeto de tarea con id, nombre y completada
      id: idTask++, // Generar un identificador único autoincrementado
      nombre: taskText, // Nombre de la tarea como el texto ingresado
      completada: false // Inicialmente, la tarea no está completada
    };
    tasks.push(task); // Añado la tarea al array
    updateTaskList(); // Actualizo la lista de tareas en el DOM
    taskInput.value = ''; // Limpio el input después de agregar la tarea
  }
}

// Función para actualizar la lista de tareas en el DOM
function updateTaskList() {
  taskList.innerHTML = ''; // Limpio el contenido actual de la lista de tareas en el DOM
  tasks.forEach((task, index) => { // Itero a través de todas las tareas en el array
    const listItem = document.createElement('li'); // Creo un elemento <li> para cada tarea
    listItem.innerHTML = `
      <article>
        <input type="checkbox" class="task-checkbox" ${task.completada ? 'checked' : ''}>
        <span class="task-text">${task.nombre}</span>
      </article>
      <i class="fa fa-trash" data-index="${index}"></i>
    `;
    taskList.appendChild(listItem); // Añado el elemento <li> a la lista de tareas en el DOM

    // Agregar evento para marcar tarea como completada cuando el checkbox cambie
    const checkbox = listItem.querySelector('.task-checkbox');
    checkbox.addEventListener('change', () => {
      tasks[index].completada = checkbox.checked; // Actualizar el estado de completada de la tarea en el array
    });

    // Agregar evento para eliminar tarea al hacer clic en el ícono de basura
    const deleteIcon = listItem.querySelector('.fa-trash');
    deleteIcon.addEventListener('click', () => {
      tasks.splice(index, 1); // Eliminar la tarea del array
      updateTaskList(); // Actualizar la lista de tareas en el DOM después de eliminar
    });
  });
}

// Agregar evento para agregar tarea al hacer clic en el botón
addTaskButton.addEventListener('click', addTask);

// Agregar evento para agregar tarea al presionar Enter en el input
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask(); // Llamo a la función para agregar tarea cuando se presione Enter
  }
});

// Actualizar la lista de tareas inicialmente
updateTaskList();

/* Hoisting */
console.log(messageTest1); // Al ser una variable var y estar declarada despues del console.log imprime "undefined" o nada por consola
var messageTest1 = 'Prueba 1';
console.log(messageTest1); // Imprime 'Prueba 1' al ya haber sido declarada

/* Scopes */

let messageTest2 = 'Fuera de la función, variable global';

function testScope() {
  let messageTest2 = 'Dentro de la función, variable local';
  console.log(messageTest2);
}

testScope();  // Imprime -> Dentro de la función, variable local

console.log(messageTest2);  // Imprime -> Fuera de la función, variable global