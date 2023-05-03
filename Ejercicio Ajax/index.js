/* Peticion get*/
/*
const peticion=new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/tasks/');
peticion.send();
peticion.addEventListener('load', function() {
    if (peticion.status===200) {
        let tasks=JSON.parse(peticion.responseText);  // Convertirmos los datos JSON a un objeto
        // procesamos los datos que tenemos en usuarios
        console.log(tasks.length)
        for(i=0;i<tasks.length;i++){
            if (tasks[i].state){
                addTaskToComplete(tasks[i])
            }else{
                newTaskInIncomplete(tasks[i])
            }
        }
    } else {
        muestraError();
    }
})
peticion.addEventListener('error', muestraError);
peticion.addEventListener('abort', muestraError);
peticion.addEventListener('timeout', muestraError);
*/

//Muestra las tareas
fetch('http://localhost:3000/tasks/')
.then(response => response.json())
.then(tasks =>{
    // for(i=0;i<tasks.length;i++){
    //     console.log(tasks[i].category)
    //     fetch(`http://localhost:3000/category/${tasks[i].category}`)
    //     .then(req => req.json())
    //     .then(category =>{
    //         console.log(tasks[i].state)
    //         if (tasks[i].state){
    //             addTaskToComplete(tasks[i],category)
    //         }else{
    //             newTaskInIncomplete(tasks[i],category)
    //         }
    //     })
       
    // }
    tasks.forEach(task => {
        fetch(`http://localhost:3000/category/${task.category}`)
        .then(req => req.json())
        .then(category =>{
            console.log(task.state)
            if (task.state){
                addTaskToComplete(task,category)
            }else{
                newTaskInIncomplete(task,category)
            }
        })
    });
})
.catch(err=>{
    console.log("Error: "+ err.message)
})

//Muestra las categorias
fetch('http://localhost:3000/category/')
.then(response => response.json())
.then(category =>{
    categorySelect(category)

})


function muestraError() {
    if (this.status) {
        console.log("Error "+this.status+" ("+this.statusText+") en la petición");
    } else {
        console.log("Ocurrió un error o se abortó la conexión");
    }
}
/* Cierre Peticion get*/


addTask = document.querySelector('#addTask');

addTask.addEventListener('click',(e)=>{
    /*
    const peticionPost = new XMLHttpRequest()
    const text = document.querySelector('.new-task-container input').value
    if(text&& text!=" "){
        const newTask={
            description: text.trim(),
            state: false
        }
        peticionPost.open('POST','http://localhost:3000/tasks/')
        peticionPost.setRequestHeader('Content-type', 'application/json');
        peticionPost.send(JSON.stringify(newTask));
        
       
        console.log(peticionPost.status)
        newTaskInIncomplete(newTask)
    }
    */
    const text = document.querySelector('.new-task-container input').value
    const newTask={
        description: text.trim(),
        state: false
    }
    fetch( 'http://localhost:3000/tasks/', {
       method: 'POST',
        body: JSON.stringify(newTask),
        headers:{'Content-type': 'application/json'}
   })
   .then(response =>{
       if (response.ok){
        return response.json()
       }
       return Promise.reject(response)
   })
   .then(datos=>{
        newTaskInIncomplete(datos)
   } )
   .catch (err => {
       console.log("Error: "+ err.message)
   })
    
})

//intermedio
incompleteToComplete= document.querySelector('.todo-list ul');

incompleteToComplete.addEventListener('change',(e)=>{
    element = e.target
    li = element.parentElement;
    textTask =li.children[1].textContent;
   id = li.children[2].textContent;
   const body={
    description: textTask,
    state: true
}
    /*
    const peticionPatch = new XMLHttpRequest()
    const body={
        description: textTask,
        state: true
    }
    peticionPatch.open('PATCH', `http://localhost:3000/tasks/${id}`);
    peticionPatch.setRequestHeader('Content-type', 'application/json');
    peticionPatch.send(JSON.stringify(body));
    */

    fetch(`http://localhost:3000/tasks/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(body),
        headers:{'Content-type': 'application/json'}
    })
    .then(datos=>{
        if(datos.ok){
            addTaskToComplete(body)
            deleteTask(li,null)
        }
        return Promise.reject(datos)
        
    })
    .catch (err => {
        console.log("Error: "+ err.message)
    })
   
    
})

//Borrado te tareas
completeTasks= document.querySelector(".complete-list ul")

completeTasks.addEventListener('click',(e)=>{
    const button = e.target;
    li = button.parentElement;
    id = li.children[1].textContent;
    console.log(id)
    deleteTask(li,id);
})


function addTaskToComplete(textTask,category){
   ul = document.querySelector(".complete-list ul")
   textComplete = document.createTextNode(`${textTask.description} : Categoría ${category.name}`)
   liTask= document.createElement("li")
   textButton = document.createTextNode("Delete")
   buttonDelete= document.createElement("button")
   buttonDelete.setAttribute("class","delete")
   buttonDelete.appendChild(textButton);
   liTask.appendChild(textComplete)
   liTask.appendChild(buttonDelete)
     //añadimos un spam para añadir el id
     spam = document.createElement("spam")
    text= document.createTextNode(textTask.id)
    spam.appendChild(text)
    spam.setAttribute("hidden","true")
    liTask.appendChild(spam)
   ul.appendChild(liTask)
   
   
}

function deleteTask(li,id){
    /*
    const peticionDelete = new XMLHttpRequest()
    peticionDelete.open('DELETE', `http://localhost:3000/tasks/${id}`);
    peticionDelete.send();
    */
   fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'DELETE'
   })
   .then(response=>{
    if(response.ok){
        li.remove();
        
    }
    return Promise.reject(response)
    
    })
    .catch (err => {
        console.log("Error: "+ err.message)
    })
   

   
}

function newTaskInIncomplete(newTask ,category){
    incompleteTask= document.querySelector('.todo-list ul')
    li = document.createElement('li');
    input= document.createElement('input');
    label=document.createElement('label');
    text = document.createTextNode(`${newTask.description}: Categoría ${category.name}`);
    input.setAttribute('type','checkbox')
    
    label.appendChild(text);
    
    li.appendChild(input);
    li.appendChild(label)
    //añadimos un spam para añadir el id
    spam = document.createElement("spam")
    newTask = document.createTextNode(newTask.id)
     spam.appendChild(newTask)
     spam.setAttribute("hidden","true")
    li.appendChild(spam)
    incompleteTask.appendChild(li)

}

//Creacion del select de category
function categorySelect(category){
    const  select = document.querySelector("#category")
    for(i=0; i<category.length ; i++){
        let option = document.createElement('option')
        option.setAttribute('value',category[i].id)
        let text = document.createTextNode(category[i].name)
        option.appendChild(text)
        select.appendChild(option)
    }
}