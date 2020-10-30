declare namespace SudokuSchema {

    type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

    type MatrixRow = [Digit, Digit, Digit, Digit, Digit, Digit, Digit, Digit, Digit];

    type Matrix = [
        MatrixRow,
        MatrixRow,
        MatrixRow,
        MatrixRow,
        MatrixRow,
        MatrixRow,
        MatrixRow,
        MatrixRow,
        MatrixRow
    ];

}
