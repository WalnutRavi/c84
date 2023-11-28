Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

var roverW=100;
var roverH=90;
var roverX=10;
var roverY=10;
var backgroundimg="mars.jpg";
var roverimg="rover.png";

function add(){
    backImageTag=new Image();
    backImageTag.onload=uploadbackground;
    backImageTag.src=backgroundimg;


    roverImageTag=new Image();
    roverImageTag.onload=uploadingRover;
    roverImageTag.src=roverimg;
}
function uploadingRover(){
    ctx.drawImage(roverImageTag,roverX,roverY,roverW,roverH)
}
function uploadbackground(){
    ctx.drawImage(backImageTag,0,0,Canvas.width,Canvas.height)
}