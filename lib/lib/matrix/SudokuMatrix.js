(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validation/ValidationTuple"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SudokuMatrix = void 0;
    var ValidationTuple_1 = require("../validation/ValidationTuple");
    var SudokuMatrix = /** @class */ (function () {
        function SudokuMatrix(matrix) {
            this.matrix = matrix;
        }
        SudokuMatrix.prototype.isRowValid = function (row) {
            // Make tuple
            var tuple = this.matrix[row].map(function (value, col) { return ({ value: value, row: row, col: col }); });
            new ValidationTuple_1.ValidationTuple(tuple).isValid();
        };
        SudokuMatrix.prototype.isColValid = function (col) {
            // Make tuple
            var tuple = this.matrix.map(function (matrixRow, row) { return ({ value: matrixRow[col], row: row, col: col }); });
            new ValidationTuple_1.ValidationTuple(tuple).isValid();
        };
        SudokuMatrix.prototype.isSquareValid = function (index) {
            var offsetRow = Math.floor(index / 3) * 3; // 0/1/2 -> 0, 3/4/5 -> 3, 6/7/8 -> 6;
            var offsetCol = (index % 3) * 3; // 0/3/6 -> 0, 1/4/7 -> 3, 2/5/8 -> 6
            var tuple = [];
            var _loop_1 = function (row) {
                tuple.concat(this_1.matrix[row + offsetRow].slice(offsetCol, offsetCol + 3).map(function (value, col) { return ({ value: value, row: row + offsetRow, col: col + offsetCol }); }));
            };
            var this_1 = this;
            for (var row = 0; row < 3; row += 1) {
                _loop_1(row);
            }
            new ValidationTuple_1.ValidationTuple(tuple).isValid();
        };
        SudokuMatrix.prototype.isValid = function () {
            try {
                for (var i = 0; i < 9; i += 1) {
                    this.isRowValid(i);
                    this.isColValid(i);
                    this.isSquareValid(i);
                }
                return true;
            }
            catch (validationError) {
                return false;
            }
        };
        return SudokuMatrix;
    }());
    exports.SudokuMatrix = SudokuMatrix;
});
