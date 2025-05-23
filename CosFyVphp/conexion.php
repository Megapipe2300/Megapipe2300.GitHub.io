<?php


// Configuración (usa tus credenciales reales)
$host = 'aws-0-us-east-2.pooler.supabase.com'; // Host corregido (sin "k" repetida)
$port = '5432';
$dbname = 'postgres';
$user = 'postgres.ujpkpkocdsjdchrittyq';
$password = 'Emilyt@300'; // Reemplaza con tu contraseña

try {
    // Cadena de conexión con SSL obligatorio
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;sslmode=require";
    
    // Conexión PDO
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
   
    
    // Ejemplo: Consultar version de PostgreSQL
    $version = $pdo->query("SELECT version()")->fetchColumn();
    

} catch (PDOException $e) {
    die("❌ Error de conexión: " . $e->getMessage());
}
?>