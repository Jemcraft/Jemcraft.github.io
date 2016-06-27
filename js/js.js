$( document ).ready(function() {  


// hide .navbar first
$("#header").hide();
	
if ($(window).width() > 768) {
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 480) {
				$('#header').fadeIn();
			} else {
				$('#header').fadeOut();
			}
		});
	});
} else {}


});
