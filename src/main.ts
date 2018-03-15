
import {startTicTacToe} from './tictactoe';


const printRow = (row: Array<string>) => {
    console.log('|', row.join(' | '), '|');
}

const ticTacToe = startTicTacToe();

console.log('TicTacToe started!\n');

ticTacToe.board.forEach(printRow);
