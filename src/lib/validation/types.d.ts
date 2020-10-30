declare namespace ValidationSchema {
    interface Cell {
        value: SudokuSchema.Digit;
        row: number;
        col: number;
    }

    type Tuple = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

}
