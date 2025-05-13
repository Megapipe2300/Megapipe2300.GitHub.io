<?php
require 'conexion.php';

// Mostrar todos los errores
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Información de Depuración</h2>";

// 1. Verificar conexión
if ($conexion->connect_error) {
    die("<p style='color:red;'>Error de conexión: " . $conexion->connect_error . "</p>");
}
echo "<p style='color:green;'>✓ Conexión establecida</p>";

    $result = $conexion->query("SHOW TABLES LIKE 'album'");
echo $result->num_rows > 0 
    ? "<p style='color:green;'>✓ Tabla 'album' existe</p>" 
    : "<p style='color:red;'>× La tabla 'album' no existe</p>";

// 2. Verificar tablas
$result = $conexion->query("SHOW TABLES LIKE 'fotos'");
echo $result->num_rows > 0 
    ? "<p style='color:green;'>✓ Tabla 'fotos' existe</p>" 
    : "<p style='color:red;'>× La tabla 'fotos' no existe</p>";

;


// 3. Consultar fotos
$query = "SELECT * FROM fotos";
$result = $conexion->query($query);

if (!$result) {
    die("<p style='color:red;'>Error en consulta: " . $conexion->error . "</p>");
}

echo "<p>Total de fotos: " . $result->num_rows . "</p>";

// Mostrar galería
while($foto = $result->fetch_assoc()) {
    $url = 'uploads/' . $foto['url'];
    echo "<div style='margin:20px; border:1px solid #ccc; padding:10px;'>";
    echo "<h3>ID Album: " . $foto['id_album'] . "</h3>";
    echo "<h3>Nombre Evento: " . $foto['nombre_evento'] . "</h3>";
    echo "<p>Ruta en BD: " . $foto['url'] . "</p>";

    echo "</div>";
}

$conexion->close();
?>