$(document).ready(function(){
	$('.price-button').hover(function(){
		$('#prices').removeClass('hide');
		//$('#rates p').style('font-size: 0.8em');
	});

	$('.close').click(function(){
		$('#prices').addClass('hide');
	});
});