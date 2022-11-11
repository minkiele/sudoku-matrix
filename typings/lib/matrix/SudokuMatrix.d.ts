export declare class SudokuMatrix implements Validator {
    private matrix;
    constructor(matrix: SudokuSchema.Matrix);
    private isRowValid;
    private isColValid;
    private isSquareValid;
    isValid(): boolean;
}
