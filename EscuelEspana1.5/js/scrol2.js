/* SCROLL*/

 // Obtener todos los botones con la clase "miBoton"
    var botones = document.getElementsByClassName("boton");
	
    // Recorrer todos los botones y agregar el event listener a cada uno
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function() {
            // Desplazarse a la posición (300, 500) en la ventana
            window.scrollTo(300, 500);
        });
    }
	
	
	 // Obtener el primer botón con la clase "miBoton"
    var botone = document.getElementsByClassName("boton")[0];

    // Agregar un event listener para el evento "click"
    buton.addEventListener("click", function() {
        // Desplazarse a la posición (300, 500) en la ventana
        window.scrollTo(200, 500);
    });
	


    