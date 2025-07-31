let board =[["","",""],
            ["","",""],
            ["","",""]
        ];


let currentPlayer="X";


function makeMove(index){
    if(board[index]===""){
        board[index]=currentPlayer;
    }
}