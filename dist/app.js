const cells = document.querySelectorAll('.cell');
const player1Input = document.getElementById('player1-input');
const player2Input = document.getElementById('player2-input');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const messageElement = document.getElementById('message');


startButton.addEventListener("click", startGame)
resetButton.addEventListener("click", resetNames)


let currentPlayer = "";
let gameOver = true;


function startGame() {
  const player1Name = player1Input.value || 'Player 1';
  const player2Name = player2Input.value || 'Player 2';

  player1Input.disabled = true;
  player2Input.disabled = true;
  startButton.textContent = "Restart Game"

  currentPlayer = "X"
  gameOver = false;

  cells.forEach(cell => {
    cell.textContent=""
    cell.classList.remove("bg-green-300")
    cell.classList.add("hover:bg=gray-200")
    cell.addEventListener("click", handleCellClick)
  })

  displayMessage(`Current Turn:${player1Name}`)

}


function displayMessage(message) {
  messageElement.textContent = message
}