let score = 0;
let timeLeft = 30;
let timer;
let activeHole = null;

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("遊戲結束！你的分數是：" + score);
    }
  }, 1000);
  moveMole();
}

function moveMole() {
  setInterval(() => {
    if (activeHole) activeHole.classList.remove("active");
    const holes = document.querySelectorAll(".hole");
    const index = Math.floor(Math.random() * holes.length);
    activeHole = holes[index];
    activeHole.classList.add("active");
  }, 700);
}

document.querySelectorAll(".hole").forEach(hole => {
  hole.addEventListener("click", () => {
    if (hole.classList.contains("active")) {
      score++;
      document.getElementById("score").textContent = score;
      hole.classList.remove("active");
    }
  });
});
