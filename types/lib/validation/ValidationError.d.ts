import { ValidationStage } from './ValidationStage';
export declare class ValidationError extends Error {
    private cell;
    private stage?;
    constructor(cell: ValidationSchema.Cell, stage?: ValidationStage);
    getCell(): ValidationSchema.Cell;
}
