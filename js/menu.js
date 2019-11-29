$(document).ready(function() {
  $('.menu').click(function() {
    $('nav ul').slideToggle(600);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready