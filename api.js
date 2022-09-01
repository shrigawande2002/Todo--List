const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event){
event.preventDefault();

const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
//creating li

const newTodo = document.createElement('li');
newTodo.innerText= todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//checkmarkl
const completeButton = document.createElement('button');
completeButton.innerHTML='<i class ="fas fa-check"></i>';
completeButton.classList.add('complete-btn');
todoDiv.appendChild(completeButton);

const trashteButton = document.createElement('button');
trashteButton.innerHTML='<i class ="fas fa-trash"></i>';
trashteButton.classList.add('trash-btn');
todoDiv.appendChild(trashteButton);

//append to list 

todoList.appendChild(todoDiv);

todoInput.value="";


}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        
    }


        if(item.classList[0]=== "complete-btn"){
            const todo= item.parentElement;
            todo.classList.toggle('complete');
        }
}