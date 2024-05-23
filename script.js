const Gameboard = (()=>{
    const board = [0,0,0,0,0,0,0,0,0];
    const getBoard = () =>  board;

    const placeMark = (mark,position) => {
        console.log(`Placed ${mark} at ${position}`)
        board[position-1] = mark;
    }
    const printBoard = () => {
        console.log(board);
    }
    return { getBoard, placeMark, printBoard };
})();

function createPlayer(playerName, playerMark){ 
    const name = playerName;
    const mark = playerMark;
    return{name,mark}
}

function GameController(){
   
    const playerOne = createPlayer('You','X');
    const playerTwo = createPlayer('Comp','O');
    
    let currentPlayer = playerOne;

    const switchPlayerTurn = () => {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
    };
    const getCurrentPlayer = () => currentPlayer;

    const printNewRound = () => {
        Gameboard.printBoard();
        console.log(`${getCurrentPlayer().mark}'s turn.`);
    }
    const playRound = (position) => {
        console.log(
          `Placing ${getCurrentPlayer().mark} at ${position}...`
        );
        Gameboard.placeMark(getCurrentPlayer().mark,position);
        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();

    return {
        playRound,
        getCurrentPlayer
    };
}


const game = GameController();
game.playRound(1);
game.playRound(2);
game.playRound(9);
game.playRound(4);
game.playRound(5);



  