<?php
include 'conexion.php';

$year = isset($_GET['anio']) ? intval($_GET['anio']) : date('Y');

$page_title = "Eventos Cosplay $year";
$page_description = "Galería de eventos cosplay del año $year";

// Consulta corregida - selecciona eventos del año específico
$sql = "SELECT id_eventos, nombre_evento,fecha_evento FROM eventos WHERE fecha_evento = ? ";
try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$year]);
    $eventos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
} catch (PDOException $e) {
    die("Error al obtener eventos: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="estilos.css">
    <meta name="apple-mobile-web-app-title" content="CosplayFyV">
</head>
<body>
    <div class="contenedor">
        <div class="elemento">
           <h1><?php echo $year; ?></h1>

            <div class="main">    
                <?php foreach ($eventos as $evento): ?>
                    <div class="year-link" onclick="location.href='galeria.php?evento=<?= $evento['id_eventos'] ?>'">
                        <strong><?= htmlspecialchars($evento['nombre_evento']) ?></strong>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>   
    </div>
    <div class="vol">
        <button onclick="history.back()">volver</button> 
    </div>
</body>
</html>