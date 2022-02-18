import Vec2D from "./vector2d.js";
import * as draw from "./drawingFunctions.js";
import * as g from "./globalFunctions.js"
import rink from "./rink.js";


class Puck{
  constructor(){
    this.r = 5;
    this.pos = new Vec2D(rink.center.x,rink.center.y);
    this.speed = 5;
    this.direction = new Vec2D(0,0);
    this.winScore = 5;
    this.flag = {bounceCheck:false};
  }
  get bounds(){
    return {min:this.pos.subScalar(this.r), max:this.pos.addScalar(this.r)};
  }
  get velocity(){
    return new Vec2D(this.direction.x*this.speed, this.direction.y*this.speed);
  }
  randomLaunch(){
    for(const axis of ["x", "y"]){
      puck.direction[axis] = ((Math.floor(Math.random() *2))? 1 : -1);
    }
  }
  reset(){
    this.speed = 5;
    this.pos = new Vec2D(rink.center.x,rink.center.y);
    this.randomLaunch();
  }
  draw(){
    draw.fCircle(this.pos.x,this.pos.y,this.r,"white");
  }
  run(){
    g.edgeCollision(this);
    g.playerCollision(this);
    g.scorePoints(this);
    g.moveObject(this);
    this.draw();
  }
}

const puck = new Puck();
export default puck;

