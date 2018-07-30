// Restart button:
var restart = document.querySelector("#b");

// Grab all the squares:
var squares = document.querySelectorAll("td");

// Clear all the squares:
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

// Better version
// Check the square marker:
var cellOne = document.querySelector("#One");

function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

// For loop to add event listeners to all the squares:
for (var i=0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker)
}

// Repeatative version
// cellOne.addEventListener("click", () => {     // same as   ("click, function() {
//   // Traverse through the list of x,o, empty
//   if (cellOne.textContent === "") {
//     cellOne.textContent = "X";
//   } else if (cellOne.textContent === "X") {
//     cellOne.textContent = "O";
//   } else {
//     cellOne.textContent = "";
//   }
// });


