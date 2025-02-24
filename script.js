let randomNumber;
let correctAnswer;
let timer;
let countdown;

function startGame() {

  document.getElementById("result").textContent = "";
  document.getElementById("userAnswer").value = "";
  document.getElementById("newGameBtn").classList.add("hidden");
  document.getElementById("submitBtn").classList.remove("hidden");

  randomNumber = Math.floor(Math.random() * 1000) + 1;
  correctAnswer = randomNumber * 1.5;

  document.getElementById(
    "randomNumber"
  ).textContent = `${randomNumber} x 1.5`;


  document.getElementById("userAnswer").disabled = false;
  document.getElementById("submitBtn").disabled = false;

  let timeLeft = 50;
  document.getElementById("timer").textContent = `${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);


  timer = setTimeout(() => {
    endGame();
  }, 50000);
}

function endGame() {
  clearInterval(countdown);
  clearTimeout(timer);

  document.getElementById("userAnswer").disabled = true;
  document.getElementById("submitBtn").disabled = true;


  const userAnswer = parseFloat(document.getElementById("userAnswer").value);
  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "ถูกต้องจ้า! 🎉";
  } else {
    document.getElementById(
      "result"
    ).textContent = `ผิดจ้า! คำตอบคือ ${correctAnswer} เอาใหม่ๆ`;
  }

  document.getElementById("newGameBtn").classList.remove("hidden");
  document.getElementById("submitBtn").classList.add("hidden");
}

// Start the game when the page loads
window.onload = startGame;


document.getElementById("submitBtn").addEventListener("click", endGame);
document.getElementById("newGameBtn").addEventListener("click", startGame);
