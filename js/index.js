/**
 * Splash de bienvenida:
 * Espera N segundos y redirige a pagina.html.
 * Todo el control del tiempo está aquí, en JS.
 **/

(function () {
    'use strict';

    // ===== CONFIGURACIÓN =====
    const SEGUNDOS = 10;              // tiempo de espera
    const DESTINO = 'principal.html';  // página principal

    // ===== REDIRECCIÓN DESPUÉS DE N SEGUNDOS =====
    setTimeout(function () {
        window.location.href = DESTINO;
    }, SEGUNDOS * 1000);


})(); 

