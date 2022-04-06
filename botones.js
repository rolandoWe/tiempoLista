let boton_g_t=document.querySelector(".boton_g_t");
let boton_b_t=document.querySelector(".boton_b_t");
let boton_g_n=document.querySelector(".boton_g_n");
let boton_b_n=document.querySelector(".boton_b_n");
let btn_x=document.querySelectorAll(".btn_x");

boton_g_t.addEventListener("click",()=>{
    document.querySelector(".guardarTica").classList.toggle("mostrar")
    document.querySelector(".caja_principal").style.transform="scale(0)";
})
boton_b_t.addEventListener("click",()=>{
    document.querySelector(".buscarTica").classList.toggle("mostrar")
    document.querySelector(".caja_principal").style.transform="scale(0)";
})
boton_g_n.addEventListener("click",()=>{
    document.querySelector(".guardarNica").classList.toggle("mostrar")
    document.querySelector(".caja_principal").style.transform="scale(0)";
})
boton_b_n.addEventListener("click",()=>{
    document.querySelector(".buscarNica").classList.toggle("mostrar")
    document.querySelector(".caja_principal").style.transform="scale(0)";
})

btn_x.forEach((f)=>{
    f.addEventListener("click",()=>{
        document.querySelector(".guardarTica").classList.remove("mostrar")
        document.querySelector(".buscarTica").classList.remove("mostrar")
        document.querySelector(".buscarNica").classList.remove("mostrar")
        document.querySelector(".guardarNica").classList.remove("mostrar")
    document.querySelector(".caja_principal").style.transform="scale(1)";

    })
})
