"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(cell, stage) {
        super();
        this.cell = cell;
        this.stage = stage;
    }
    getCell() {
        return this.cell;
    }
}
exports.ValidationError = ValidationError;
