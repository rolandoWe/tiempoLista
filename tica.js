
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
let contador=0

function recogerDato(fecha,numero,hora){
    // console.log(fecha,numero,hora)
    contador++
    objeto={
        id:contador,
        Fecha:fecha,
        Numero:numero,
        Hora:hora
    }
    aray.push(objeto)
    localStorage.setItem("tica",JSON.stringify(aray))
    localStorage.setItem("contador",contador)
}
pintar=function(){
tbody.innerHTML=""
let array=JSON.parse(localStorage.getItem("tica"))
    for(let a of array){
        tbody.innerHTML+=`
        <tr id=${a.id}>
        <td>${a.Fecha}</td>
        <td>${a.Numero}</td>
        <td>${a.Hora}</td>
        <td class="eliminar">Delet</td>
    </tr>
        `;
        }
        if(array){
            aray=array
        }
}
function mantenerId(){
    let id=JSON.parse(localStorage.getItem("contador"))
    if(id){
        contador=id
    }
}
function eliminar(evento){
let array=JSON.parse(localStorage.getItem("tica"))
 let nuevoAray=[]
 for(let a of array){
     if(a.id!=evento){
         nuevoAray.push(a)
     }
 }
 aray=nuevoAray
 localStorage.setItem("tica",JSON.stringify(aray))
pintar()
}

function borrarId(){
let array=JSON.parse(localStorage.getItem("tica"))

    if(array.length==0){
        contador=0
    }
}
filtrar =function(){
    tbody_resultado.innerHTML=""
let texto=ingresando.value.toLowerCase()
let array=JSON.parse(localStorage.getItem("tica"))

for(let a of array){
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
    <td>No hay coinsidencias</td>
    <td>No hay coinsidencias</td>
    <td>No hay coinsidencias</td>
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
    if(f!="" &n!=""&h!=""){
        recogerDato(f,n,h)
        pintar()
    }
    document.querySelector(".fecha").value="";
    document.querySelector(".numero").value="";
    document.querySelector(".hora").value="";

})
document.querySelectorAll(".inp_tica").forEach((g)=>{
    g.addEventListener("keyup",(g)=>{
        if(g.key=="Enter"){
            f=fecha.value;
            n=numero.value;
            h=hora.value;
            if(f!="" &n!=""&h!=""){
                recogerDato(f,n,h)
                pintar()
            }
            document.querySelector(".fecha").value="";
            document.querySelector(".numero").value="";
            document.querySelector(".hora").value="";
            console.log("enter")
        }  
    })
})

tbody.addEventListener("click",(e)=>{
    // console.log(e.path[1].id)
    if(e.target.className==="eliminar"){
        console.log("eliminando")
        eliminar(e.path[1].id)
        borrarId()
        pintar()

    }
})

pintar()
mantenerId()
filtrar()