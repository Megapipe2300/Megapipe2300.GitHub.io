<?php
include 'conexion.php'; // Asegúrate que este archivo crea $pdo como conexión PDO

$id_evento = isset($_GET['id_eventos']) ? intval($_GET['id_eventos']) : 0;

try {
    // Obtener información del evento
    $sql_evento = "SELECT id_eventos, nombre_evento,fecha_evento FROM eventos WHERE id_eventos= ? ";
    $stmt_evento = $pdo->prepare($sql_evento);
    $stmt_evento->execute([$id_evento]);
    $evento = $stmt_evento->fetch(PDO::FETCH_ASSOC);

    if (!$evento) {
        die("Evento no encontrado Denm");
    }

    // Obtener fotos del evento
    $sql_fotos = "SELECT url, titulo, fecha_evento FROM fotos WHERE id_evento = ?";
    $stmt_fotos = $pdo->prepare($sql_fotos);
    $stmt_fotos->execute([$id_evento]);
    $fotos = $stmt_fotos->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    die("Error en la consulta: " . $e->getMessage());
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria - <?php echo htmlspecialchars($evento['nombre_evento'] ?? 'Evento'); ?></title>
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
<div class="container">
        <?php if ($evento): ?>
            <h1><?php echo htmlspecialchars($evento['nombre_evento']); ?></h1>
            <div class="gallery">
                <?php if ($resultado_fotos->num_rows > 0): ?>
                    <?php while($foto = $resultado_fotos->fetch_assoc()): ?>
                        <div class="gallery-item">
                            <img src="<?php echo htmlspecialchars($foto['url']); ?>"                              
                                 class="gallery-img">
                        </div>
                    <?php endwhile; ?>
                <?php else: ?>
                    <p style="grid-column: 1 / -1; text-align: center;">
                        No se encontraron fotos para este evento.
                    </p>
                <?php endif; ?>
            </div>
        <?php else: ?>
            <h1>Evento no encontrado</h1>
            <p style="text-align: center;">El evento solicitado no existe o no se pudo cargar.</p>
        <?php endif; ?>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <span class="lightbox-close" id="lightbox-close">&times;</span>
        <div class="lightbox-content">
            <img src="" alt="" class="lightbox-img" id="lightbox-img">
            <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
    </div>
    
    <script>
        // Lightbox functionality
        document.addEventListener('DOMContentLoaded', function() {
            const galleryItems = document.querySelectorAll('.gallery-img');
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const lightboxClose = document.getElementById('lightbox-close');
            
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    lightboxImg.src = this.src;
                    lightboxCaption.textContent = this.dataset.title || '';
                    lightbox.style.display = 'flex';
                });
            });
            
            lightboxClose.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                }
            });
        });
    </script>

    <div class="vol">
        <button onclick="history.back()">Volver</button> 
    </div>
</body>
</html>