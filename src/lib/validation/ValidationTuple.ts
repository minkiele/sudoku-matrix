import { ValidationError } from './ValidationError';

export class ValidationTuple implements Validator {
    public constructor(private tuple: ValidationSchema.Tuple) {}
    public isValid(): boolean {
        for(let i = 1; i <= this.tuple.length; i += 1) {
            if(!this.tuple.some(curr => curr.value === i)) {
                throw new Error(`Missing Value ${i} in a tuple`);
            }
        }
        return true;
    }
}
