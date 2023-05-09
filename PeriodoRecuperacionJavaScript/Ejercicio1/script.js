button = document.querySelector("#myButton")

button.addEventListener('click',(e)=>{
    button.setAttribute('class','button-clicked');
})

button.addEventListener('mouseleave',(e)=>{
    resetButtonColor()
})
function resetButtonColor(){
    button.setAttribute('class','');
}