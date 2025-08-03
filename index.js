let board =[["","",""],
            ["","",""],
            ["","",""]
        ];


let currentPlayer="X";

document.addEventListener('DOMContentLoaded',()=>{

    const vsPlayer = document.getElementById('Player');
    const welcomeScreen=document.getElementById("container");
    const gameSection=document.getElementById("Game");
    const xButton=document.getElementById("X");
    const oButton=document.getElementById("O");
    const gameBoard=document.getElementById("game-board");


    gameSection.style.display='none';
    gameBoard.style.display='none';


    vsPlayer.addEventListener('click',() =>{
        welcomeScreen.style.display='none';
        gameSection.style.display='flex'
    })
});


