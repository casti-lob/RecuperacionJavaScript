addTask = document.querySelector('#addTask');

addTask.addEventListener('click',(e)=>{
    newTask = document.querySelector('.new-task-container input').value
    newTaskInIncomplete(newTask)
})

//intermedio
incompleteToComplete= document.querySelector('.todo-list ul');

incompleteToComplete.addEventListener('click',(e)=>{
    element = e.target
    li = element.parentElement;
    textTask =li.children[1].textContent;
   
    addTaskToComplete(textTask)
    deleteTask(li)
   
    
})

//Borrado te tareas
completeTasks= document.querySelector(".complete-list ul")

completeTasks.addEventListener('click',(e)=>{
    const button = e.target;
    li = button.parentElement;
    deleteTask(li);
})


function addTaskToComplete(textTask){
   ul = document.querySelector(".complete-list ul")
   textComplete = document.createTextNode(textTask)
   liTask= document.createElement("li")
   textButton = document.createTextNode("Delete")
   buttonDelete= document.createElement("button")
   buttonDelete.setAttribute("class","delete")
   buttonDelete.appendChild(textButton);
   liTask.appendChild(textComplete)
   liTask.appendChild(buttonDelete)
   ul.appendChild(liTask)
   
   
}

function deleteTask(li){
    li.remove();
}

function newTaskInIncomplete(newTask){
    incompleteTask= document.querySelector('.todo-list ul')
    li = document.createElement('li');
    input= document.createElement('input');
    label=document.createElement('label');
    text = document.createTextNode(newTask);
    input.setAttribute('type','checkbox')
    
    label.appendChild(text);
    
    li.appendChild(input);
    li.appendChild(label)
    
    incompleteTask.appendChild(li)

}

