function startMove(obj,json,totalTime,singleTime,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//取初始值
		var flag=true;//flag必须定义在定时器内
		//对json中的属性进行遍历
		for(var attr in json){
			var icur;
			if (attr=='opacity') {
				icur=parseFloat(getStyle(obj,attr)*100);
			}else{
				icur=parseInt(getStyle(obj,attr));
			}
			//确定速度
			var num=totalTime/singleTime;
			var speed=(json[attr]-icur)/num;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//判断运动
			if (icur!=json[attr]) {
				flag=false;
				if (attr=='opacity') {
					obj.style[attr]='alpha(opacity:'+(icur+speed)+')';
					obj.style[attr]=(icur+speed)/100;
				}else{
					obj.style[attr]=icur+speed+"px";
				}
			}
		}
		//必须放在for循环后
		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	},singleTime);
}
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}