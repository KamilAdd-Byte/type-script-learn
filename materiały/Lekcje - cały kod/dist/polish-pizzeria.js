var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pizzeria } from './pizzeria';
function PizzaCreated(target) {
    console.log('Pizza creation is running', target);
}
function ClosedAtNight(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.openAtNight = false;
        }
    };
}
function Enumerable(value) {
    return function (target, propertyKey, propertyDescriptor) {
        propertyDescriptor.enumerable = value;
    };
}
let PolishPizzeria = class PolishPizzeria extends Pizzeria {
    constructor(name, openAtNight) {
        super(name);
        this.openAtNight = openAtNight;
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    bake() {
        return 'pizza is being baked';
    }
};
PolishPizzeria = __decorate([
    ClosedAtNight,
    PizzaCreated,
    __metadata("design:paramtypes", [String, Boolean])
], PolishPizzeria);
export { PolishPizzeria };
;
