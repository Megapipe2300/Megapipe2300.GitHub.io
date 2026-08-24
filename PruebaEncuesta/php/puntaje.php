<?php

// Obtener respuestas del formulario
$respuesta1 = isset($_POST['pregunta1']) ? $_POST['pregunta1'] : '';
$respuesta2 = isset($_POST['pregunta2']) ? $_POST['pregunta2'] : '';
$respuesta3 = isset($_POST['pregunta3']) ? $_POST['pregunta3'] : '';
$respuesta4 = isset($_POST['pregunta4']) ? $_POST['pregunta4'] : '';
$respuesta5 = isset($_POST['pregunta5']) ? $_POST['pregunta5'] : '';
$respuesta6 = isset($_POST['pregunta6']) ? $_POST['pregunta6'] : '';
$respuesta7 = isset($_POST['pregunta7']) ? $_POST['pregunta7'] : '';

// COMPROBAR PREGUNTAS VACÍAS
if (empty($respuesta1)) {
    echo "<script>
        alert('Por favor, responde la pregunta 1');
        history.back();
        </script>";
    exit;
   
}

if (empty($respuesta2)) {
    echo "<script>
        alert('Por favor, responde la pregunta 2');
        history.back();
        </script>";
    exit;
}

if (empty($respuesta3)) {
    echo "<script>
        alert('Por favor, responde la pregunta 3');
        history.back();
        </script>";
    exit;
}

if (empty($respuesta4)) {
    echo "<script>
        alert('Por favor, responde la pregunta 4');
        history.back();
        </script>";
    exit;
}

if (empty($respuesta5)) {
    echo "<script>
        alert('Por favor, responde la pregunta 5');
        history.back();
        </script>";
    exit;
}

if (empty($respuesta6)) {
    echo "<script>
        alert('Por favor, responde la pregunta 6');
        history.back();
        </script>";
    exit;
}

if (empty($respuesta7)) {
    echo "<script>
        alert('Por favor, responde la pregunta 7');
        history.back();
        </script>";
    exit;
}


/*
// Si alguna está vacía, detener la ejecución
if (empty($respuesta1) || empty($respuesta2 || empty($respuesta3) || empty($respuesta4) || empty($respuesta5)
    || empty($respuesta6) || empty($respuesta7))) {
    exit; // Detiene el script
}

*/

if (empty($respuesta1)){
    
     exit; // Detiene el script
}

if (empty($respuesta2)) {

    exit; // Detiene el script
}
if (empty($respuesta3)) {

    exit; // Detiene el script
}
if (empty($respuesta4)) {

    exit; // Detiene el script
}
if (empty($respuesta5)) {

    exit; // Detiene el script
}
if (empty($respuesta6)) {

    exit; // Detiene el script
}
if (empty($respuesta7)) {

    exit; // Detiene el script
}



// Verificar si se enviaron datos
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../preguntas.php');
    exit;
}

// Obtener respuestas del formulario
$respuesta1 = isset($_POST['pregunta1']) ? $_POST['pregunta1'] : '';
$respuesta2 = isset($_POST['pregunta2']) ? $_POST['pregunta2'] : '';
$respuesta3 = isset($_POST['pregunta3']) ? $_POST['pregunta3'] : '';
$respuesta4 = isset($_POST['pregunta4']) ? $_POST['pregunta4'] : '';
$respuesta5 = isset($_POST['pregunta5']) ? $_POST['pregunta5'] : '';
$respuesta6 = isset($_POST['pregunta6']) ? $_POST['pregunta6'] : '';
$respuesta7 = isset($_POST['pregunta7']) ? $_POST['pregunta7'] : '';

// Respuestas correctas
$correcta1 = '1914';
$correcta2 = '1939';
$correcta3 = '1969';
$correcta4 = '1492';
$correcta5 = '1810';
$correcta6 = '1989';
$correcta7 = '1879';

// Verificar si son correctas

if ($respuesta1 == $correcta1) {

        $p1 = 1;
    } else {
        $p1 = 0;
    }

if ($respuesta2 == $correcta2) {

    $p2 = 1;
} else {
    $p2 = 0;
}

if ($respuesta3 == $correcta3) {

    $p3 = 1;
} else {
    $p3 = 0;
}

if ($respuesta4 == $correcta4) {

    $p4 = 1;
} else {
    $p4 = 0;
}

if ($respuesta5 == $correcta5) {

    $p5 = 1;
} else {
    $p5 = 0;
}

if ($respuesta6 == $correcta6) {

    $p6 = 1;
} else {
    $p6 = 0;
}

if ($respuesta7 == $correcta7) {

    $p7 = 1;
} else {
    $p7 = 0;
}


$nota = $p1 + $p2 + $p3 + $p4 + $p5 + $p6 + $p7;
$total = 7;
$incorrectas = $total - $nota;

// Guardar respuestas en variables para mostrar
$respuesta1_texto = empty($$respuesta1) ? 'No respondida' : $respuesta1;
$respuesta2_texto = empty($$respuesta2) ? 'No respondida' : $respuesta2;
$respuesta3_texto = empty($$respuesta3) ? 'No respondida' : $respuesta3;
$respuesta4_texto = empty($$respuesta4) ? 'No respondida' : $respuesta4;
$respuesta5_texto = empty($$respuesta5) ? 'No respondida' : $respuesta5;
$respuesta6_texto = empty($$respuesta6) ? 'No respondida' : $respuesta6;
$respuesta7_texto = empty($$respuesta7) ? 'No respondida' : $respuesta7;

// Determinar mensaje según nota
function getMensaje($nota, $total) {
    $porcentaje = ($nota / $total) * 100;
    if ($porcentaje === 100) return "🎉 ¡Perfecto! Todas las respuestas son correctas";
    if ($porcentaje >= 70) return "👏 ¡Buen trabajo! Sigue así";
    if ($porcentaje >= 50) return "📚 ¡Puedes mejorar! Repasa un poco más";
    return "😅 ¡Ánimo! Repasa la historia y vuelve a intentarlo";
}


$mensaje = getMensaje($nota, $total);

?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/puntaje.css"/>
   
    <title>Tu Puntaje</title>
    

</head>
<body>
    <div class="container">
        <h1>📊 Tu Puntaje</h1>
        <p class="subtitle">Revisa el detalle de tus respuestas</p>

        <!-- Puntaje Principal -->
        <div class="puntaje-principal">
            <div class="nota-grande">
                <span id="nota"><?php echo $nota; ?></span>
                <span class="total">/<?php echo $total; ?></span>
            </div>
           
            <div class="mensaje-puntaje" id="mensaje"><?php echo $mensaje; ?></div>
        </div>

        <!-- Resumen Rápido -->
        <div class="resumen">
            <div class="resumen-item aciertos">
                <div class="numero" id="aciertos"><?php echo $nota; ?></div>
                <div class="label">✅ Correctas</div>
            </div>
            <div class="resumen-item fallos">
                <div class="numero" id="fallos"><?php echo $incorrectas; ?></div>
                <div class="label">❌ Incorrectas</div>
            </div>
            <div class="resumen-item total">
                <div class="numero" id="total-preguntas"><?php echo $total; ?></div>
                <div class="label">📝 Total</div>
            </div>
        </div>



        <!-- Botones -->
        <div class="botones">
            <a href="../index.html" class="btn btn-primary">🔄 Volver a intentar</a>
        </div>
    </div>

<?php if ($nota === 7): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Excelente! 🎉",
                text: "Todas las respuestas son correctas",
                icon: "success",
                draggable: true,
                confirmButtonColor: "#48bb78"
            });
        });
    </script>
<?php elseif ($nota === 6): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Muy bien! 🌟",
                text: "Tienes 6 respuestas correctas. ¡Casi perfecto!",
                icon: "success",
                draggable: true,
                confirmButtonColor: "#48bb78"
            });
        });
    </script>
<?php elseif ($nota === 5): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Bien! 📚",
                text: "Tienes 5 respuestas correctas. ¡Sigue mejorando!",
                icon: "warning",
                draggable: true,
                confirmButtonColor: "#ed8936"
            });
        });
    </script>
<?php elseif ($nota === 4): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Puedes mejorar! 📖",
                text: "Tienes 4 respuestas correctas. ¡Repasa un poco más!",
                icon: "warning",
                draggable: true,
                confirmButtonColor: "#ed8936"
            });
        });
    </script>
<?php elseif ($nota === 3): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Ánimo! 💪",
                text: "Tienes 3 respuestas correctas. ¡Sigue intentándolo!",
                icon: "info",
                draggable: true,
                confirmButtonColor: "#4299e1"
            });
        });
    </script>
<?php elseif ($nota === 2): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Necesitas repasar! 📕",
                text: "Tienes 2 respuestas correctas. ¡Revisa la historia!",
                icon: "error",
                draggable: true,
                confirmButtonColor: "#fc8181"
            });
        });
    </script>
<?php elseif ($nota === 1): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Oh no! 😅",
                text: "Tienes 1 respuesta correcta. ¡Repasa la historia!",
                icon: "error",
                draggable: true,
                confirmButtonColor: "#fc8181"
            });
        });
    </script>
<?php else: ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: "¡Lo sentimos! 😢",
                text: "No has acertado ninguna respuesta. ¡Repasa la historia y vuelve a intentarlo!",
                icon: "error",
                draggable: true,
                confirmButtonColor: "#fc8181"
            });
        });
    </script>
<?php endif; ?>
</body>
</html>