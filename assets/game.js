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
const board = [tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9];
let moves = 0;

function initializeGameBoard() {
    for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = " ";
    }
    moves = 0;
    result.innerHTML = "";
}

function playerMove(i) {
    const player = "X";
    if (board[i].innerHTML === " " && result.innerHTML === "") {
        board[i].innerHTML = player;
        moves++;
        checkResult(player);
        computerMove();
    }
}

function computerMove() {
    const computer = "O";
    if (result.innerHTML === "") {
        const emptyTiles = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i].innerHTML === " ") {
                emptyTiles.push(i);
            }
        }
        if (emptyTiles.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyTiles.length);
            const chosenTileIndex = emptyTiles[randomIndex];
            board[chosenTileIndex].innerHTML = computer;
            moves++;
            checkResult(computer);
        }
    }
}

function checkResult(player) {
    const winText = `${player} Wins!`;
    if (
        (board[0].innerHTML === player && board[1].innerHTML === player && board[2].innerHTML === player) ||
        (board[3].innerHTML === player && board[4].innerHTML === player && board[5].innerHTML === player) ||
        (board[6].innerHTML === player && board[7].innerHTML === player && board[8].innerHTML === player) ||
        (board[0].innerHTML === player && board[3].innerHTML === player && board[6].innerHTML === player) ||
        (board[1].innerHTML === player && board[4].innerHTML === player && board[7].innerHTML === player) ||
        (board[2].innerHTML === player && board[5].innerHTML === player && board[8].innerHTML === player) ||
        (board[0].innerHTML === player && board[4].innerHTML === player && board[8].innerHTML === player) ||
        (board[2].innerHTML === player && board[4].innerHTML === player && board[6].innerHTML === player)
    ) {
        result.innerHTML = winText;
    } else if (moves === 9) {
        result.innerHTML = "It's a Draw!";
    }
}

function attachClickListeners() {
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', () => playerMove(i));
    }
}

initializeGameBoard();
attachClickListeners();
