<?php
include 'conexion.php';

$titulo_sitio = "Cosplay Fotos y Videos";
$descripcion = "Galería de fotos y videos de cosplay organizados por año";
$url_videos = "https://www.youtube.com/channel/UCRCfldc8xm2V5xK8TlKS51A";
$anio_actual = date("Y");

// Obtener años disponibles con eventos
$sql = "SELECT DISTINCT* FROM album";
$resultado = $conexion->query($sql);
$anios = array();
if ($resultado->num_rows > 0) {
    while($fila = $resultado->fetch_assoc()) {
        $anios[] = $fila['id_album'];
    }
}

// Cerrar conexión después de usarla
$conexion->close();
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
    <meta name="apple-mobile-web-app-title" content="CosplayFyV">
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            font-size: 20px;
            background: #1c1c1c;
            color: white;
            margin: 0;
            padding: 0;
        }

        .contenedor {
            display: flex;
            flex-flow: column;
            width: 100%;
            min-height: 100vh;
            box-sizing: border-box;
            position: relative;
            padding-bottom: 80px;
        }

        .elemento {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
        }

        .elemento h1 {
            text-align: center;
            color: #ffffff;
            font-size: clamp(2rem, 5vw, 4.5rem);
            margin: 20px 0;
        }

        .main {
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            justify-content: center;
            gap: 15px;
           
        }   

        .year-link {
            background-color: #bf2548;
            width: 280px;
            min-height: 50px;
            padding: 10px;
            margin: 5px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 4px;
        }

        .year-link:hover {
            background-color: #ff0000;
            transform: scale(1.03);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .marca {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 10px 0;
            background-color: #333;
        }

        @media screen and (max-width: 665px) {
            .year-link {
                width: calc(50% - 20px);
                font-size: 16px;
            }
        }

        @media screen and (max-width: 480px) {
            .year-link {
                width: 100%;
            }
        }
    </style>
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
