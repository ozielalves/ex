// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const header = document.querySelector('header');
const todo_on = document.querySelector('todo');


// Event Listeners
todoButton.addEventListener('click', addTodo);
// Removing big shadow
todoButton.addEventListener('click', () => {
    header.classList.add('not-blank');
});
todoList.addEventListener('click', deleteCheck);


// Functions
function addTodo(event) {
    // Prevent from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to Todo List
    todoList.appendChild(todoDiv);
    // Clear Todo INPUT VALUE
    todoInput.value = "";
};

function deleteCheck(e) {
    const item = e.target;
    //DELTE TODO
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // The Event Animation
        todo.classList.toggle('fadeOut');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        }); 
    }
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}