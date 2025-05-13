<?php
include 'conexion.php';

$id_evento = isset($_GET['id_evento']) ? intval($_GET['id_evento']) : 0;

// Obtener información del evento
$sql_evento = "SELECT nombre_evento, fecha_evento FROM eventos WHERE id_eventos = ?";
$stmt_evento = $conexion->prepare($sql_evento);
$stmt_evento->bind_param("i", $id_evento);
$stmt_evento->execute();
$resultado_evento = $stmt_evento->get_result();
$evento = $resultado_evento->fetch_assoc();
$stmt_evento->close();

// Obtener fotos del evento
$sql_fotos = "SELECT  url,titulo FROM fotos WHERE id_eventos = ? ";
$stmt_fotos = $conexion->prepare($sql_fotos);
$stmt_fotos->bind_param("i", $id_evento);
$stmt_fotos->execute();
$resultado_fotos = $stmt_fotos->get_result();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria - <?php echo htmlspecialchars($evento['nombre_evento'] ?? 'Evento'); ?></title>
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
       <style>
        body {
            font-family: "Times New Roman", Times, serif;
            font-size: 20px;
            background: #1c1c1c;
            color: white;
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            color: #ffffff;
            font-size:80px;
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .gallery-item {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .gallery-item:hover {
            transform: scale(1.03);
        }
        
        .gallery-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            cursor: pointer;
        }
        
        .gallery-info {
            padding: 15px;
        }
        
        .gallery-title {
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
        }
        
        .gallery-date {
            font-size: 0.8rem;
            color: #666;
        }
        
        /* Lightbox */
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .lightbox-content {
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 4px;
        }
        
        .lightbox-close {
            position: absolute;
            top: 20px;
            right: 20px;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
        
        .lightbox-caption {
            color: white;
            text-align: center;
            margin-top: 15px;
        }

        .vol button {
            padding: 12px 24px;
            background-color: #bf2548;
            color: #ffffff;
            text-decoration: none;
            text-transform: uppercase;
            border-radius: 1em;
            display: inline-block;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .vol button:hover {
            background-color: #ff0000;
            transform: translateY(-2px);
        }

        
        @media (max-width: 665px) {
            .gallery {
                grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            }


       h1
       {
       font-size:40px;
       
       }

        }
    </style>
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
  <button onclick = "history.back()"> volver </button> 
</div>

</body>
</html>
