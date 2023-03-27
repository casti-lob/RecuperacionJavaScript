const button = document.querySelector('button');



button.addEventListener('click',calcularCoste);

function calcularCoste(){

    let ul = document.querySelector('ul')
    ul.replaceChildren()

    const hotel = document.querySelector('#hotel').value
    let day = document.getElementById('day').value
    day= parseInt(day)
    
    let cstHotel = costeHotel(day);
    let cstAvion = costeAvion(day,hotel)
    let cstCoche = costeAlquilerCoche(day)
    let total = cstAvion+cstCoche+cstHotel;

    //Creamos los elementos
   
   let li1 = document.createElement('li')
   let li2 = document.createElement('li')
   let li3 = document.createElement('li')
   let li4 = document.createElement('li')

   let textHotel= document.createTextNode(`Coste hotel: ${cstHotel}€`)
   if(cstHotel>1000){
       li1.setAttribute('class','red');
   }else if(cstHotel>500){
       li1.setAttribute('class','yellow');
   }else{
    li1.setAttribute('class','green');
   }
   let textAvion= document.createTextNode(`Coste avion: ${cstAvion}€`)
   if(cstAvion>1000){
    li2.setAttribute('class','red');
    }else if(cstAvion>500){
        li2.setAttribute('class','yellow');
    }else{
    li2.setAttribute('class','green');
    }
   let textCoche= document.createTextNode(`Coste coche: ${cstCoche}€`)

   if(cstCoche>1000){
    li3.setAttribute('class','red');
    }else if(cstCoche>500){
        li3.setAttribute('class','yellow');
    }else{
    li3.setAttribute('class','green');
    }
   let textTotal= document.createTextNode(`Coste total: ${total}€`)

   if(total>1000){
    li4.setAttribute('class','red');
    }else if(total>500){
        li4.setAttribute('class','yellow');
    }else{
    li4.setAttribute('class','green');
    }
   
    li1.appendChild(textHotel)
    li2.appendChild(textAvion)
    li3.appendChild(textCoche)
    li4.appendChild(textTotal)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)

    



}


function costeHotel(numNoches){
    let valor = 140*numNoches
    return valor;
}    


function costeAvion(numNoches,hotel){
    const hoteles= [15,700,90,90]
    
    let price = hoteles[hotel];
    if(numNoches>3){
        let rebaja = price*0.10
       price= price-rebaja;
    }
    return price

}

function costeAlquilerCoche(numNoches){
    let diaAlquiler= numNoches*40;
    if(numNoches>2){
        diaAlquiler-=20;
    }else if(numNoches>6){
        diaAlquiler-=50
    }
    return diaAlquiler;

}




