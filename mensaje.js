
function mensaje(){
    console.log("Alerta")
    let fecha=document.querySelector(".fecha");
let hora=document.querySelector(".hora");
let numero=document.querySelector(".numero");

    document.querySelector(".contenedor_mensaje").classList.toggle("mostrar_mensaje")
    if(fecha.value==""&&numero.value==""&&hora.value==""){
        document.querySelector(".mensaje").innerHTML="Por favor llenar los campos";
    document.querySelector(".caja_mensaje").classList.add("rojo")
    // document.querySelector(".caja_mensaje").style.background="red"

    }else if(fecha.value!=""&&numero.value==""&&hora.value==""){
        document.querySelector(".mensaje").innerHTML="Por favor agregar hora y numero";
    document.querySelector(".caja_mensaje").classList.add("rojo")

    }
    else if(fecha.value!=""&&hora.value!=""&&numero.value==""){
        document.querySelector(".mensaje").innerHTML="Por favor agregar numero ";
        document.querySelector(".caja_mensaje").classList.add("rojo")

    }
    else if(fecha.value==""&&hora.value!=""&&numero.value!=""){
        document.querySelector(".mensaje").innerHTML="Por favor agregar fecha ";
        document.querySelector(".caja_mensaje").classList.add("rojo")

    }
    else if(fecha.value==""&&hora.value!=""&&numero.value==""){
        document.querySelector(".mensaje").innerHTML="Por favor agregar fecha y numero";
        document.querySelector(".caja_mensaje").classList.add("rojo")

    }
    else if(fecha.value==""&&hora.value==""&&numero.value!=""){
        document.querySelector(".mensaje").innerHTML="Por favor agregar fecha y hora";
        document.querySelector(".caja_mensaje").classList.add("rojo")

    }
    else if(fecha.value!=""&&hora.value==""&&numero.value!=""){
        document.querySelector(".mensaje").innerHTML="Por favor agregar hora";
        document.querySelector(".caja_mensaje").classList.add("rojo")

    }
    else{
        document.querySelector(".mensaje").innerHTML="Guardado con exito";
        document.querySelector(".caja_mensaje").classList.remove("rojo")
        document.querySelector(".caja_mensaje").classList.add("verde")

    }

    setTimeout(()=>{
    document.querySelector(".contenedor_mensaje").classList.toggle("mostrar_mensaje")

    },4000)
}
function eliminado(){
    document.querySelector(".contenedor_mensaje").classList.toggle("mostrar_mensaje")
    document.querySelector(".mensaje").innerHTML="Eliminado con exito";
    document.querySelector(".caja_mensaje").classList.remove("rojo")
    document.querySelector(".caja_mensaje").classList.add("verde")

setTimeout(()=>{
    document.querySelector(".contenedor_mensaje").classList.toggle("mostrar_mensaje")

},4000)
}