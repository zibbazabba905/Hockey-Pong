import * as g from "./globalFunctions.js"
import rink from "./rink.js";
import puck from "./puck.js";
import unitArray from "./unit.js";
import overlay from "./overlay.js";


class GameState{
  constructor(){
    this.currentState = "init";
  }
  switchState(newState){
    this.currentState = newState;
  }
  runState(){
    switch (this.currentState){
      case "init":
      init();
      break;
      case "menu":
      menu();
      break;
      case "gameRun":
      gameRun();
      break;
      case "winState":
      winState();
      break;
    }
  }
}
const gameState = new GameState();
export default gameState;

function init(){
  overlay.scoreReset();
  unitArray.forEach((unit)=>unit.init());
  g.positionReset();
  g.keys.r = false; //window focus issue
  overlay.winScore = prompt("Number of points:", 5);
  gameState.switchState("menu");
}
function menu(){
  rink.draw();
  overlay.menuDraw();
  if (g.keys.r){
    gameState.switchState("gameRun");
  }
}
function gameRun(){
  rink.draw();
  puck.run();
  unitArray.forEach((unit)=>unit.run());
  overlay.gameDraw();
  overlay.checkScore();
}
function winState(){
  rink.draw();
  overlay.winDraw();
  if (g.keys.r){
    gameState.switchState("init");
  }
}



