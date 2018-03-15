
export interface TicTacToe {
    board: Array<Array<string>>
}

export const EMPTY_FIELD = '_';

export const startTicTacToe = (): TicTacToe => ({
    board: [
        [EMPTY_FIELD, EMPTY_FIELD, EMPTY_FIELD],
        [EMPTY_FIELD, EMPTY_FIELD, EMPTY_FIELD],
        [EMPTY_FIELD, EMPTY_FIELD, EMPTY_FIELD]
    ]
});
