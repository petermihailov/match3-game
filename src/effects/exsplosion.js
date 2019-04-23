import anime from 'animejs';

export class Explosion {
  constructor(ctx) {
    this.ctx = ctx;
  }

  animate = ({x, y, color, duration = anime.random(1200, 1800), distance = 32, particles = anime.random(20, 30)}) => {
    const arrayOfParticles = [];

    for (let i = 0; i < particles; i++) {
      arrayOfParticles.push(new Particle({x, y, color, distance}));
    }

    return anime.timeline().add({
      targets: arrayOfParticles,
      x: function(p) { return p.endPos.x; },
      y: function(p) { return p.endPos.y; },
      size: 0.1,
      duration,
      easing: 'easeOutExpo',
      update: this.draw
    })
  };

  draw = (anim) => {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw(this.ctx);
    }
  }
}

class Particle {
  constructor({x, y, color, distance}) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.distance = distance;
    this.size = anime.random(8, 24);
    this.halfSize = this.size / 2;
    this.endPos = this.setDirection();
  }

  setDirection = () => {
    const angle = anime.random(0, 360) * Math.PI / 180;
    const distance = anime.random(8, this.distance);
    const size = [-1, 1][anime.random(0, 1)] * distance;

    return {
      x: this.x + this.halfSize + size * Math.cos(angle),
      y: this.y + this.halfSize + size * Math.sin(angle)
    }
  };

  draw = (ctx) => {
    ctx.beginPath();
    ctx.rect(this.x - this.halfSize, this.y - this.halfSize, this.size, this.size);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
