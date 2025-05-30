<?php

//siempre va esto pero cambian las variables. recibe los datos de json
$nombre=json_decode(file_get_contents("php://input"),true);

//recive los parametros de javaScript
$dato =$nombre["lenguaje"];
$array =$nombre["miArray"];

//funcion para enviar datos


$nuevoObjeto = array(
	"lenguaje" =>$dato,
	"inicio" => date("Y")


);

$array[] =$nuevoObjeto;




//enviar a javaScript
$respuesta=json_encode($array);
echo $respuesta;


/*
//es como un while
foreach($array as $fila)
{
echo "<div>".$fila['lenguaje']." (" .$fila['inicio'].")</div>";



}
*/




//echo "soy ".$dato;


?>