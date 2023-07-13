//adding lists in the ul

let inputElement = document.querySelector('input');
let listContainer = document.querySelector('#list-container');
let addButton = document.querySelector('button');


// create a function to take in tasks within input

function createNewTask() {
    let  input = inputElement.value;

// create the li element 

    let listElement = document.createElement('li');

    // creating input values in form of strings

    listElement.innerText = input;

    // adding the created strings

    return listElement;
}

function addElementToToListContainer() {
    let newTask = createNewTask();
    listContainer.appendChild(newTask);
    inputElement.value = "";
}

function saveTaskToLocalStorage() {
    // capture value of input
    let task = inputElement.value;
    // check if there's any item in localStorage
    let taskArray = [task];
    let myRawTodos = localStorage.getItem('to-dos');

    if (myRawTodos !== null) {
        let myTodos = JSON.parse(myRawTodos);
        myTodos.push(task);
        localStorage.setItem('to-dos', JSON.stringify(myTodos));
    }
    else {
        localStorage.setItem('to-dos', JSON.stringify(taskArray));
    }
}
// add an eventListener to the button

addButton.addEventListener('click', function() {
    saveTaskToLocalStorage();
    addElementToToListContainer();
})

// add tasks from localStorage

let myTasksFromLocalStorage = JSON.parse(localStorage.getItem('to-dos'));
let listElements = myTasksFromLocalStorage.map((task) => {
    // create the li element 
    
        let listElement = document.createElement('li');
    
        // creating input values in form of strings
    
        listElement.innerText = task;
        
        return listElement;
})

listContainer.append(...listElements);

function editMyTasks(tasks) {
    
}












/*

// adding content and data to localStorage

localStorage.setItem('text', 'tasks');

// getting item in localStorage

localStorage.getItem('text');

// storing tasks in localStorage

let tasks = ["Go to the gym", "Push Todo List Application to GitHub",
"Complete JavaScript course on LMS", "Discuss with team members", "Finish frontend mentor JavaScript Challenges"];

localStorage.setItem('myTasks', JSON.stringify(tasks));

// getting tasks from localStorage
JSON.parse(localStorage.getItem('myTasks')); */


























/* const Container = document.getElementById("container");
const Items = document.getElementById("items");
const Text = document.getElementById("text");

// accessing and getting items in localStorage
let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo") || "[]";
    
    return JSON.parse(value);
}

function setItems(items) {
    // taking the itemsArray and converting to JSON for localStorage
    const itemsJson = JSON.stringify(items);

      // resetting JSON back to array inside storage
    localStorage.setItems("todo", itemsJson);
}

function addItem() {
    items.unshift({
        description: "",
        finished: false
    })
   // after items have been finished setItems will save in localStorage
    setItems(items);
    // refreshList takes items and renders to the user
    refreshList();
}


function refreshList() {
    // todo sort items
    Container.innerHTML = "";

    for (const item of items) {
        const itemElement = Items.contentEditable.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const finishedInput = itemElement.querySelector(".item-finished");

        descriptionInput.value = item.description;
        finishedInput.checked = item.finished;

        Container.append(itemElement);
    }
}

Text.addEventListener("click", () => {
     addItem();
});

refreshList(); */










