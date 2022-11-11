export declare class ValidationTuple implements Validator {
    private tuple;
    constructor(tuple: ValidationSchema.Tuple);
    isValid(): boolean;
}
