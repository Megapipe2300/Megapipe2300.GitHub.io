// script.js
function toggleMenu(menuId) {
    // Oculta todos los menús abiertos
    document.querySelectorAll(".drop-down-menu-content").forEach(menu => {
        if (mdrawer !== drawer) {
            menu.classList.remove("show");
        }
    });

    // Alterna la visibilidad del menú específico
    const menu = document.getElementById(menuId);
    menu.classList.toggle("show");
}


