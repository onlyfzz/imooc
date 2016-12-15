// window.onload=function(){
// 	var menu=document.getElementById('menu');
// 	var main=document.getElementById('main');
// 	var content=main.getElementsByClassName('content');
// 	window.onscroll=function(){
// 		var currentId='';
// 		var sTop=document.documentElement.scrollTop||document.body.scrollTop;
// 		for(var i=0;i<content.length;i++){
// 			var cTop=content[i].offsetTop;
// 			if (sTop>cTop-150) {
// 				currentId=content[i].id;
// 			}else{
// 				break;
// 			}
// 		}
// 		var currentLink=menu.getElementsByClassName('current')[0];
// 		if (currentId&&currentLink.href!=currentId) {
// 			currentLink.className=currentLink.className.replace(/^current\s+|\s+curent\s+|\s+current\s*$|^current$/g,' ');
// 			menus=menu.getElementsByTagName('a');
// 			for(var j=0;j<menus.length;j++){
// 				if (menus[j].href.replace(/.*#/,'')==currentId) {
// 					menus[j].className+=' current';
// 				}
// 			}
// 		}
// 	};
// };
window.onload=function(){
	var menu=document.getElementById('menu');
	var main=document.getElementById('main');
	var content=main.getElementsByClassName('content');
	var mark=0;
	window.onscroll=function(){
		var currentId='';
		var sTop=document.documentElement.scrollTop||document.body.scrollTop;
		for(var i=0;i<content.length;i++){
			var cTop=content[i].offsetTop;
			if (sTop>cTop-150) {
				mark=i;
			}else{
				break;
			}
		}
		var menus=menu.getElementsByTagName('a');
		for(var j=0;j<menus.length;j++){
			menus[j].className=menus[j].className.replace(/^current\s+|\s+curent\s+|\s+current\s*$|^current$/g,' ');
		}
		menus[mark].className+=' current';
	};
};