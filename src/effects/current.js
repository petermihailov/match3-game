import anime from 'animejs';
import {random, randSign} from '../../utils'

export class Current {
  constructor(ctx) {
    this.ctx = ctx;
  }

  animate = ({x1, y1, x2, y2, color, duration = anime.random(500, 800)}) => {
    const line = new Line({x1, y1, x2, y2, color});

    return anime.timeline().add({
      targets: line,
      duration,
      easing: 'easeOutExpo',
      update: this.draw
    });
  };

  draw = (anim) => {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw(this.ctx);
    }
  }
}

class Line {
  constructor({x1, y1, x2, y2, color}) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.dx = this.x2 - this.x1;
    this.dy = this.y2 - this.y1;
    this.mag = Math.hypot(this.dx, this.dy);
    this.angle = Math.atan2(this.dy, this.dx);
  }

  draw = (ctx) => {
    const a1 = this.angle + randSign(random(.1));
    const m1 = random(this.mag / 8,this.mag / 3);
    const lx1 = m1 * Math.cos(a1);
    const ly1 = m1 * Math.sin(a1);

    const a2 = this.angle + randSign(random(.1));
    const m2 = random(this.mag / 3, this.mag / 1.5);
    const lx2 = m2 * Math.cos(a2);
    const ly2 = m2 * Math.sin(a2);

    const a3 = this.angle + randSign(random(.01));
    const m3 = this.mag;
    const lx3 = m3 * Math.cos(a3);
    const ly3 = m3 * Math.sin(a3);

    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x1 + lx1, this.y1 + ly1);
    ctx.lineTo(this.x1 + lx2, this.y1 + ly2);
    ctx.lineTo(this.x1 + lx3, this.y1 + ly3);
    ctx.stroke();
  }
}
