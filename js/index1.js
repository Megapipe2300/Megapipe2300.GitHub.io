// envia informacion
fetch("php/index1.php")
    .then(valor => valor.text())//envia un dato
    .then(respuesta => mostrar(respuesta))//lo que tiene que hacer y resibe los parametros


function mostrar(respuesta) {
    document.querySelector("body").innerHTML = respuesta;

}