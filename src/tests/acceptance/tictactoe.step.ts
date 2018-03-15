
import {defineSupportCode} from 'cucumber';
import {expect} from 'chai';

import {EMPTY_FIELD, TicTacToe, startTicTacToe} from '../../tictactoe';


defineSupportCode(function({Given, When, Then}) {
    
    When(/^TicTacToe game is started$/, function() {
        this.ticTacToe = startTicTacToe();
    });
    
    Then(/^game board is empty$/, function() {
        expect(isTicTacToeBoardEmpty(this.ticTacToe)).to.be.true;
    });

});


const isTicTacToeBoardEmpty = (ticTacToe: TicTacToe): boolean => ticTacToe.board.map(isRowEmpty).every((isRowEmpty: boolean): boolean => isRowEmpty);

const isRowEmpty = (row: Array<string>): boolean => row.every((field: string): boolean => field === EMPTY_FIELD);