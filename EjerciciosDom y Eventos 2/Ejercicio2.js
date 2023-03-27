const strongWord = document.querySelectorAll("strong");

const highlight = () => {
    for(let word of strongWord){
        word.classList.add("color");
    }
}

const return_normal = () => {
    for(let word of strongWord){
        word.classList.remove("color");
    }
}