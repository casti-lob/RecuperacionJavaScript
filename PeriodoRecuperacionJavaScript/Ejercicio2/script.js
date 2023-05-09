task = document.querySelector("#taskList ")

form = document.querySelector("#newTaskForm ")

form.addEventListener('submit',(e)=>{
    
    textTask = document.querySelector("#newTask").value.trim()

        
    if(textTask.length>=5){
        newTask(textTask)
        textTask.textContent=''
    }else{
        console.log("Tiene que ser mayor de 5 caracteres")
    }
        
    
    
    
    e.preventDefault();
})

task.addEventListener('click',(e)=>{
    button =e.target 
    li = button.parentElement;
    if(button.id=="eliminar"){
        deleteTask(li)
    }else{
        completeTask(li)
    }

})

function newTask(textTask){
    li = document.createElement("li")
    text = document.createTextNode(textTask);
    span = document.createElement("span");
    span.appendChild(text)
    li.appendChild(span);
    button = document.createElement("button");
    textButton = document.createTextNode("Hecho")
    button.appendChild(textButton)
    textButtonDel= document.createTextNode("Eliminar")
    buttonDel = document.createElement("button")
    buttonDel.appendChild(textButtonDel)
    button.setAttribute('id','hecho');
    buttonDel.setAttribute('id','eliminar');
    li.appendChild(button)
    li.appendChild(buttonDel)
    task.appendChild(li)
    
    

}

function deleteTask(li){
    li.remove()
}

function completeTask(li){
    console.log(li)
    if(li.className=="done"){
        li.setAttribute('class','')
       
        
    }else{
        li.setAttribute('class','done')
        

    }
}