(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidationStage = void 0;
    var ValidationStage;
    (function (ValidationStage) {
        ValidationStage[ValidationStage["ROW"] = 0] = "ROW";
        ValidationStage[ValidationStage["COL"] = 1] = "COL";
        ValidationStage[ValidationStage["SQUARE"] = 2] = "SQUARE";
    })(ValidationStage = exports.ValidationStage || (exports.ValidationStage = {}));
});
