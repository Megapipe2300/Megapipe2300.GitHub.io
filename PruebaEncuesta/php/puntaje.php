<?php

// Verificar si se enviaron datos
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../preguntas.php');
    exit;
}

// Obtener respuestas del formulario
$respuesta1 = isset($_POST['pregunta1']) ? $_POST['pregunta1'] : '';
$respuesta2 = isset($_POST['pregunta2']) ? $_POST['pregunta2'] : '';

// Respuestas correctas
$correcta1 = '1914';
$correcta2 = '1939';

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


$nota = $p1 + $p2;
$total = 2;
$incorrectas = $total - $nota;

// Guardar respuestas en variables para mostrar
$respuesta1_texto = empty($respuesta1) ? 'No respondida' : $respuesta1;
$respuesta2_texto = empty($respuesta2) ? 'No respondida' : $respuesta2;

// Determinar mensaje según nota
function getMensaje($nota, $total) {
    $porcentaje = ($nota / $total) * 100;
    if ($porcentaje === 100) return "🎉 ¡Perfecto! Todas las respuestas son correctas";
    if ($porcentaje >= 70) return "👏 ¡Buen trabajo! Sigue así";
    if ($porcentaje >= 50) return "📚 ¡Puedes mejorar! Repasa un poco más";
    return "😅 ¡Ánimo! Repasa la historia y vuelve a intentarlo";
}

// Determinar estrellas según nota

function getEstrellas($nota, $total) {
    $porcentaje = ($nota / $total) * 100;
    if ($porcentaje === 100) return "⭐⭐⭐⭐⭐";
    if ($porcentaje >= 70) return "⭐⭐⭐⭐";
    if ($porcentaje >= 50) return "⭐⭐⭐";
    if ($porcentaje >= 30) return "⭐⭐";
    return "⭐";
}

// Determinar clase CSS para cada respuesta
function getClaseRespuesta($respuesta, $correcta) {
    if (empty($respuesta) || $respuesta === 'No respondida') {
        return 'no-respondida';
    }
    return ($respuesta === $correcta) ? 'correcta' : 'incorrecta';
}

function getTextoRespuesta($respuesta, $correcta) {
    if (empty($respuesta) || $respuesta === 'No respondida') {
        return '❌ No respondida';
    }
    if ($respuesta === $correcta) {
        return "✅ $respuesta (Correcta)";
    }
    return "❌ $respuesta (Incorrecta)";
}

$mensaje = getMensaje($nota, $total);
$estrellas = getEstrellas($nota, $total);
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
            <div class="estrellas" id="estrellas"><?php echo $estrellas; ?></div>
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

    <?php

    // Mostrar alerta con SweetAlert si es necesario (opcional)
    if ($nota === 2): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        Swal.fire({
            title: "¡Excelente! 🎉",
            text: "Todas las respuestas son correctas",
            icon: "success",
            draggable: true,
            confirmButtonColor: "#48bb78"
        });
    </script>
    <?php elseif ($nota === 1): ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        Swal.fire({
            title: "¡Bien! 📚",
            text: "Tienes 1 respuesta correcta. ¡Sigue mejorando!",
            icon: "warning",
            draggable: true,
            confirmButtonColor: "#ed8936"
        });
    </script>
    <?php else: ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        Swal.fire({
            title: "¡Oh no! 😅",
            text: "No has acertado ninguna respuesta. ¡Repasa la historia!",
            icon: "error",
            draggable: true,
            confirmButtonColor: "#fc8181"
        });
    </script>
    <?php endif; ?>
</body>
</html>