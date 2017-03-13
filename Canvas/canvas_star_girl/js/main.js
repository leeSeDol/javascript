var can;
var ctx;
var w;
var h;
var girlPic=new Image();
window.onload=function(){
	init();
}
function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w=can.width;
	h=can.height;

	girlPic.src="src/girl.jpg";
	gameloop();	
}
function gameloop(){
	window.requestAnimFrame(gameloop);
	drawBackground();
	drawGirl();
}
function drawBackground(){
	ctx.fillStyle="#393550";
	ctx.fillRect(0,0,w,h);
}
function drawGirl(){
	//drawImage(image,x,y,width,height)
	ctx.drawImage(girlPic,100,150,600,300);
}
