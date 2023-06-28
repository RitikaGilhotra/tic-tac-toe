let currentPlayer = "O";
let gameEnded = false;
let snd = new Audio("assests/music/clap.mp3");
let sound=new Audio("assests/music/abc.mp3");
let board = Array.from({ length: 9 }, () => "");
let bx=document.querySelectorAll(".cell");
bx.forEach((e,i)=>{
    e.setAttribute("onclick","makeMove("+i+")");

});
function makeMove(cellIndex) {
//    sound.pause()

    if (!gameEnded && board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        console.log(board[cellIndex]);
        renderBoard();
        checkWin();
        checkTie();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        sound.play(); 
    }
}
const winningCombinations = [
    [0, 1, 2,16.5,0,270],
    [3, 4, 5,49.5,0,270 ],
    [6, 7, 8,82.5,0,-90],
    [0, 3, 6,16.5,16,0],
    [1, 4, 7,2,50,0],
    [2, 5, 8,2,83,0],
    [0, 4, 8,16.5,14,-45],
    [2, 4, 6,16.5,83,45]
];
function checkWin() {
    let line =document.querySelector(".line")

    for (let combination of winningCombinations) {
        const [a, b, c,topp, leftp,rotatep] = combination;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            snd.play();
            gameEnded = true;
            let h1=document.querySelector("h1");
            h1.textContent=currentPlayer+" Wins";
            let gif=document.querySelector(".im1");
            let nel=document.createElement("img");
            nel.setAttribute("src","./assests/gif/123.gif");
            gif.appendChild(nel);
            line.style.top=`${topp}%`
            line.style.left=`${leftp}%`
            line.style.rotate=`${rotatep}deg`
            show()
            // return;
        }
    }
}

function checkTie() {
    if (!board.includes("")) {
        gameEnded = true;
        alert("It's a tie!");
    }
}
function resetGame() {
    currentPlayer = "X";
    gameEnded = false;
    board = Array.from({ length: 9 }, () => "");
    let line =document.querySelector(".line"); 
    line.style.display="none";
    renderBoard();
}
function renderBoard() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = board[i];
        // console.log(board)
    }
}
function show(){
    let line =document.querySelector(".line");
    line.style.display="inline";
}

