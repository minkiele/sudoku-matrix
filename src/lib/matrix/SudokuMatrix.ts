import { ValidationTuple } from '../validation/ValidationTuple';

export class SudokuMatrix implements Validator {
    public constructor(private matrix: SudokuSchema.Matrix) {}

    private isRowValid(row: number) {
        // Make tuple
        const tuple: ValidationSchema.Tuple = this.matrix[row].map<ValidationSchema.Cell>((value: SudokuSchema.Digit, col: number) => ({value, row, col})) as ValidationSchema.Tuple;
        new ValidationTuple(tuple).isValid();
    }

    private isColValid(col: number) {
        // Make tuple
        const tuple: ValidationSchema.Tuple = this.matrix.map<ValidationSchema.Cell>((matrixRow: SudokuSchema.MatrixRow, row: number) => ({value: matrixRow[col], row, col})) as ValidationSchema.Tuple;
        new ValidationTuple(tuple).isValid();
    }

    private isSquareValid(index: number) {
        const offsetRow: number = Math.floor(index / 3) * 3; // 0/1/2 -> 0, 3/4/5 -> 3, 6/7/8 -> 6;
        const offsetCol: number = (index % 3) * 3; // 0/3/6 -> 0, 1/4/7 -> 3, 2/5/8 -> 6
        const tuple: Array<ValidationSchema.Cell> = [];
        for(let row = 0; row < 3; row += 1) {
            tuple.concat(this.matrix[row + offsetRow].slice(offsetCol, offsetCol + 3).map((value: SudokuSchema.Digit, col: number) => ({value, row: row + offsetRow, col: col + offsetCol})));
        }
        new ValidationTuple(tuple as ValidationSchema.Tuple).isValid();
    }

    public isValid(): boolean {

        try {
            for(let i = 0; i < 9; i += 1) {
                this.isRowValid(i);
                this.isColValid(i);
                this.isSquareValid(i);
            }
            return true;
        } catch(validationError) {
            return false;
        }

    }

}
