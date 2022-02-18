import Vec2D from "./vector2d.js";
import * as draw from "./drawingFunctions.js";
import * as g from "./globalFunctions.js"
import rink from "./rink.js";

class Unit{
  constructor(homeTeam, position){
    this.pos;
    this.r = 5;
    this.width = 2*this.r;
    this.color = (homeTeam)? "green" : "red";
    this.velocity = new Vec2D(0,0);
    this.height = 50;
    this.speed = 5;
    this.player = false;
    this.position = position; //bool "is defense"
    this.homeTeam = homeTeam; //bool "is homeTeam"
  }
  get bounds(){
    return {
      min:new Vec2D(this.pos.x-this.r,this.pos.y-this.height*.5),
      max:new Vec2D(this.pos.x+this.r,this.pos.y+this.height*.5)
    }    
  }
  init(){//used for multiplayer/ai later
    if (this.homeTeam){
      this.player = true;
    }
    (this.homeTeam)?
      (this.position)? 
        this.pos = new Vec2D(rink.faceOff.circle.min.x,rink.center.y) :
        this.pos = new Vec2D(rink.faceOff.spot.max.x,rink.center.y) :
      (this.position)?
        this.pos = new Vec2D(rink.faceOff.spot.min.x,rink.center.y) :
        this.pos = new Vec2D(rink.faceOff.circle.max.x,rink.center.y);
  }
  playerInput(){
    //leave on units or make a seperate handler?
    (this.player)? //player because of multiplayer/ai later
      (g.keys.w)?
        this.velocity.y = -this.speed:
      (g.keys.s)?
        this.velocity.y = +this.speed:
      this.velocity.y = 0
      :
      (g.keys.ArrowUp)?
        this.velocity.y = -this.speed:
      (g.keys.ArrowDown)?
        this.velocity.y = +this.speed:
      this.velocity.y = 0;
  }
  draw(){
    draw.fSquare(this.bounds.min.x,this.bounds.min.y,this.bounds.max.x,this.bounds.max.y,this.color);
  }
  run(){
    g.moveObject(this);
    this.playerInput();
    this.draw();
  }
};

const unitArray = [];
for(const homeTeam of [true, false]){
  for (const defense of [true, false]){
    unitArray.push(new Unit(homeTeam,defense));
  }
}
export default unitArray;
