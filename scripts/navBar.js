
$(document).ready(function() {
	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > $('.banner').height()) {
	        $('nav').addClass('fixed');
	    } else {
	        $('nav').removeClass('fixed');
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



	
	
	var oneClick = false;
	$('.nav-mobile').click(function(){
		if(!oneClick){
			oneClick= true;
			$('.two').addClass('two-clicked');
			$('.one').addClass('one-clicked');
			$('.three').addClass('three-clicked');
			$('.nav-items').addClass('mobile-menu');
			$('.nav-items li').addClass('mobile-li');
		}else{
			oneClick = false;
			$('.two').removeClass('two-clicked');
			$('.one').removeClass('one-clicked');
			$('.three').removeClass('three-clicked');
			$('.nav-items').removeClass('mobile-menu');
			$('.nav-items li').removeClass('mobile-li');
		}
	});
});