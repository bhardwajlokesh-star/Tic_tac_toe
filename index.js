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


function checkDraw() {
    for(let row =0; row<3; row++) {
        for(let col=0; col<3; col++){
            if(board[row][col]===""){
                return false;
            }
        }
    }
    return true;
    
}



document.addEventListener('DOMContentLoaded',()=>{

    const vsPlayer = document.getElementById('Player');
    const welcomeScreen=document.getElementById("container");
    const gameSection=document.getElementById("Game");
    const xButton=document.getElementById("X");
    const oButton=document.getElementById("O");
    const gameBoard=document.getElementById("game-board");
    const gameBox=document.querySelectorAll('.cell');
    const turn=document.getElementById("turn-indicator");
    const gameOver = document.getElementById("game-over");
    const playAgain= document.getElementById("play-again");
    const goToHome= document.getElementById("GoHome");
    const Winner=document.getElementById("Winner");




    gameSection.style.display='none';
    gameBoard.style.display='none';


    playAgain.addEventListener("click",() =>{
        for(let i=0; i<3; i++){
            for (let j=0; j<3;j++){
                board[i][j]="";
            }
        }

        gameBox.forEach(cell =>{
            cell.textContent="";
        });

        gameOver.style.display='none';

        gameBoard.style.display='grid';
        turn.style.display='block';

            turn.textContent=`turn: ${currentPlayer}`;

    })


    vsPlayer.addEventListener('click',() =>{
        welcomeScreen.style.display='none';
        gameSection.style.display='flex';
        });



        xButton.addEventListener('click', () =>{
            gameSection.style.display='none';
            gameBoard.style.display='grid';
            currentPlayer="X";
            turn.style.display='block';
            turn.textContent=` ${currentPlayer}'s Turns`;
        });


        oButton.addEventListener('click', () =>{
            gameSection.style.display='none';
            gameBoard.style.display='grid';
            currentPlayer="O";
            turn.style.display='block';
            turn.textContent=` ${currentPlayer}'s Turns`;
        });



        gameBox.forEach(cell =>{
            cell.addEventListener('click',(event) =>{
                const row = parseInt(event.target.dataset.row);
                const col = parseInt(event.target.dataset.col);

                if(board[row][col] ==="") {
                    board[row][col]=currentPlayer;
                    event.target.textContent=currentPlayer;

                    if(checkWin()){
                        gameBoard.style.display='none';
                        gameOver.style.display='block';
                        Winner.style.display='block';
                        Winner.textContent=`${currentPlayer}'s Wins!`;


                        return;
                   }else  if(checkDraw()){
                    gameBoard.style.display='none';
                    gameOver.style.display='block';
                    Winner.style.display='block';
                    Winner.textContent="It's a Draw!";




                    }
                  

                    currentPlayer=(currentPlayer==="X") ? "O":"X";
                } else{
                    console.log("This Box is Already Taken!");
                }
            })
        })
    
    
});


