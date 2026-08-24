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
            <p><strong>1.¿Cuando empezo la primera guerra mundial?</strong></p>
            <ol type="A">

                <li><input type="radio" name="pregunta1" value="1939" /> 1939</li>
                <li><input type="radio" name="pregunta1" value="1914" /> 1914</li>
                <li><input type="radio" name="pregunta1" value="1924" /> 1924</li>
                <li><input type="radio" name="pregunta1" value="1929" /> 1929</li>
               
            </ol>

            <p><strong>2.¿Cuando fue la segunda guerra mundial?</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta2" value="1914" /> 1914</li>
                 <li><input type="radio" name="pregunta2" value="1924" /> 1924</li>
                 <li><input type="radio" name="pregunta2" value="1939" /> 1939</li>
                 <li><input type="radio" name="pregunta2" value="1929" /> 1929</li>
                 

          </ol>

         <p><strong>3.¿En qué año pisó el hombre la Luna por primera vez?</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta3" value="1994" /> 1994</li>
                 <li><input type="radio" name="pregunta3" value="1984" /> 1984</li>
                 <li><input type="radio" name="pregunta3" value="1969" /> 1969</li>
                 <li><input type="radio" name="pregunta3" value="1929" /> 1929</li>
                 

          </ol>

            
         <p><strong>4.¿Cuándo llegó Cristóbal Colón a América?</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta4" value="1414" /> 1414</li>
                 <li><input type="radio" name="pregunta4" value="1680" /> 1680</li>
                 <li><input type="radio" name="pregunta4" value="1500" /> 1500</li>
                 <li><input type="radio" name="pregunta4" value="1492" /> 1492</li>
                 

          </ol>

            
         <p><strong>5.¿Cuándo se celebró la Primera Junta Nacional de Gobierno de Chile?</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta5" value="1879" /> 1879</li>
                 <li><input type="radio" name="pregunta5" value="1589" /> 1589</li>
                 <li><input type="radio" name="pregunta5" value="1639" /> 1639</li>
                 <li><input type="radio" name="pregunta5" value="1810" /> 1810</li>
                 

          </ol>

            
         <p><strong>6.¿Cuándo cayó el Muro de Berlín?l</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta6" value="1989" /> 1989</li>
                 <li><input type="radio" name="pregunta6" value="1924" /> 1924</li>
                 <li><input type="radio" name="pregunta6" value="1988" /> 1988</li>
                 <li><input type="radio" name="pregunta6" value="1929" /> 1929</li>
                 

          </ol>

            
         <p><strong>7.¿Cuándo fue el Combate Naval de Iquique?</strong></p>
             <ol type="A">
                 <li><input type="radio" name="pregunta7" value="1884" /> 1884</li>
                 <li><input type="radio" name="pregunta7" value="1888" /> 1888</li>
                 <li><input type="radio" name="pregunta7" value="1879" /> 1879</li>
                 <li><input type="radio" name="pregunta7" value="1869" /> 1869</li>
                 

          </ol>

            
            <button type="submit" class="btn-button">RESULTADO</button>

        </form>

         </div>
    </div>
  </div>

</body>
</html>