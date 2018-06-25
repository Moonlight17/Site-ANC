$(document).ready(function(){



	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 900);
		return false;
	});




	$('.carousel').carousel({
	  interval: 1000
	})
});