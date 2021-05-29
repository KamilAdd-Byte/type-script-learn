"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizePizza = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Ordered"] = 0] = "Ordered";
    Status[Status["Baked"] = 1] = "Baked";
    Status[Status["Sold"] = 2] = "Sold";
})(Status = exports.Status || (exports.Status = {}));
var SizePizza;
(function (SizePizza) {
    SizePizza["small"] = "small";
    SizePizza["medium"] = "medium";
    SizePizza["large"] = "large";
    SizePizza["extra_large"] = "extra-large";
})(SizePizza = exports.SizePizza || (exports.SizePizza = {}));
