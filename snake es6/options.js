class Options {
  constructor() {
    btnFast.addEventListener("click", () => {
      speed -= 10;
      speedOK.innerHTML = speedCount += 1;
    });
    btnSlow.addEventListener("click", () => {
      speed += 10;
      speedOK.innerHTML = speedCount -= 1;
    });
    btnYellow.addEventListener("click", () => {
      canvas.style.backgroundColor = "#bbbb32";
    });
    btnBlack.addEventListener("click", () => {
      canvas.style.backgroundColor = "#000";
    });

    btnWhite.addEventListener("click", () => {
      canvas.style.backgroundColor = "#e7d9d9";
    });
  }
}
