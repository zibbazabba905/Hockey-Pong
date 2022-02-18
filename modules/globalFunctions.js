import rink from "./rink.js";
import puck from "./puck.js";
import unitArray from "./unit.js";
import overlay from "./overlay.js";
import goals from "./goals.js";


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  keys[e.key] = true;
}
function keyUpHandler(e) {
  keys[e.key] = false;
}
export const keys = [];


function objectCollisionDetect(thisObject, otherObject){
  if (thisObject.bounds.max.greaterThan(otherObject.bounds.min).both
  &&  thisObject.bounds.min.lessThan(otherObject.bounds.max).both
    ){
    return true;
  }
};

export function playerCollision(puck){
  for (const unit of unitArray){
    if(objectCollisionDetect(puck,unit) && (!puck.flag.bounceCheck)){
      puck.direction.x = -puck.direction.x;
      puck.speed++
      puck.flag.bounceCheck = true;
      setTimeout(() => {puck.flag.bounceCheck = false}, 60);
    };
  };
};

export const edgeCollision = obj => {
  for(const axis of ["x", "y"]){
    if (obj.bounds.min[axis] < rink.bounds.min[axis]){
      obj.pos[axis] = rink.bounds.min[axis] + obj.r;
      obj.direction[axis] = obj.direction[axis] * -1;
    } else if (obj.bounds.max[axis] > rink.bounds.max[axis]){
      obj.pos[axis] = rink.bounds.max[axis] - obj.r;
      obj.direction[axis] = obj.direction[axis] * -1;
    }
  }
};

export function scorePoints(obj){
  for (let goal of [goals.home, goals.away]){
    if (objectCollisionDetect(obj, goal)){
      overlay.addPoint(goal.team);
      puck.reset();
    }
  }
}

export function moveObject(obj){
  obj.pos = obj.pos.add(obj.velocity);
}

export function positionReset(){
  for(const unit of unitArray){
    unit.pos.y = rink.center.y;
  }
  puck.reset();
}