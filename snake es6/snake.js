class Snake {
  constructor() {
    this.x = 160;
    this.y = 160;
    this.xSpeed = 0;
    this.ySpeed = grid;
    this.maxCells = 0;
    this.cells = [];
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";

    for (let i = 0; i < this.cells.length; i++) {
      ctx.fillRect(this.cells[i].x, this.cells[i].y, grid - 1, grid - 1);
    }

    ctx.fillRect(this.x, this.y, grid - 1, grid - 1);
  }

  update() {
    for (let i = 0; i < this.cells.length - 1; i++) {
      this.cells[i] = this.cells[i + 1];
    }

    this.cells[this.maxCells - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  clearWall() {
    if (this.x < 0) {
      this.x = canvas.width - grid;
    } else if (this.x >= canvas.width) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = canvas.height - grid;
    } else if (this.y >= canvas.height) {
      this.y = 0;
    }
  }

  blockWall() {
    if (
      this.x < 0 ||
      this.x >= canvas.width ||
      this.y < 0 ||
      this.y >= canvas.height
    ) {
      alert("Sorry you are Looser!");
      this.x = 160;
      this.y = 160;
      this.xSpeed = 0;
      this.ySpeed = grid;
      this.maxCells = 0;
      this.cells = [];
    }
  }

  direction() {
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft" && snake.xSpeed === 0) {
        snake.xSpeed = -grid;
        snake.ySpeed = 0;
      } else if (e.key === "ArrowUp" && snake.ySpeed === 0) {
        snake.ySpeed = -grid;
        snake.xSpeed = 0;
      } else if (e.key === "ArrowRight" && snake.xSpeed === 0) {
        snake.xSpeed = grid;
        snake.ySpeed = 0;
      } else if (e.key === "ArrowDown" && snake.ySpeed === 0) {
        snake.ySpeed = grid;
        snake.xSpeed = 0;
      }
    });
  }

  eating(apple) {
    if (this.x === apple.x && this.y === apple.y) {
      this.maxCells++;
      return true;
    }
    return false;
  }

  eatingSelf() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.x === this.cells[i].x && this.y === this.cells[i].y) {
        alert("Sorry you are Looser!");
        document.querySelector(".score").textContent = 0;
        let highScore = parseFloat(localStorage.getItem("score"));
        highScore = highScore > snake.maxCells ? highScore : snake.maxCells;
        localStorage.setItem("score", highScore);
        bestScore.innerHTML = ` Best Score: ${localStorage.getItem("score")}`;
        this.maxCells = 0;
        this.cells = [];
      }
    }
  }
}
