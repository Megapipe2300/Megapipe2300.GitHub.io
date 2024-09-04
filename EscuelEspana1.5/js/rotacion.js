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