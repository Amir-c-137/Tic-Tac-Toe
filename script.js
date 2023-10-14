const board = document.getElementById("board");
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];

board.addEventListener("click", (e) => {
  const cell = e.target;
  const index = cell.dataset.index;

  if (boardState[index] === "") {
    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.pointerEvents = "none";
    if (checkWin(currentPlayer)) {
      displayGameResult(`${currentPlayer} wins!`);
      board.style.fontSize = "36px";
    } else if (boardState.every((cell) => cell !== "")) {
      displayGameResult("It's a draw!");
      board.style.fontSize = "36px";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
});

const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", () => {
  location.reload();
});

function displayGameResult(result) {
  const resultElement = document.createElement('div');
  resultElement.className = 'game-result';
  resultElement.textContent = result;
  board.appendChild(resultElement);
}

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
