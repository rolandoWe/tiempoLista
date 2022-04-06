
let fecha_n=document.querySelector(".fecha_n");
let numero_n=document.querySelector(".numero_n");
let hora_n=document.querySelector(".hora_n");
let tbody_n=document.querySelector(".tbody_n");
let tbody_resultado_n=document.querySelector(".tbody_resultado_n");
let ingresando_n=document.querySelector(".ingresando_n");
let buscar_n=document.querySelector(".buscar_n");
let add_n=document.querySelector(".add_n");
let ary=[]
let obj={}
let contar=0

function crearOj(fecha,numero,hora){
    contar++;

         obj={
             id:contar,
             Fecha:fecha,
             Numero:numero,
             Hora:hora
         }
         ary.push(obj)
        //  console.log(ary)
         localStorage.setItem("nica",JSON.stringify(ary))
         localStorage.setItem("nicaId",contar)
}

function pintarr(){
    tbody_n.innerHTML=""
    let array=JSON.parse(localStorage.getItem("nica"))
    for(let a of array){
        if(array){
tbody_n.innerHTML+=`
                  <tr id=${a.id}>
                  <td>${a.Fecha}</td>
                  <td>${a.Numero}</td>
                  <td>${a.Hora}</td>
                  <td class="eliminar">Delet</td>
                  </tr>
                  `;
        }
        if(array){
            ary=array
        }
    }
}
function mantenerId(){
    let id=JSON.parse(localStorage.getItem("nicaId"))
    if(id){
        contar=id
    }
}
eliminarr = function(event){
    let array=JSON.parse(localStorage.getItem("nica"))
    let nuevo=[]
   for(let a of array){
       if(a.id!=event){
          nuevo.push(a)
       }
   }
   ary=nuevo;
   localStorage.setItem("nica",JSON.stringify(ary))

}
function borrarI(){
    let array=JSON.parse(localStorage.getItem("nica"))
    
        if(array.length==0){
            contar=0
        }
    }

// filtrar datos
function filtrarr(){
    tbody_resultado_n.innerHTML=""
    let ingresa=ingresando_n.value.toLowerCase();
    let array=JSON.parse(localStorage.getItem("nica"))

    for(let a of array){
        let lista=a.Fecha.toLowerCase()
        if(lista.indexOf(ingresa)!= -1){
            tbody_resultado_n.innerHTML+=`
            <tr>
            <td>${a.Fecha}</td>
            <td>${a.Numero}</td>
            <td>${a.Hora}</td>
        </tr>
            `
        }

    }
    if(tbody_resultado_n.innerHTML===""){
        tbody_resultado_n.innerHTML+=`
        <tr>
        <td>No hay nada</td>
        <td>No hay nada</td>
        <td>No hay nada</td>
    </tr>
        `;
    }
}

add_n.addEventListener("click",()=>{
    let f=fecha_n.value;
    let n=numero_n.value;
    let h=hora_n.value
    if(f!=""&n!=""&h!=""){
        crearOj(f,n,h)
        pintarr()
        document.querySelector(".fecha_n").value="";
        document.querySelector(".numero_n").value="";
        document.querySelector(".hora_n").value="";
    }


})
document.querySelectorAll(".btn_n").forEach((f)=>{
    f.addEventListener("keyup",(f)=>{
        if(f.key==="Enter"){
            let f=fecha_n.value;
            let n=numero_n.value;
            let h=hora_n.value
            if(f!=""&n!=""&h!=""){
                crearOj(f,n,h)
                pintarr()
                document.querySelector(".fecha_n").value="";
                document.querySelector(".numero_n").value="";
                document.querySelector(".hora_n").value="";
            }
        }
    })
})
tbody_n.addEventListener("click",(e)=>{
    console.log(e.path[1].id)
    if(e.target.className==="eliminar"){
        eliminarr(e.path[1].id)
        borrarI()
        pintarr()

    }
})
ingresando_n.addEventListener("keyup",()=>{
    filtrarr()
})
pintarr()
mantenerId()
filtrarr()