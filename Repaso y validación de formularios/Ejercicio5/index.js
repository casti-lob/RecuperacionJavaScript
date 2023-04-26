//Obtén todos los campos del formulario y el propio formulario.
const userName = document.querySelector('#name');
const email = document.querySelector('#mail');
const password =document.querySelector('#password');
const passworfConf = document.querySelector('#confirmation')
const age = document.querySelectorAll("input[name='user_age']")
const bio = document.querySelector('#bio')
const interest = document.querySelectorAll("input[name='user_interest']")
const form = document.querySelector('form')




//Funciones de validación

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isCheckedRadio = radios => {
    let valid=false;
    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked){
            valid = true;  
        }
    }
    return valid;
}

const checkUserName =()=>{
    let valid = false;
    const min =4
    const max =20
    const checkUser = userName.value.trim();
    if(!isRequired(checkUser)){
        showError( userName, 'El nombre es requerido')
    }else if(!isBetween(checkUser.length,min,max)){
        showError(userName,'El nombre tiene que entre 4 y 20 caracteres')
    }else{
        showSuccess(userName);
        valid=true
    }
    return valid
}

const checkEmail=()=>{
    let valid = false;
    const checkE = email.value.trim();
    if(!isRequired(checkE)){
        showError(email, 'El email es requerido')
    }else if(!isEmailValid(checkE)){
        showError(email, 'Tiene que ser un email')
    }else{
        showSuccess(email)
        valid = true
    }
    return valid
}

const checkPassword=()=>{
    let valid = false
    const checkPass = password.value.trim()
    if(!isRequired(checkPass)){
        showError(password,'El password es requerido')
    }else if(!isPasswordSecure(checkPass)){
        showError(password,'La contraseña no es segura')
    }else{
        showSuccess(password)
        valid=true;
    }
    return valid
}

const checkPasswordConfirm=()=>{
    let valid = false
    const checkPass = password.value.trim()
    const checkConfirm = passworfConf.value.trim()
    if(!isRequired(checkConfirm)){
        showError(passworfConf,'El password es requerido')
    }else if(checkPass!==checkConfirm){
        showError(passworfConf,'La confirmacion de contraseña tiene que ser la misma')
    }else{
        showSuccess(passworfConf)
        valid=true;
    }
    return valid
}

const checkAge=()=>{
    let valid= isCheckedRadio(age)
    if(!valid){
        showError(age[0], 'Debe de seleccionar almenos uno')
    }else{
        showSuccess(age[0])
        
    }
    return valid
}

const checkBio=()=>{
    let valid= false
    const textarea = bio.value.trim()
    if(!isRequired(textarea)){
        showError(bio, 'La bio no debe de estar en blanco')
    }else{
        showSuccess(bio)
        valid=true
    }
    return valid
}

const checkInterest=()=>{
    let valid= isCheckedRadio(interest)
    if(!valid){
        showError(interest[0], 'Debe de seleccionar alguno')
    }else{
        showSuccess(interest[0])
        
    }
    return valid
}
//Definimos las condiciones para ser aceptadas
const isRequired = value=> value===''?false : true; //comprueba si un valor esta vacio

const isBetween = (length, min, max)=> length<min||length>max ? false:true; //comprueba si un valor esta comprendido en unos limites




// Función que valida si hay al menos un checkbox validado




// Funciones para validar cada campo





// Funciones para mostrar y borrar errores
const showError =(input,message)=>{
    const formField = input.parentElement;
    const error = formField.querySelector('small')
    error.textContent = message;
}

const showSuccess =(input)=>{
    const formField= input.parentElement;
    const error = formField.querySelector('small');
    error.textContent='';
}


//Evento para comprobar el formulario
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let isUserNameValid = checkUserName(),
    isEmailValid= checkEmail(),
    isPasswordValid = checkPassword()
    isConfirmValid = checkPasswordConfirm(),
    isConfirmAge = checkAge(),
    isBioValid = checkBio(),
    isInterestValid = checkInterest();


    let isFormValid = isUserNameValid&&
    isEmailValid&& isPasswordValid&&
    isConfirmValid&& isConfirmAge&&
    isBioValid&& isInterestValid;

    if(isFormValid){
        console.log("enviado")
       form.submit();
    }
})

form.addEventListener('input',(e)=>{
    switch(e.target.id){
        case 'name':
            checkUserName()
            break;
        case 'mail':
            checkEmail()
            break;
        case 'password':
            checkPassword()
            break;
        case 'confirmation':
            checkPasswordConfirm()
            break;
        case 'under_13':
            checkAge()
            break;
        case 'over_13':
            checkAge()
            break;
        case 'bio':
            checkBio()
            break;
        case 'development':
            checkInterest();
            break;
        case 'design':
            checkInterest();
            break;
        case 'business':
            checkInterest();
            break;
    }
})