// Variables
var numSquares = 6;
var colors = [];
var pickedColor
// Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Run program
init();

function init() {
  setUpModebuttons();
  setUpSquares();
  reset();
}

function setUpModebuttons() {
  // Mode button event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      // Ternary Operator - this line is a one-line if / else statement
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  // Generate square colors
  for(var i = 0; i < squares.length; i++){
  	// add initial colors to squares
  	squares[i].style.background = colors[i];

  	//add click listeners to squares
  	squares[i].addEventListener("click", function() {
  		//grab color of clicked squares
  		var clickedColor = this.style.background;
  		//compare color to pickedColor
  		if(clickedColor === pickedColor) {
  			messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
  			changeColors(clickedColor);
  			h1.style.background = clickedColor;
  		} else {
  			this.style.background = "#232323";
  			messageDisplay.textContent = "Try Again";
  		}
  	});
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  // Pick a new random color
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // Change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color) {
  // Loop through all squares and
  for (var i = 0; i < squares.length; i++) {
    // Change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Make an array
  var arr = []
  // Repeat num times
  for (var i = 0; i < num; i++) {
    // Get random color and push into array
    arr.push(randomColor());
  }
  // Return array
  return arr;
}

function randomColor() {
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 -255
  var b = Math.floor(Math.random() * 256);

  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}
