<?php
require_once postgresql://postgres.ujpkpkocdsjdchrittyq:[Emilyt@300@aws-0-us-east-2.pooler.supabase.com:6543/postgres

// Configuración (usa tus credenciales reales)
$host = 'db.ujpkkocdsjdchrittyq.supabase.co'; // Host corregido (sin "k" repetida)
$port = '5432';
$dbname = 'postgres';
$user = 'postgres';
$password = '[Emilyt@300]'; // Reemplaza con tu contraseña

try {
    // Cadena de conexión con SSL obligatorio
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;sslmode=require";
    
    // Conexión PDO
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    echo "✅ ¡Conectado a Supabase!";
    
    // Ejemplo: Consultar version de PostgreSQL
    $version = $pdo->query("SELECT version()")->fetchColumn();
    echo "<br>Versión del servidor: " . $version;

} catch (PDOException $e) {
    die("❌ Error de conexión: " . $e->getMessage());
}
?>