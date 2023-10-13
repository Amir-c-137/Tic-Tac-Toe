const board = document.getElementById("board");
const message = document.getElementById("message");
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];

board.addEventListener("click", (e) => {
  const cell = e.target;
  const index = cell.dataset.index;

  if (boardState[index] === "" && !message.textContent) {
    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.pointerEvents = "none";
    if (checkWin(currentPlayer)) {
      message.textContent = `${currentPlayer} wins!`;
    } else if (boardState.every((cell) => cell !== "")) {
      message.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
});

const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", () => {
  location.reload(); // Reloads the current page
});

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) =>
    combination.every((index) => boardState[index] === player)
  );
}
