const canvas = document.getElementById("myCanvas");
canvas.style.cursor = "none";
canvas.style.background = "black";
canvas.c = {x:canvas.width/2, y:canvas.height/2}; 
canvas.buffer = {x:50, y:50};
export default canvas;
