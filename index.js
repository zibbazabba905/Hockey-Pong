import canvas from "./modules/canvas.js";
const ctx = canvas.getContext("2d");
import gameState from "./modules/gameState.js";
import goals from "./modules/goals.js";


function run(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameState.runState();
  //requestAnimationFrame(run);
}
//run();
setInterval(run, 16.6);

