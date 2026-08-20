<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="stylesheet" href="../css/preguntas.css"/>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  
    <title> Pregunas</title>

</head>
<body>
    <div class="contenedor">
        <div class="elementos">
        <h1>Responda las preguntas</h1>
         </div>

       <div class="contenedor">
        <div class="elementos">
        <form action="../php/puntaje.php" method="POST">
            <p><strong>1.Cuando empezo la primera guerra mundial</strong></p>
            <ol type="A">

                <li><input type="radio" name="pregunta1" value="1939" /> 1939</li>
                <li><input type="radio" name="pregunta1" value="1914" /> 1914</li>
                <li><input type="radio" name="pregunta1" value="1924" /> 1924</li>
                <li><input type="radio" name="pregunta1" value="1929" /> 1929</li>
               
            </ol>

            <p><strong>2.Cuando fue la segunda guerra mundial</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta2" value="1914" /> 1914</li>
                 <li><input type="radio" name="pregunta2" value="1924" /> 1924</li>
                 <li><input type="radio" name="pregunta2" value="1939" /> 1939</li>
                 <li><input type="radio" name="pregunta2" value="1929" /> 1929</li>
                 

          </ol>
            <button type="submit" class="btn-button">RESULTADO</button>

        </form>



         </div>


    </div>
  </div>


      <script src="js/respuestas.js"></script>

</body>
</html>