const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 

// add event listener for todoButton
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
editButton.addEventListener('click', editList)


// create function Todo for eventListener addButton 
// so there's response everytiem we click on button
function addTodo(event) {
    // prevent form from submit after refreshing while running log to the console
    event.preventDefault();
    // Todo DIV inside <ul>
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creating Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Add toDo to LocalStorage

    saveLocalTodos(todoInput.value);    // completed button appended to the DIV

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash Added Button appended to the DIV

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Add edit button
    const editButton = document.createElement("button")
    editButton.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>';
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);

    // Append to the List
    todoList.appendChild(todoDiv);

    // clear todo Input value
    todoInput.value = "";
}

// edit button activation
function editList(event) {
    const newTask = prompt('Enter task:');
    
    if (localStorage.getItem('todos') === null) {
        // if there's nothing existent
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// create function deleteCheck
function deleteCheck(event) {
    const item = event.target;

    // deleting the todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove(todo);
    }

    // checkmark activated
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


// Implementing localStorage

function saveLocalTodos(todo) {
    // check if there's anything saved
    let todos;
    if (localStorage.getItem('todos') === null) {
        // if there's nothing existent
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodos(todo) {
     // check if there's anything saved
     let todos;
     if (localStorage.getItem('todos') === null) {
         // if there's nothing existent
         todos = [];
     } else {
        todos = JSON.parse(localStorage.getItem('todos'));
     }
     const todoIndex = todo.children[0].innerText;
     todos.splice(todos.indexOf(todoIndex), 1);
     localStorage.setItem('todos', JSON.stringify(todos));     
}   

