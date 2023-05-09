form = document.querySelector("#formulario")
userName= document.querySelector("#nombre")
surname= document.querySelector("#apellidos")
age= document.querySelector("#edad")
matricula= document.querySelector("#matricula")
fechaM= document.querySelector("#fechaM")
provincia= document.querySelector("#provincia")

arrayMatricula =["1234 DDD","1234 DDT","1234 DDA"]


const showError =(input,message)=>{
    const formField = input.parentElement;
    const error = formField.querySelector('span')
    error.textContent = message;
}

const showSuccess =(input)=>{
    const formField= input.parentElement;
    const error = formField.querySelector('span');
    error.textContent='';
}

const isRequired = value=> value===''?false : true; 
const isBetween = (length, min)=> length<min? false:true; 
const isAgeTrue = (age)=> age>=18? true:false;
const matriculaRepetida=(matriculaCheck) =>{
    
    return arrayMatricula.includes(matriculaCheck)
        
}
const matriculaFormato = (matriculaCheck) => {
    const re = new RegExp("^[0-9]{4} [A-Z]{3}$");
    return re.test(matriculaCheck);
};

const fechaAnteror=(fecha)=>{
    const fechaActual = new Date();
    Date.parse(fecha) < Date.parse(fechaActual)
}

console.log(matriculaRepetida("d"))
console.log(matriculaRepetida("1234 DDT"))
const checkUserName =()=>{
    
    let valid = false;
    const min =3
    const checkUser = userName.value.trim();
    if(!isRequired(checkUser)){
        showError( userName, ' El nombre es requerido')
    }else if(!isBetween(checkUser.length,min)){
        showError(userName,' El nombre tiene que tener una longitud de almenos 3')
    }else{
        showSuccess(userName);
        valid=true
    }
    return valid
}
const checkSurname =()=>{
    let valid = false;
    const min =6
    const cheSurname = surname.value.trim();
    if(!isRequired(cheSurname)){
        showError( surname, 'El appelido es requerido')
    }else if(!isBetween(cheSurname.length,min)){
        showError(surname,'El apellido tiene que tener una longitud de almenos 6')
    }else{
        showSuccess(surname);
        valid=true
    }
    return valid
}

const checkEdad =()=>{
    let valid = false;
    const cheEdad = age.value;
    let num = parseInt(cheEdad)
    
    if(!isAgeTrue(num)){
        showError( age, 'La edad tiene que ser mayor o igual a 18')
    }else{
        showSuccess(age);
        valid=true
    }
    return valid
}
const checkMatricula =()=>{
    let valid = false;
    const matriculaCheck = matricula.value.trim();
    
    if(matriculaRepetida(matriculaCheck)){
        showError( matricula, 'La matricula esta repetida')
    }else if(!matriculaFormato){
        showError( matricula, 'La matricula no cumple el formato')
    }else{
        showSuccess(matricula);
        valid=true
    }
    return valid
}

const checkFechaM =()=>{
    let valid = false;
    const fechaCheck = fechaM.value;
    
    if(fechaAnteror(fechaCheck)){
        showError( fechaM, 'La tiene que ser anterior a la actual')
    }else{
        showSuccess(fechaM);
        valid=true
    }
    return valid
}
const checkProvincia =()=>{
    let valid = false;
    const fechaCheck = provincia.value;
    
    if(fechaCheck==0){
        showError( provincia, 'Debes de seleccionar alguna')
    }else{
        showSuccess(provincia);
        valid=true
    }
    return valid
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let isUserNameValid = checkUserName(),
    isSurnameValid =checkSurname(),
    isAgeValid= checkEdad(),
    isMatriculaValid = checkMatricula(),
    isFechaValid = checkFechaM(),
    isProvinciaValid = checkProvincia()
    ;


    let isFormValid = isUserNameValid &&
    isSurnameValid && isAgeValid && isMatriculaValid &&isFechaValid&&isProvinciaValid
    ;

    if(isFormValid){
        
       form.submit();
    }
})

form.addEventListener('input',(e)=>{
    switch(e.target.id){
        case 'nombre':
            checkUserName()
            break;
       case'apellidos':
       checkSurname()
       break;
       case'edad':
       checkEdad()
       break;
       case'matricula':
       checkMatricula()
       break;
       case'fechaM':
       checkFechaM()
       break;
       case'fechaM':
       checkProvincia()
       break;
    }
})

