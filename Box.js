class Box {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.length = 100;
    this.color = 'rgb(38, 143, 167)';
  }
  checkCollide() {
    if(this.x > canvas.width-this.length || this.x < 0) {
      this.dx = -this.dx;
    }
    if(this.y > canvas.height-this.length || this.y < 0) {
      this.dy = -this.dy;
    }
  }
  move() {
    this.checkCollide();
    this.x += this.dx;
    this.y += this.dy;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.length,this.length);
  }
  execute() {
    this.move();
    this.draw();
  }
}
