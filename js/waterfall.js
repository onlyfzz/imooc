window.onload=function () {
	waterFall('main','box');
	window.onscroll=scroll;
};
/**
 *窗口的滚动事件
 */
function scroll(){
	var data={pics:[{src:'0.jpg'},{src:'1.jpg'},{src:'2.jpg'},{src:'3.jpg'},{src:'18.jpg'},{src:'19.jpg'},{src:'20.jpg'},]};
	if (checkScroll()) {
		var parent=document.getElementById('main');
		for(var i=0;i<data.pics.length;i++){
			parent.innerHTML+='<div class="box"><div class="pic"><img src="i/images/'+data.pics[i].src+'"></div></div>';
		}
		waterFall('main','box');
	}
}
/**
 *对parent中的box进行瀑布流排序
 *@param{string}parent 传入父元素的id
 *@param{string}box 传入子元素的className
 */
function waterFall(parent,box){
	var p=document.getElementById(parent);
	var boxs=getClass(p,box);
	var boxWidth=boxs[0].offsetWidth;
	var cWidth=document.documentElement.clientWidth||document.body.clientWidth;
	var cols=Math.floor(cWidth/boxWidth);
	p.style.cssText='width:'+boxWidth*cols+'px;margin:0 auto;';
	var heightArr=[];
	for(var i=0;i<boxs.length;i++){
		if (i<cols) {
			heightArr.push(boxs[i].offsetHeight);
		}else{
			var min=Math.min.apply(null,heightArr);
			var index=getMinIndex(heightArr,min);
			boxs[i].style.position='absolute';
			boxs[i].style.top=min+'px';
			boxs[i].style.left=boxs[index].offsetLeft+'px';
			heightArr[index]+=boxs[i].offsetHeight;
		}
	}
}
/**
 *确定是否开始加入数据
 *@return{boolean} 返回是否加入数据
 */
function checkScroll(){
	var parent=document.getElementById('main');
	var boxs=getClass(parent,'box');
	var last=boxs[boxs.length-1];
	var lastHeight=last.offsetTop+Math.floor(last.offsetHeight/2);
	var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
	var cHeight=document.documentElement.clientHeight||document.body.clientHeight;
	return lastHeight<(scrollHeight+cHeight);
}
/**
 *返回数组中最小值的索引
 *@param{string} arr 传入的数组
 *@param{string} min 传入数组中最小的值
 *@return{number} 返回最小值的索引
 */
function getMinIndex(arr,min){
	for(var i=0;i<arr.length;i++){
		if (arr[i]==min) {
			return i;
		}
	}
}
/**
 *返回父节点中所有类名为box的子节点
 *@param{object} parent 传入的父节点
 *@param{string} box 传入子元素className
 *@return{Array} 返回类名为box的数组
 */
function getClass(parent,box){
	var boxArr=[];
	var child=parent.getElementsByTagName('*');
	for(var i=0;i<child.length;i++){
		if (child[i].className==box) {
			boxArr.push(child[i]);
		}
	}
	return boxArr;
}