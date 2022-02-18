import Vec2D from "./vector2d.js";
import canvas from "./canvas.js";
import * as draw from "./drawingFunctions.js";

class Rink{
  constructor(){
    //scale is *5
      //200f long 85f wide
      //corners are 28f radius circle
    //face Off circles
      //r 15ft, 22ft from middle, 20ft from center, 69ft from center
      //wall, 22.5ft, center, 62.5ft, wall
      //left, 31ft, 80ft, center, 120ft, 169ft, right
    //Goal is 3.33ft(40inches) by 6 ft 16 x 30
    
    this.pongLineWidth = 5
    this.length = 1000;
    this.width = 425;
    this.center= new Vec2D(canvas.buffer.x +500, canvas.buffer.y +this.width/2);
    this.bounds = {
      min: new Vec2D(canvas.buffer.x, canvas.buffer.y),
      max: new Vec2D(canvas.buffer.x +this.length, canvas.buffer.x +this.width)
    }
    this.corner ={
      r: 140,
      min: new Vec2D(this.bounds.min.x +140, this.bounds.min.y +140),
      max: new Vec2D(this.bounds.max.x -140, this.bounds.max.y -140)
    }
    this.line = {
      hGoal: canvas.buffer.x +55,
      hBlue: canvas.buffer.x +375,
      center: this.center.x,
      aBlue: canvas.buffer.x +625,
      aGoal: canvas.buffer.x +945
    }
    this.faceOff = {
      r:75,
      circle:{
        min: new Vec2D(canvas.buffer.x +155, canvas.buffer.y +112.5),
        max: new Vec2D(canvas.buffer.x +845, canvas.buffer.y +312.5)
      },
      spot:{
        min: new Vec2D(canvas.buffer.x +400, canvas.buffer.y +112.5),
        max: new Vec2D(canvas.buffer.x +600, canvas.buffer.y +312.5)
      }
    }
    this.goal = {
      width: 30,
      depth: 16,
      home:{
        min: new Vec2D(canvas.buffer.x +39, canvas.buffer.y +197.5),
        max: new Vec2D(canvas.buffer.x +55, canvas.buffer.y +227.5)
      },
      away:{
        min: new Vec2D(canvas.buffer.x +945, canvas.buffer.y +197.5),
        max: new Vec2D(canvas.buffer.x +961, canvas.buffer.y +227.5)
      },
    }
  }
  draw(){
    draw.square(this.bounds.min.x,this.bounds.min.y,this.bounds.max.x,this.bounds.max.y,"white",this.pongLineWidth);
    draw.line(this.line.center,this.bounds.min.y,this.line.center,this.bounds.max.y,"darkRed",this.pongLineWidth);
    draw.line(this.line.hGoal,this.bounds.min.y,this.line.hGoal,this.bounds.max.y,"white",this.pongLineWidth);
    draw.line(this.line.aGoal,this.bounds.min.y,this.line.aGoal,this.bounds.max.y,"white",this.pongLineWidth);
  }
}
const rink = new Rink();
export default rink;