let lenguaje="Pytom";
let miArray=[
    {lenguaje:"JavaScript",inicio:1995},
    {lenguaje:"PHP",inicio:1994}
]
let elDato;
let aEnviar={
    lenguaje,
    miArray
}

// envia informacion
fetch("php/index1.php",{
    method:'POST',
    body:JSON.stringify(aEnviar)


})
    .then(valor => valor.json())//envia un dato
    .then(respuesta => 
        {
        elDato=respuesta;
        mostrar()
        
        }


    )


function mostrar(respuesta) 
{
   elDato.map(valor => 
    document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `<div>
      ${valor.lenguaje} - (${valor.inicio})
    </div>`
  )
); 

}