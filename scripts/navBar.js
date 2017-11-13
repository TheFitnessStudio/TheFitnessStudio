
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
					$('.nav-items ul').addClass('fixed-ul');
	    } else {
	        $('nav').removeClass('fixed');
					$('.nav-items ul').removeClass('fixed-ul');
	    }
	});

	/*//this bit doesn't work yet
	var offset = null;
	var interval = setInterval(function(){
		$('.feature').each(function(){
			offset = $(this).offset().top;
	    	if($(window).scrollTop()> offset && $(
	    		this + "+ div").offset().top < offset){
	    		$('.nav-items ul').find('li a.active').removeClass('active');
	    		$(this).addClass('active')
	    	}
	    });
	}, 250);*/


	/*var oneClick = false;
	$('.nav-mobile').click(function(){
		if(!oneClick){
			oneClick= true;
			$('.two').addClass('two-clicked');
			$('.one').addClass('one-clicked');
			$('.three').addClass('three-clicked');
		}else{
			oneClick = false;
			$('.two').removeClass('two-clicked');
			$('.one').removeClass('one-clicked');
			$('.three').removeClass('three-clicked');
		}
	});*/

	function logoSizing(){
		var margin ='0px';
		if ($(window).width()<985){
			margin = (($('.banner').width()-$('.logo').width())/2) +'px';
			$('.logo').css('margin-left', margin);
			//console.log(margin);
		}else{
			$('.logo').css('margin-left', margin);
		}
	}
});
