
var products = document.querySelector("ul")
var wishlist = document.querySelector("#wishlist");
var array=[];
//Evento para añadir elemento
products.addEventListener('click',(e)=>{
    

    //Obtenemos el button seleccionada
    var button = e.target;
    console.log();
    
    //Creamos las etiquetas
    li = document.createElement("li");
    span = document.createElement("span");
    newButton = document.createElement("button")
    textButton = document.createTextNode("Eliminar")
    
    //Del button seleccionado nos pasamos al padre y de ahi a su hijo con indice 0
    text = document.createTextNode(button.parentNode.children[0].textContent);
    newButton.appendChild(textButton);

    span.appendChild(text);
    li.appendChild(span)
    li.appendChild(newButton)
    wishlist.appendChild(li);
    
    
    porduct=button.parentNode.children[0]

    porduct.setAttribute("class", "add");
    console.log(text)
    addProduct(text)
    console.log(array)
})

//Evento para eliminar elemento
wishlist.addEventListener('click',(e)=>{
    deleteElement = e.target.parentNode;
    deleteElement.remove();
    
    
})

function addProduct(text){
    result = false;
    if(array.indexOf(text.textContent)==-1){
        array.push(text.textContent)
        result= true;
    }
    return result;
}

