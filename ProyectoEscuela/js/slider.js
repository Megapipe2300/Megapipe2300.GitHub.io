window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
	    slidesToShow: 1,
		dots: '.carousel__indicadores',
		draggable: true,
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
	
		responsive: [
			{
			  // screens greater than >= 775px para celular
			  breakpoint:655,
			    settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1,
				 itemWidth: 150,
				
			  }
			},{
			  // screens greater than >= 1024px para pc u otro
			  breakpoint: 1024,
			 settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				 itemWidth: 150,
				
			  }
			}
		]
	});

});
