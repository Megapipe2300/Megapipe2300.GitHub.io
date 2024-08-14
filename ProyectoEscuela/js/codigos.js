/* Ajax*/

function CargaPagina(sUrl) {
            $.ajax({
                type: "GET",
                cache: false,
                url: sUrl,
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                success: function(msg) {
                    if (msg.length > 0) {
                        document.getElementById("tabla").innerHTML = msg;
                        return;
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Página No Encontrada");
                }
            });
        }


/* CUAROUSEL TIEMPO*/


		let identificadorIntervaloDeTiempo;
		let IndicadorRotacion=0;
		identificadorIntervaloDeTiempo = setInterval(Rotacion, 4000);
		
		function Rotacion(){
			if(IndicadorRotacion==5){
				document.querySelector(".glider-dot").parentElement.children[0].click();
				IndicadorRotacion=0;
			}else{
				document.getElementById("next").click();
				IndicadorRotacion++;		
			}
			
		}
		CargaPagina('Paginas/Inicio.html');




	
	/*NAVBAR*/
	

document.addEventListener('DOMContentLoaded', function() {
  const toggleMenu = document.querySelector('.drawer');
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
  const menuLinks = document.querySelectorAll('.drop-down-menu');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      toggleMenuActive(false);
    });
  });


    }
  });
});




/* SCROLL*/

 // Obtener todos los botones con la clase "miBoton"
    var botones = document.getElementsByClassName("miBoton");

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
    boton.addEventListener("click", function() {
        // Desplazarse a la posición (300, 500) en la ventana
        window.scrollTo(200, 500);
    });
	
	

    

	

/* CUAROUSEL TIEMPO*/

<script type="text/javascript">
		let identificadorIntervaloDeTiempo;
		let IndicadorRotacion=0;
		identificadorIntervaloDeTiempo = setInterval(Rotacion, 4000);
		
		function Rotacion(){
			if(IndicadorRotacion==5){
				document.querySelector(".glider-dot").parentElement.children[0].click();
				IndicadorRotacion=0;
			}else{
				document.getElementById("next").click();
				IndicadorRotacion++;		
			}
			
		}
		CargaPagina('Paginas/Inicio.html');
    </script>