window.addEventListener('DOMContentLoaded', function () {
  const cv = document.getElementById('cv');
  class Square {
    constructor() {
      let radian = Math.random() * (Math.PI * 360);
      this.x = cv.width * Math.random();
      this.y = cv.height * Math.random();
      this.to_x = Math.cos(radian);
      this.to_y = Math.sin(radian);
      this.speed = Math.random() * 3 + 2;
      this.size = Math.random() * 4 + 1;
    }
    move() {
      this.x += this.to_x * this.speed;
      this.y += this.to_y * this.speed;
      this.out_square_in();
    }
    out_square_in() {
      if (this.x + this.size < 0) {
        this.x = cv.width;
      }
      if (cv.width < this.x) {
        this.x = 0 - this.size;
      }
      if (this.y + this.size < 0) {
        this.y = cv.height;
      }
      if (cv.height < this.y) {
        this.y = 0 - this.size;
      }
    }
  }

  function draw() {
    if (cv && cv.getContext) {
      let ctx = cv.getContext('2d');
      const instances = [];
      for (let i = 1; i <= 50; i++) {
        instances.push(new Square());
      }
      let p;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, cv.width, cv.height);

      for (let i = 0; i < instances.length; i++) {
        p = instances[i];
        ctx.fillStyle = '#FFF';
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.move();
      }
    }
  }
  setInterval(draw, 200);
});
