
const products = document.querySelector("ul")
const wishlist = document.querySelector("#wishlist");
let array=[];
//Evento para añadir elemento
products.addEventListener('click',(e)=>{
    //Obtenemos el button seleccionada
    const button = e.target;
    //Del button seleccionado nos pasamos al padre y de ahi a su hijo con indice 0
    text = button.parentElement.children[0].textContent;
    addProduct(text)
    button.parentElement.setAttribute("class","add")
})



function addProduct(text){
    if(array.indexOf(text)==-1){
         //Creamos las etiquetas y lo añadimos
        li = document.createElement("li");
        span = document.createElement("span");
        newButton = document.createElement("button")
        textButton = document.createTextNode("Eliminar")
        textSpan = document.createTextNode(text)

        newButton.appendChild(textButton);

        span.appendChild(textSpan);
        li.appendChild(span)
        li.appendChild(newButton)
        wishlist.appendChild(li);

        array.push(text)

    }
}

//Evento para eliminar elemento
wishlist.addEventListener('click',(e)=>{ 
   const button = e.target;
   //Obtenemos la etiqueta li para eliminar su contenido
   const deleteElement = e.target.parentNode;
    const text = button.parentElement.children[0].textContent;
    
    //Recorremos la lista de productos y encuentra cual es el elemento borrado y se quita la clase
    for(i = 0;i<products.children.length;i++){
        if(text == products.children[i].children[0].textContent){
            products.children[i].classList.remove("add");        
        }
    }
    array.splice(text,1);
    deleteElement.remove()

    
    
})