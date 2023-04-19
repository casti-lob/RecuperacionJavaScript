const button = document.querySelector("button")

button.addEventListener('click',(e)=>{
    let num = document.querySelector("#num").value;
    history.go(-num)
})