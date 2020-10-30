export class ValidationTuple implements Validator {
    public constructor(private tuple: ValidationSchema.Tuple) {}
    public isValid(): boolean {
        for(let i = 0; i < this.tuple.length; i += 1) {
            if(!this.tuple.some(curr => curr.value === i)) {
                return false;
            }
        }
        return true;
    }
}
