class storageScore {
  constructor() {}

  fff() {
    let highScore = parseFloat(localStorage.getItem("score"));
    highScore = highScore > snake.maxCells ? highScore : snake.maxCells;
    localStorage.setItem("score", highScore);
    bestScore.innerHTML = ` Best Score: ${localStorage.getItem("score")}`;
  }
}
