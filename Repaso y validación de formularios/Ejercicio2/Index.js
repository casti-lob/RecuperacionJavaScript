const circle = document.querySelector("#element");

circle.addEventListener("mouseenter",(e)=>{
    circle.setAttribute('class','enter');
})

circle.addEventListener("mouseleave",(e)=>{
    circle.setAttribute('class','leave')
})