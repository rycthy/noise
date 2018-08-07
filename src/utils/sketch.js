import { waveform, martianA, martianB } from './patches/tranquilPatches';

export default (props) => (p) => {
  class Drop {
    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(-200, -100);
      this.yspeed = p.random(4, 10);
    }
    fall() {
      this.y = this.y + this.yspeed;
      if (this.y > p.height) {
        this.y = p.random(-200, -100);
      }
    }
    show() {
      p.stroke('#F1B255');
      p.strokeWeight(1);
      p.line(this.x, this.y, this.x, this.y + 15);
    }
  }
  let drops = [];
  p.setup = () => {
    p.createCanvas(window.innerWidth, 500);
    for (let i = 0; i < 500; i++) {
      drops[i] = new Drop();
    }
  };
  p.draw = () => {
    const pulse = martianA.envelope.value;
    const mutateLeft = martianB.envelope.value;
    p.background(25, 146, 98);
    const waveformValue = waveform.getValue();
    p.beginShape();
    for (var i = 0; i < waveformValue.length; i++) {
      p.stroke('#F1B255');
      p.noFill();
      p.strokeWeight(5);
      p.vertex(i * 2, p.map(waveformValue[i] * 5, -1, 1, p.height, 0));
    }
    p.endShape();
    p.fill('#F1B255');
    p.ellipse(p.width / 2, p.height / 2, 10 + mutateLeft * 400, 10 + mutateLeft * 400);
    if (pulse > .01) {
      for (let i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
      }
    }
  };
};