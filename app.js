//tic tac toe command line game
const prompt = require('prompt');

let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

let renderBoard = (gameBoard) => {
    console.log(
        '--TIC TAC TOE GAME BOARD--' + '\n' +
        board[1] + '         | ' + board[2] + ' | ' + board[3] + '\n' +
        '        _________' + '\n' +
        board[4] + '         | ' + board[5] + ' | ' + board[6] + '\n' +
        '        _________' + '\n' +
        board[7] + '         | ' + board[8] + ' | ' + board[9] + '\n'
    )
}

renderBoard(board);
