const text = document.querySelector("#text")
const size = document.querySelector("#size")
let sizeWord=18
const contador =1;

size.addEventListener('click',(e)=>{
    
    if(e.target.id == 'up'){
        sizeWord+=contador;
        text.style.fontSize = sizeWord+"px";
    }else if(e.target.id == 'down'){
        sizeWord-=contador;
        text.style.fontSize= sizeWord+"px";
    }
})

const select = document.querySelector(".family")
select.addEventListener("change", function() { 
    let fontFamily = this.value; 
    text.style.fontFamily = fontFamily;
})

const colors = ["#F0FF00", "#FF7000", "#FF0000", "#00E4FF", "#0008FF", "#B600FF", "#FF007C"]

const randomColor = () => {
    let index = Math.random() * colors.length-1;
    return colors[Math.trunc(index)];
    
}

const colorButton = document.querySelector(".color button");
colorButton.addEventListener('click', ()=> {
    text.style.color = randomColor();
})