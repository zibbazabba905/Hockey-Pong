import canvas from "./canvas.js";
const ctx = canvas.getContext("2d");
ctx.save();

function init(){
    ctx.restore();
    ctx.beginPath();
}
function stroke(width,color){
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
}
function fill(color){
    ctx.fillStyle= color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
export function dot (x,y,color="black"){
    init();
    ctx.arc(x,y,2,0,Math.PI*2,false);
    fill(color);
}
export function line(x, y, x2, y2, color="black", width=1){
    init();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    stroke(width,color);
}
//old function drawSquare(x,y,x2,y2,fill,width=1,color="black"){
//2nd function square(minX,minY,maxX,maxY,fill,width=1,color="black"){
export function square(minX,minY,maxX,maxY,color,width=1){
    init();
    ctx.rect(minX,minY,maxX-minX,maxY-minY);
    stroke(width,color);
}
export function fSquare(minX,minY,maxX,maxY,color){
    init();
    ctx.rect(minX,minY,maxX-minX,maxY-minY);
    fill(color);    
}
export function circle(x,y,r,color,width=1,start=0,end=Math.PI*2){
    init();
    ctx.arc(x, y, r, start,end,false);
    stroke(width,color);
}
export function fCircle(x,y,r,color,start=0,end=Math.PI*2){
    init();
    ctx.arc(x, y, r, start,end,false);
    fill(color);
}
export function text(x,y,message,font,color){
    ctx.restore();
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.fillStyle= color;
    ctx.fillText(message,x,y);
    ctx.restore();
}
