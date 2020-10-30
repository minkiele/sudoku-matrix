"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationTuple = void 0;
class ValidationTuple {
    constructor(tuple) {
        this.tuple = tuple;
    }
    isValid() {
        for (let i = 0; i < this.tuple.length; i += 1) {
            if (!this.tuple.some(curr => curr.value === i)) {
                return false;
            }
        }
        return true;
    }
}
exports.ValidationTuple = ValidationTuple;
