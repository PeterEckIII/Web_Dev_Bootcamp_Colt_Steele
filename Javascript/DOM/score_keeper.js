var button_one = document.querySelector("#p1");
var button_two = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset")
var numInput = document.querySelector("input")
var gameLimit = document.querySelector("#gameLimit")
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;

button_one.addEventListener("click", function() {
  if (!gameOver) {
    playerOneScore++;
    if (playerOneScore === gameLimit) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = playerOneScore;
  }
});

button_two.addEventListener("click", function () {
  if (!gameOver) {
    playerTwoScore++;
    if (playerTwoScore === gameLimit) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = playerTwoScore;
  }
});

reset.addEventListener("click", function() {
  playerOneScore = 0;
  playerTwoScore = 0;
  gameOver = false;
  p1Display.textContent = playerOneScore;
  p2Display.textContent = playerTwoScore;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
});


numInput.addEventListener("change", function() {
  gameLimit.textContent = numInput.value;
  gameLimit = Number(numInput.value);
});
