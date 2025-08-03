let board =[["","",""],
            ["","",""],
            ["","",""]
        ];


let currentPlayer="X";



function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }

    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }

    if (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }

    return false;
}



document.addEventListener('DOMContentLoaded',()=>{

    const vsPlayer = document.getElementById('Player');
    const welcomeScreen=document.getElementById("container");
    const gameSection=document.getElementById("Game");
    const xButton=document.getElementById("X");
    const oButton=document.getElementById("O");
    const gameBoard=document.getElementById("game-board");
    const gameBox=document.querySelectorAll('.cell');



    gameSection.style.display='none';
    gameBoard.style.display='none';


    vsPlayer.addEventListener('click',() =>{
        welcomeScreen.style.display='none';
        gameSection.style.display='flex';
        });



        xButton.addEventListener('click', () =>{
            gameSection.style.display='none';
            gameBoard.style.display='grid';
            currentPlayer="X";
        });


        oButton.addEventListener('click', () =>{
            gameSection.style.display='none';
            gameBoard.style.display='grid';
            currentPlayer="O";
        });



        gameBox.forEach(cell =>{
            cell.addEventListener('click',(event) =>{
                const row = parseInt(event.target.dataset.row);
                const col = parseInt(event.target.dataset.col);

                if(board[row][col] ==="") {
                    board[row][col]=currentPlayer;
                    event.target.textContent=currentPlayer;

                    if(checkWin()){
                        alert(`${currentPlayer} Wins!`);

                        return;
                    }


                    currentPlayer=(currentPlayer==="X") ? "O":"X";
                } else{
                    console.log("This Box is Already Taken!");
                }
            })
        })
    
    
});


