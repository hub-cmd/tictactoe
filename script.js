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
        const board = Gameboard.getBoard();
        const checkWin = () => {
            const patterns = [
            [0, 1, 2], [0, 3, 6], [0, 4, 8], // For index 0
            [4, 5, 3], [4, 2, 6], [4, 7, 1], // For index 4
            [8, 7, 6], [8, 5, 2]              // For index 8
            ];

            for (const pattern of patterns) {
                const [a, b, c] = pattern;
                if (board[a] === board[b] && board[b] === board[c] && board[a] !== 0) {
                    console.log(`${getCurrentPlayer().mark} is the winner`)
                    return true;
                }
            }
            if(board.filter((value) => value ==='X'|| value ==='O').length === 9){
                console.log('It\'s a tie');
                return true;
            }
            return false;
        }
        if(checkWin()){  
            console.log('Game Ends'); 
            board.forEach((element,index) => {
                if(element === 'X' || element === 'O') board[index] = 0;
            });
            currentPlayer = playerOne;
            return;
        }
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
game.playRound(2);
game.playRound(1);
game.playRound(4);
game.playRound(9);
game.playRound(6);
game.playRound(5);
game.playRound(1);



  