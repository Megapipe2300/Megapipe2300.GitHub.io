<?php
require_once 'conexion.php'; // Cambiado a .php

$titulo_sitio = "Cosplay Fotos y Videos";
$descripcion = "Galería de fotos y videos de cosplay organizados por año";
$url_videos = "https://www.youtube.com/channel/UCRCfldc8xm2V5xK8TlKS51A";
$anio_actual = date("Y");

// Obtener años disponibles
$sql = "SELECT id_album, descripcion FROM album";
$resultado = $conexion->query($sql);
$anios = array();
if ($resultado->num_rows > 0) {
    while($fila = $resultado->fetch_assoc()) {
        $anios[] = $fila['id_album'];
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="estilos.css">
    <meta name="apple-mobile-web-app-title" content="CosplayFyV">
    <title>Cosplay Fotos y Videos</title>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">
            <header>
                <h1><strong>Bienvenidos a <?php echo htmlspecialchars($titulo_sitio); ?></strong></h1>
            </header>

            <main class="main">
                <?php foreach ($anios as $anio): ?>
                <div class="year-link" data-year="<?php echo $anio; ?>">
                    <strong><?php echo $anio; ?></strong>
                </div>
                <?php endforeach; ?>

                <div class="year-link" id="videos-link">
                    <strong>Videos</strong>
                </div>
            </main>
        </div>
    </div>

    <footer class="marca">
        <p>Ⓒ CosplayFyV <?php echo $anio_actual; ?></p>
    </footer>

    <script>
        // JavaScript para manejar los clics
        document.addEventListener('DOMContentLoaded', function() {
            // Manejar clic en los años
            const yearLinks = document.querySelectorAll('.year-link[data-year]');
            yearLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const year = this.getAttribute('data-year');
                    window.location.href = `eventos.php?anio=${year}`;
                });
            });

            // Manejar clic en el link de videos
            document.getElementById('videos-link').addEventListener('click', function() {
                window.open('<?php echo htmlspecialchars($url_videos); ?>', '_blank');
            });

            // Efecto hover para los links
            yearLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                    this.style.transition = 'transform 0.2s';
                });
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        });
    </script>
</body>
</html>