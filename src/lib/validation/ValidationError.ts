import { ValidationStage } from './ValidationStage';

export class ValidationError extends Error {
    public constructor(private cell: ValidationSchema.Cell, private stage?: ValidationStage) {
        super();
    }

    public getCell(): ValidationSchema.Cell {
        return this.cell;
    }

}
