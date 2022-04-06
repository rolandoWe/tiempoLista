let fecha=document.querySelector(".fecha");
let numero=document.querySelector(".numero");
let hora=document.querySelector(".hora");
let tbody=document.querySelector(".tbody");
let tbody_resultado=document.querySelector(".tbody_resultado");
let ingresando=document.querySelector(".ingresando");
let buscar=document.querySelector(".buscar");
let add=document.querySelector(".add");
let aray=[]
let objeto={}

function recogerDato(fecha,numero,hora){
    // console.log(fecha,numero,hora)
tbody.innerHTML=""
    objeto={
        Fecha:fecha,
        Numero:numero,
        Hora:hora
    }
    aray.push(objeto)
    console.log(aray)
    for(let a of aray){
    tbody.innerHTML+=`
    <tr>
    <td>${a.Fecha}</td>
    <td>${a.Numero}</td>
    <td>${a.Hora}</td>
    <td>eliminar</td>
</tr>
    `;
    }

}
filtrar =function(){
    tbody_resultado.innerHTML=""
let texto=ingresando.value.toLowerCase()
for(let a of aray){
    let fecha=a.Fecha.toLowerCase()
    if(fecha.indexOf(texto)!==-1){
        tbody_resultado.innerHTML+=`
        <tr>
        <td>${a.Fecha}</td>
        <td>${a.Numero}</td>
        <td>${a.Hora}</td>
    </tr>
        `;
    }

}
if(tbody_resultado.innerHTML===""){
    tbody_resultado.innerHTML+=`
    <tr>
    <td>error</td>
    <td>error</td>
    <td>error</td>
</tr>
    `;
}
}
ingresando.addEventListener("keyup",()=>{
    filtrar()
})

add.addEventListener("click",()=>{
    f=fecha.value;
    n=numero.value;
    h=hora.value;
    recogerDato(f,n,h)
})