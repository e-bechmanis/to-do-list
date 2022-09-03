// Event delegation for 'delete' buttons
// Delegating listening to the parent node
document.getElementById('task-list')
    .addEventListener('click', event => {
      if (event.target.className === 'delete-btn') {
        event.target.parentNode.remove();
      }
    });

const taskForm = document.forms['add-task'];
const taskInput = document.getElementById('input-task');
const tasks = document.getElementById('task-list');

function addTask(event){
    event.preventDefault(); //preventing page from reloading after submission
     // getting list element
    let newTask = document.createTextNode(taskInput.value);
    let task = document.createElement('span'); 
    task.setAttribute('class', 'task');
    task.appendChild(newTask);

    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete-btn');
    deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-delete-left fa-2xl"></i>';

    listItem.append(checkbox, task, deleteButton);
    tasks.appendChild(listItem);
    taskForm.reset(); //clearing the input*/
}

taskForm.addEventListener('submit', addTask);
