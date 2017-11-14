
$(document).ready(function() {
	window.addEventListener("orientationchange", function() {
    logoSizing();
    //alert(window.orientation);
	}, false);
	window.addEventListener("resize", function() {
	  logoSizing();
	}, false);
	logoSizing();
	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > $('.banner').height() && $(window).width()>800) {
	        $('nav').addClass('fixed');
	    } else {
	        $('nav').removeClass('fixed');
	    }
	});

	function logoSizing(){
		var margin ='0px';
		if ($(window).width()<985){
			margin = (($('.banner').width()-$('.logo').width())/2) +'px';
			$('.logo').css('margin-left', margin);
		}else{
			$('.logo').css('margin-left', margin);
		}
	}
});
