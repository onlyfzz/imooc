$(function(){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var menu=$('#menu');
		var content=$('.content');
		var curentId='';
		content.each(function() {
			var m=$(this);
			var mTop=m.offset().top;
			if (top>mTop-150) {
				curentId='#'+m.attr('id');
			}else{
				return false;
			}
		});
		var currentLink=menu.find('.current');
		if (curentId&&currentLink.attr('href')!=curentId) {
			currentLink.removeClass('current');
			menu.find('[href="'+curentId+'"]').addClass('current');
		}
	});
});