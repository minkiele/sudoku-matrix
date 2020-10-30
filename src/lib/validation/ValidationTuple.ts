import { ValidationError } from './ValidationError';

export class ValidationTuple implements Validator {
    public constructor(private tuple: ValidationSchema.Tuple) {}
    public isValid(): boolean {
        for(let i = 0; i < this.tuple.length; i += 1) {
            if(!this.tuple.some(curr => curr.value === i + 1)) {
                throw new Error(`Missing Value ${i + 1} in a tuple`);
            }
        }
        return true;
    }
}
