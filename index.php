<?php
require_once 'conexion.php';

$titulo_sitio = "Cosplay Fotos y Videos";
$descripcion = "Galería de fotos y videos de cosplay organizados por año";
$url_videos = "https://www.youtube.com/channel/UCRCfldc8xm2V5xK8TlKS51A";
$anio_actual = date("Y");

// Obtener años disponibles con eventos

$sql = "SELECT * FROM album ";
try {
    $stmt = $pdo->query($sql);
    $anios = array();
    
    if ($stmt->rowCount() > 0) {
        while($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $anios[] = $fila['id_album'];
        }
    }
} catch (PDOException $e) {
    die("Error al obtener años: " . $e->getMessage());
}

// Cerrar conexión después de usarla

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo htmlspecialchars($descripcion); ?>">
    <meta name="theme-color" content="#000000">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="estilos.css">
    <meta name="apple-mobile-web-app-title" content="CosplayFyV">
 
</head>
<body>
    <div class="contenedor">
        <div class="elemento">
            <header>
                <h1><strong>Bienvenidos a <?php echo htmlspecialchars($titulo_sitio); ?></strong></h1>
               
            </header>
            
            <main class="main">
              
                <?php foreach ($anios as $anio): ?>
                    <div class="year-link" onclick="location.href='evento.php?anio=<?php echo $anio; ?>'">
                        <strong><?php echo $anio; ?></strong>
                    </div>
                <?php endforeach; ?>
                
                <div class="year-link" onclick="window.open('<?php echo htmlspecialchars($url_videos); ?>', '_blank')">
                    <strong>Videos</strong>
                </div>
            </main>
        </div>
    </div>
    
    <footer class="marca">
        <p>Ⓒ CosplayFyV <?php echo $anio_actual; ?></p>
    </footer>

</body>
</html>
