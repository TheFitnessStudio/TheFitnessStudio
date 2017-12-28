
$(document).ready(function() {

	/*$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > $('.banner').height() && $(window).width()>800) {
	        $('nav').addClass('fixed');
	    } else {
	        $('nav').removeClass('fixed');
	    }
	});*/

	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function() {
	    if ($("nav").isInViewport()) {
				$("#to-top").addClass("hide");
				$("#to-top").removeClass("show");
			}else{
				$("#to-top").addClass("show");
				$("#to-top").removeClass("hide");
			}
	});
});
