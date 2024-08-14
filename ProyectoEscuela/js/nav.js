document.addEventListener('DOMContentLoaded', function() {
  const toggleMenu = document.querySelector('.drop-down-menu');
  const menu = document.querySelector('.menu-box');



  function toggleMenuActive(active) {
    if (active) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  }

  toggleMenu.addEventListener('click', function() {
    toggleMenuActive(!menu.classList.contains('active'));
  });

  // Cerrar el menú cuando se hace clic en un enlace
  const menuLinks = document.querySelectorAll('.drop-down-menu-content');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      toggleMenuActive(false);
    });
  });

  // Cerrar el menú cuando se hace clic fuera de él
  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !toggleMenu.contains(event.target)) {
      toggleMenuActive(false);
    }
  });
});


