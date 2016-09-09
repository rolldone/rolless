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
	var defineTop = 0;
	$('.menu_item a').click(function(e){
		e.preventDefault();
    	$('.menu_icon').trigger('click');
    	if(defineTop > $($(this).attr('href')).offset().top){
    		defineTop += $($(this).attr('href')).offset().top;
    	}else if(defineTop == 0){
    		defineTop += $($(this).attr('href')).offset().top;
    	}else{
    		defineTop += $($(this).attr('href')).offset().top;
    	}
    	console.log(defineTop +" "+$($(this).attr('href')).offset().top);
		//var gg = $(this).parents('.wrapper_demo').find('.content_body').scrollTop;
		$(this).parents('.wrapper_demo').find('.content_body').animate({ 
        	scrollTop: defineTop
    	}, 600);
	});
})();

