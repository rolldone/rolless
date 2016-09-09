(function(){
	var isopen = false;
	$('.menu_icon').click(function(data){
		if(isopen == false){
			isopen = true;
			open(this);
			return;
		}
		close(this);
		isopen = false;
		console.log('closed');
		return;
		//$(this).parents('.wrapper_demo').find('.side_wrap').animate({ 'width': '15%' }, 1000);
	});
	function open(tara){
		//$(tara).parents('.wrapper_demo').find('.side_wrap').css({"width":"14%"});
		//$(tara).parents('.wrapper_demo').find('.side_wrap').css({"width":"450px"});
		var for_margin = $(tara).parents('.wrapper_demo').find('.side_wrap').css("width");
		console.log(for_margin);
		$(tara).parents('.content_body').animate({ 'margin-left': '-'+for_margin }, 300);
		console.log('opened');
	}

	function close(tara){
		$(tara).parents('.content_body').animate({ 'margin-left': '0%' }, 300);
		
	}
})();

