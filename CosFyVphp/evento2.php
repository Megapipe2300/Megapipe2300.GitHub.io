<?php
include 'conexion.php'; // Asegúrate de que este archivo crea la conexión PDO como $pdo

$year = isset($_GET['anio']) ? intval($_GET['anio']) : date('Y');
$page_title = "Eventos Cosplay $year";
$page_description = "Galería de eventos cosplay del año $year";

// Obtener eventos del año seleccionado
$sql = "SELECT id_eventos, nombre_evento, YEAR(fecha_evento) as anio  FROM eventos WHERE fecha_evento = ? ORDER BY nombre_evento";

try{ 
    $stmt = $pdo->prepare($sql); // Corregido: cambié $pd por $pdo
    $stmt->bindParam(':year', $year, PDO::PARAM_INT);
    $stmt->execute();
    
    $eventos = array();
    
    while($fila = $stmt->fetch(PDO::FETCH_ASSOC))
   {
        $eventos[$fila['nombre_evento']] = "galeria.php?id_evento=" . $fila['id_eventos'];
    }
    
} catch (PDOException $e) {
    die("Error en la consulta: " . $e->getMessage());
}


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




?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($keywords); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
            padding-bottom: 80px; /* Espacio para el botón volver */
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
            font-size:80px;
        }

        .main {
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            justify-content: center;
            gap: 15px;
        }   

        .main div {
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

        .main div:hover {
            background-color: #ff0000;
            transform: scale(1.03);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .vol {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 100;
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

        @media screen and (max-width: 665px) {
            .main div {
                width: calc(50% - 20px);
                font-size: 16px;
            }
            
            .boton {
                padding: 10px 20px;
                font-size: 16px;
            }
        }

        @media screen and (max-width: 480px) {
            .main div {
                width: 100%;
            }
            
            .elemento h1 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">
           <h1> <?php echo $year; ?></h1>

            <div class="main">    
                <?php if (!empty($eventos)): ?>
                    <?php foreach ($eventos as $nombre => $url): ?>
                        <div onclick="location.href='<?php echo htmlspecialchars($url); ?>'">
                            <strong><?php echo htmlspecialchars($nombre); ?></strong>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div style="width: 100%; text-align: center;">
                        <strong>No hay eventos registrados para este año</strong>
                    </div>
                <?php endif; ?>
            </div>
        </div>   
        

    </div>
       <div class="vol">
  <button onclick = "history.back()"> volver </button> 
</div>

</body>
</html>

