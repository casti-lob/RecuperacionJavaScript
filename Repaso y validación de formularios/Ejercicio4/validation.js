const form = document.querySelector("form")
const fullName = document.querySelector(".fname")
const email = document.querySelector(".info :nth-child(2)")
const age = document.querySelector(".info :nth-child(3)")
const message = document.querySelector(".info :nth-child(4)")

fullName.addEventListener("input",(e)=>{
    if(fullName.validity.valid){
        fullName.setCustomValidity("")
        
    }else{
        console.log("else");
        fullName.setCustomValidity("El nombre es requerido")
        
    }
})

email.addEventListener("input",(e)=>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("El email es requerido")
        
    }else{
        email.setCustomValidity("")
        
    }
})

age.addEventListener("input",(e)=>{
    if(age.validity.valid){
        age.setCustomValidity("El numero es")
    }else{
        age.setCustomValidity("");
    }
})

message.addEventListener("input",(e)=>{
    if(message.validity.valid){
        age.setCustomValidity("El mensage tiene que tener una longitud de 6 caracteres")
    }
})

form.addEventListener('submit',(e)=>{
    console.log('Entra');
    if(!fullName.validity.valid){
        log
        fullName.setCustomValidity("El nombre es requerido")
        e.preventDefault();
    }else if(!email.validity.typeMismatch){
        email.setCustomValidity("El email es requerido")
    }
})
