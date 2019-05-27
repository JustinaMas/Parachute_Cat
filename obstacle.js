
class Obstacle {
  constructor() {
    let spacing = 125;
  
    let centery = random(spacing, width-50 - spacing);

    this.top = centery - spacing / 2;
    this.bottom = width - (centery + spacing / 2);
    this.w = 80;
    this.y = height + this.w;
    this.speed = 7;
    this.checked = false;
  }

  hits(agent) {
    if ((agent.y + agent.r) > this.y && (agent.y - agent.r) < (this.y + this.w) ) {
      if ((agent.x - agent.r) < this.top || (agent.x + agent.r) > (width - this.bottom)) {
        return true;
      }
    }
    return false;
  }

  isPassed(agent) {
    if ((agent.y - agent.r) > (this.y + this.w) && this.checked == false) {
      agent.obstacleScore ++;
      this.checked = true;
    }
  }

  show() {
    stroke(255);
    // fill(200);
    image(cloudFill, 0, this.y, this.top, this.w);
    image(cloudFill, width - this.bottom, this.y, width, this.w);
  }

  update() {
    this.y -= this.speed;
  }

  offscreen() {
    if (this.y < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}