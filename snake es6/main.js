const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const scoreCount = document.querySelector(".score");
const btnBlack = document.querySelector(".black_btn");
const btnYellow = document.querySelector(".yellow_btn");
const btnWhite = document.querySelector(".white_btn");
const btnGo = document.querySelector(".go_btn");
const btnSlow = document.querySelector(".slow_btn");
const btnFast = document.querySelector(".fast_btn");
const speedOK = document.querySelector(".speed_ok");
const bestScore = document.querySelector(".best_score");
let border = document.querySelector(".ch");

bestScore.innerHTML = ` Best Score: ${localStorage.getItem("score")}`;

let speed = 120;
let speedCount = 0;
const grid = 10;

(function () {
  snake = new Snake();
  apple = new Apple();
  options = new Options();
  apple.location();

  btnGo.addEventListener("click", () => {
    setInterval(() => {
      snake.draw();
      snake.update();
      snake.eatingSelf();
      apple.draw();
      function check() {
        if (border.checked) {
          snake.blockWall();
        } else {
          snake.clearWall();
        }
      }
      check();

      if (snake.eating(apple)) {
        scoreCount.textContent = snake.maxCells;
        apple.location();
      }
    }, speed);

    btnGo.style.display = "none";
  });

  snake.direction();
})();
