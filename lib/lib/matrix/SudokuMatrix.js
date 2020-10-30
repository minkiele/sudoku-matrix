"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SudokuMatrix = void 0;
const ValidationTuple_1 = require("../validation/ValidationTuple");
class SudokuMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }
    isRowValid(row) {
        // Make tuple
        const tuple = this.matrix[row].map((value, col) => ({ value, row, col }));
        new ValidationTuple_1.ValidationTuple(tuple).isValid();
    }
    isColValid(col) {
        // Make tuple
        const tuple = this.matrix.map((matrixRow, row) => ({ value: matrixRow[col], row, col }));
        new ValidationTuple_1.ValidationTuple(tuple).isValid();
    }
    isSquareValid(index) {
        const offsetRow = Math.floor(index / 3) * 3; // 0/1/2 -> 0, 3/4/5 -> 3, 6/7/8 -> 6;
        const offsetCol = (index % 3) * 3; // 0/3/6 -> 0, 1/4/7 -> 3, 2/5/8 -> 6
        const tuple = [];
        for (let row = 0; row < 3; row += 1) {
            tuple.concat(this.matrix[row + offsetRow].slice(offsetCol, offsetCol + 3).map((value, col) => ({ value, row: row + offsetRow, col: col + offsetCol })));
        }
        new ValidationTuple_1.ValidationTuple(tuple).isValid();
    }
    isValid() {
        try {
            for (let i = 0; i < 9; i += 1) {
                this.isRowValid(i);
                this.isColValid(i);
                this.isSquareValid(i);
            }
            return true;
        }
        catch (validationError) {
            return false;
        }
    }
}
exports.SudokuMatrix = SudokuMatrix;
