const href =document.querySelector('p a').href;
const hreflang=document.querySelector('a:only-of-type').hreflang;
const rel=document.querySelector('body :nth-of-type(1) :only-child').rel;
const target=document.querySelector('p> a').target;
const type=document.querySelector('#w3r').type;

const click = document.querySelector("button");

click.addEventListener('click',(e)=>{
    console.log(
    ` Valor href: ${href} \n
    Valor hreflang: ${hreflang} \n
    Valor rel: ${rel} \n
    Valor target: ${target} \n
    Valor type: ${type}
    `)
})