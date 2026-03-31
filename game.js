const tile1 = document.getElementById("div1");
const tile2 = document.getElementById("div2");
const tile3 = document.getElementById("div3");
const tile4 = document.getElementById("div4");
const tile5 = document.getElementById("div5");
const tile6 = document.getElementById("div6");
const tile7 = document.getElementById("div7");
const tile8 = document.getElementById("div8");
const tile9 = document.getElementById("div9");
const result = document.getElementById("result");
const board = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
let moves = 0;
let playerSymbol = "X";
let computerSymbol = "O";
let isGameStarted = false;

function initializeGameBoard() {
  const gameBoard = document.querySelector(".game-board");
  gameBoard.style.display = "none";
  for (let i = 0; i < board.length; i++) {
    board[i].innerHTML = " ";
  }
  moves = 0;
  result.innerHTML = "";
}

function playerMove(i) {
  if (!isGameStarted) return;
  if (board[i].innerHTML === " " && result.innerHTML === "") {
    board[i].innerHTML = playerSymbol;
    moves++;
    checkResult(playerSymbol);

    if (result.innerHTML === "") {
      computerMove();
    }
  }
}

function getBoardState() {
  return board.map((tile) => tile.innerHTML);
}

function getWinner(state) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of wins) {
    const [a, b, c] = combo;
    if (state[a] !== " " && state[a] === state[b] && state[a] === state[c]) {
      return state[a];
    }
  }
  return null;
}

function isDraw(state) {
  return state.every((cell) => cell !== " ");
}

function minimax(
  state,
  depth,
  isMaximizing,
  alpha = -Infinity,
  beta = Infinity,
) {
  const winner = getWinner(state);
  if (winner === computerSymbol) return 10 - depth;
  if (winner === playerSymbol) return depth - 10;
  if (isDraw(state)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (state[i] === " ") {
        state[i] = computerSymbol;
        const score = minimax(state, depth + 1, false, alpha, beta);
        state[i] = " ";
        bestScore = Math.max(score, bestScore);
        alpha = Math.max(alpha, bestScore);
        if (beta <= alpha) break;
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (state[i] === " ") {
        state[i] = playerSymbol;
        const score = minimax(state, depth + 1, true, alpha, beta);
        state[i] = " ";
        bestScore = Math.min(score, bestScore);
        beta = Math.min(beta, bestScore);
        if (beta <= alpha) break;
      }
    }
    return bestScore;
  }
}

function findBestMove() {
  let bestScore = -Infinity;
  let bestMove = -1;
  const currentState = getBoardState();

  for (let i = 0; i < 9; i++) {
    if (currentState[i] === " ") {
      currentState[i] = computerSymbol;
      const score = minimax(currentState, 0, false);
      currentState[i] = " ";
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
}

function computerMove() {
  if (result.innerHTML !== "") return;

  setTimeout(() => {
    const bestIndex = findBestMove();
    if (bestIndex !== -1) {
      board[bestIndex].innerHTML = computerSymbol;
      moves++;
      checkResult(computerSymbol);
    }
  }, 1000);
}

function checkResult(player) {
  const winText = `${player} Wins!`;
  if (
    (board[0].innerHTML === player &&
      board[1].innerHTML === player &&
      board[2].innerHTML === player) ||
    (board[3].innerHTML === player &&
      board[4].innerHTML === player &&
      board[5].innerHTML === player) ||
    (board[6].innerHTML === player &&
      board[7].innerHTML === player &&
      board[8].innerHTML === player) ||
    (board[0].innerHTML === player &&
      board[3].innerHTML === player &&
      board[6].innerHTML === player) ||
    (board[1].innerHTML === player &&
      board[4].innerHTML === player &&
      board[7].innerHTML === player) ||
    (board[2].innerHTML === player &&
      board[5].innerHTML === player &&
      board[8].innerHTML === player) ||
    (board[0].innerHTML === player &&
      board[4].innerHTML === player &&
      board[8].innerHTML === player) ||
    (board[2].innerHTML === player &&
      board[4].innerHTML === player &&
      board[6].innerHTML === player)
  ) {
    result.innerHTML = winText;
    showPlayButton();
  } else if (moves === 9) {
    result.innerHTML = "It's a Draw!";
    showPlayButton();
  }
}

function attachClickListeners() {
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener("click", () => playerMove(i));
  }
}

function showPlayButton() {
  const playAgainButton = document.getElementById("playAgain");
  playAgainButton.style.display = "block";
}

function hidePlayButton() {
  const playAgainButton = document.getElementById("playAgain");
  playAgainButton.style.display = "none";
}

function playAgain() {
  initializeGameBoard();
  hidePlayButton();
  document.getElementById("choice-modal").style.display = "flex";
  isGameStarted = false;
}

function startGame(whoStarts) {
  document.getElementById("choice-modal").style.display = "none";
  document.querySelector(".game-board").style.display = "grid";
  isGameStarted = true;

  if (whoStarts === "computer") {
    playerSymbol = "O";
    computerSymbol = "X";
    computerMove();
  } else {
    playerSymbol = "X";
    computerSymbol = "O";
  }
}

attachClickListeners();
initializeGameBoard();
