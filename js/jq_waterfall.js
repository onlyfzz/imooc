$(window).on('load',function(){
	waterfall();
	$(window).on('scroll',function(){
		var data={pics:[{src:'0.jpg'},{src:'1.jpg'},{src:'2.jpg'},{src:'3.jpg'},{src:'18.jpg'},{src:'19.jpg'},{src:'20.jpg'},]};
		if (isScroll()) {
			$.each(data.pics,function(key,ele){
				$('#main').html(function(index,curent){
					return curent+='<div class="box"><div class="pic"><img src="i/images/'+ele.src+'"></div></div>';
				});
			});
			waterfall();
		}
	});
});
function waterfall(){
	var boxs=$('#main>div');
	var boxW=boxs.eq(0).outerWidth();
	var cWidth=$(window).width();
	var cols=Math.floor(cWidth/boxW);
	var heightArr=[];
	$('#main').css({
		'width': boxW*cols+'px',
		'margin': '0 auto'
	});
	boxs.each(function(index, el) {
		if (index<cols) {
			heightArr[index]=boxs.eq(index).outerHeight();
		}else{
			var minHeight=Math.min.apply(null,heightArr);
			var minIndex=$.inArray(minHeight,heightArr);
			$(el).css({
				position:'absolute',
				top:minHeight+'px',
				left:minIndex*boxW+'px'
			});
			heightArr[minIndex]+=$(el).outerHeight();
		}
	});
}
function isScroll(){
	var last=$('#main>div').last();
	var lastH=last.offset().top+Math.floor(last.outerHeight()/2);
	var windowH=$(window).height()+$(window).scrollTop();
	return lastH<windowH;
}