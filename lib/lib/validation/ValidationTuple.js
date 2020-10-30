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
    exports.ValidationTuple = void 0;
    var ValidationTuple = /** @class */ (function () {
        function ValidationTuple(tuple) {
            this.tuple = tuple;
        }
        ValidationTuple.prototype.isValid = function () {
            var _loop_1 = function (i) {
                if (!this_1.tuple.some(function (curr) { return curr.value === i; })) {
                    return { value: false };
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.tuple.length; i += 1) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return true;
        };
        return ValidationTuple;
    }());
    exports.ValidationTuple = ValidationTuple;
});
