var prize=['iphone7','s7edge','ipad','小米笔记本','谢谢参与','2000元现金','乐视电视'];
var timer=null;
var flag=0;
window.onload=function(){
	var start=document.getElementById("start"),
		stop=document.getElementById("stop");
		//鼠标事件
	start.onclick=startGame;
	stop.onclick=stopGame;
		//键盘事件
	document.onkeyup=function(e){
		if (e.keyCode==13) {
			if (flag==0) {
				startGame();
			}else{
				stopGame();
			}
		}
	};
};
function startGame(){
	clearInterval(timer);
	var title=document.getElementById("title");
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*7);
		title.innerHTML=prize[random];	
	},50);
	var start=document.getElementById("start");
	start.style.background="gray";
	flag=1;
}
function stopGame(){
	var start=document.getElementById("start");
	clearInterval(timer);
	start.style.background="blue";
	flag=0;
}