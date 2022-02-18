import Vec2D from "./vector2d.js";
import rink from "./rink.js";
import * as draw from "./drawingFunctions.js";
import gameState from "./gameState.js";
import puck from "./puck.js"

class Overlay{
  constructor(){
    this.home = {team:"home", score:0};
    this.away = {team:"away", score:0};
    this.winScore = 1;
    this.winner = null;
    this.infoBox = {
      bounds: {
        min: new Vec2D(rink.faceOff.circle.min.x,rink.faceOff.circle.min.y),
        max: new Vec2D(rink.faceOff.circle.max.x,rink.faceOff.circle.max.y)
      }
    }
  }
  addPoint(team){
    this[team].score++;
  }
  scoreReset(){
    this.home.score = 0;
    this.away.score = 0;
    this.winner = null;
  }
  checkScore(){
    for (const team of [this.home,this.away]){
      if (team.score >= this.winScore){
        this.winner = team;
        gameState.switchState("winState");
      }
    }
  }
  drawInfobox(){
    draw.fSquare(this.infoBox.bounds.min.x, this.infoBox.bounds.min.y, this.infoBox.bounds.max.x, this.infoBox.bounds.max.y,"gray");
    draw.square(this.infoBox.bounds.min.x, this.infoBox.bounds.min.y, this.infoBox.bounds.max.x, this.infoBox.bounds.max.y,"white",5);
  }
  drawScore(){
    draw.text(rink.center.x-(rink.length/4),rink.center.y-(rink.width/4), this.home.score, "bold 100px courier","white");
    draw.text(rink.center.x+(rink.length/4),rink.center.y-(rink.width/4), this.away.score, "bold 100px courier","white");
  }
  drawSpeed(){
    draw.text(rink.center.x-(rink.length/100),rink.center.y+(rink.width/2.5), `speed: ${puck.speed}`, "bold 20px courier","white");
    
  }



  menuDraw(){
    this.drawInfobox();
    draw.text(rink.center.x,rink.center.y-40, "W and S for player 1", "bold 50px courier","green");
    draw.text(rink.center.x,rink.center.y+20, "UP and DOWN for player 2", "bold 45px courier","red");
    draw.text(rink.center.x,rink.center.y+80, "press R to start", "bold 30px courier","white");
  }
  gameDraw(){
    this.drawScore();
    this.drawSpeed();
  }
  winDraw(){
    this.drawInfobox();
    draw.text(rink.center.x,rink.center.y, this.winner.team + " WINS", "bold 100px courier","white");
    draw.text(rink.center.x,rink.center.y+(rink.width/6), "press r to restart", "bold 25px courier","white");
  }
}

const overlay = new Overlay();
export default overlay;