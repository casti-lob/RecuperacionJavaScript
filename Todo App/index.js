addTask = document.querySelector('#addTask');

addTask.addEventListener('click',(e)=>{
    newTask = document.querySelector('.new-task-container input').value
    newTaskInIncomplete(newTask)
})

incompleteToComplete= document.querySelector('.todo-list ul');

incompleteToComplete.addEventListener('click',(e)=>{
    element = e.tatget
    
    console.log(element)
})


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

