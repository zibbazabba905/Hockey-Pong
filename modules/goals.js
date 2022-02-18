import Vec2D from "./vector2d.js";
import rink from "./rink.js";
class Goal{
  constructor(homeTeam){
    this.homeTeam = homeTeam;
    this.team = (homeTeam)? "away" : "home";
  }
  get bounds(){
    if (this.homeTeam){ 
      return {
        min: new Vec2D(rink.bounds.min.x, rink.bounds.min.y), 
        max: new Vec2D(rink.line.hGoal, rink.bounds.max.y)
      }
    }
    else{
      return {
        min: new Vec2D(rink.line.aGoal, rink.bounds.min.y), 
        max: new Vec2D(rink.bounds.max.x, rink.bounds.max.y)
      };
    }
  }
}
const hGoal = new Goal(true);
const aGoal = new Goal(false);
const goals = {home:hGoal, away:aGoal};
export default goals;
