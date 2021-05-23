"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmericanPizzeria = void 0;
var pizzeria_1 = require("./pizzeria");
var AmericanPizzeria = /** @class */ (function (_super) {
    __extends(AmericanPizzeria, _super);
    function AmericanPizzeria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmericanPizzeria.prototype.bake = function () {
        return 'pizza is being baked....wait!!!!';
    };
    return AmericanPizzeria;
}(pizzeria_1.Pizzeria));
exports.AmericanPizzeria = AmericanPizzeria;
