class Apple {
  constructor() {
    this.x = 200;
    this.y = 200;
  }
  location() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.x = getRandomInt(0, 25) * grid;
    this.y = getRandomInt(0, 25) * grid;
  }
  draw() {
    ctx.clearRect(0, 0, grid, grid);
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, grid - 1, grid - 1);
  }
}
