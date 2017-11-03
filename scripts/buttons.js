$(document).ready(function(){
	var open = false;
	var allButtonOpens = $(".buttonOpens");
	$('.button').click(function(){
		if(open==false){
			$(this).parent().find(allButtonOpens).removeClass('hide');
			changeTextTo($(this),$(this).attr('open-text'));
			open=true;
		}else{
			$(this).parent().find(allButtonOpens).addClass('hide');
			changeTextTo($(this),$(this).attr('closed-text'));
			open = false;
		}
	});

	$('.close').click(function(){
		$(this).parent().find(allButtonOpens).addClass('hide');
		changeTextTo($(this),$(this).attr('closed-text'));
	});

	function changeTextTo(element, string){
		element.text(string);
	}
});
