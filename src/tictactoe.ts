

type Board = {
    0: {0: Field, 1: Field, 2: Field},
    1: {0: Field, 1: Field, 2: Field},
    2: {0: Field, 1: Field, 2: Field},

    putMark: (x: number, y: number, field: Field) => Board
};

type Field = '' | 'X' | 'O';



const createBoard = (): Board => {
    return {
        0: {0: '', 1: '', 2: ''},
        1: {0: '', 1: '', 2: ''},
        2: {0: '', 1: '', 2: ''},

        putMark(x: number, y: number, field: Field): Board {
            return {
                ...this,
                [x]: {...this[x], [y]: field}
            }
        }
    };
};

console.log(createBoard().putMark(1, 1, 'X'));
