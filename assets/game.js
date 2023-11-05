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

/*initializing the game board*/ 
function initializeGameBoard(){
    for(let i=0; i<board.length;i++){
        board[i].innerHTML = " ";
    }
}
initializeGameBoard();

/*defining player Move*/
function playerMove(){
    for(let i=0; i<board.length; i++){
        board[i].addEventListener('click',(event) => {
            const player = "X";
            const winText = "You Win";
            if(board[i].innerHTML === " "){
                board[i].innerHTML = player;
                if(board[0].innerHTML==="X" && board[1].innerHTML==="X" && board[2].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[3].innerHTML==="X" && board[4].innerHTML==="X" && board[5].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[6].innerHTML==="X" && board[7].innerHTML==="X" && board[8].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[0].innerHTML==="X" && board[3].innerHTML==="X" && board[6].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[1].innerHTML==="X" && board[4].innerHTML==="X" && board[7].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[2].innerHTML==="X" && board[5].innerHTML==="X" && board[8].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[0].innerHTML==="X" && board[4].innerHTML==="X" && board[8].innerHTML==="X"){
                    result.innerHTML = winText;
                }
                if(board[6].innerHTML==="X" && board[4].innerHTML==="X" && board[2].innerHTML==="X"){
                    result.innerHTML = winText;
                }
            }
        });
    }
}
playerMove();