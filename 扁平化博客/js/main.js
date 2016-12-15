$(function(){
    var mask=$('.mask'),
	    sidebar=$('#sidebar'),
	    backTop=$('.backTop'),
	    showSide=$('#showSide');
	    
	function show(){
		mask.fadeIn();
		sidebar.animate({'right':'0'}, 500);
	}
	function hide(){
		mask.fadeOut();
		sidebar.animate({right:-sidebar.width()},500);
	}
	function back(){
		if ($(window).scrollTop()>$(window).height()) {
			backTop.fadeIn();
		}else{
			backTop.fadeOut();
		}
	}
	backTop.on('click',function(){
		$('html,body').animate({scrollTop:0},500);
	});
	$(window).on('scroll',back);
	showSide.on('click',show);
	mask.on('click',hide);
});