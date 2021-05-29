"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
var Pizzeria = /** @class */ (function () {
    // konstruktor parent
    function Pizzeria(name) {
        this._pizzasInOrder = []; //zapis tablicy w TS
        this._maxPizzaIsOven = 10;
        this._recipes = []; //zapis tablicy w TS
        this._manager = 'Kamil';
        this.id = Pizzeria.id++;
        this.name = name;
    }
    Object.defineProperty(Pizzeria.prototype, "pizzasInOrder", {
        //gettery i settery
        get: function () {
            return this._pizzasInOrder;
        },
        set: function (value) {
            this._pizzasInOrder = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizzeria.prototype, "maxPizzaIsOven", {
        get: function () {
            return this._maxPizzaIsOven;
        },
        set: function (value) {
            this._maxPizzaIsOven = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizzeria.prototype, "recipes", {
        get: function () {
            return this._recipes;
        },
        set: function (value) {
            this._recipes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizzeria.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (value) {
            this._manager = value;
        },
        enumerable: false,
        configurable: true
    });
    // metody - konstruowanie metod w TS
    // nazwa (zmienna: typ) {ciało metody}
    Pizzeria.prototype.order = function (pizza) {
        this._pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    };
    Pizzeria.prototype.changeStatus = function (index, status) {
        this.pizzasInOrder[index].status = status;
    };
    Pizzeria.prototype.changeSize = function (index, size) {
        this.pizzasInOrder[index].size = size;
    };
    // #typeof documentation: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
    //destrukturyzacja JS 6, pomaga rozbijać obiekt na klucze.  === -> operator RÓWNA SIĘ w TS: w Java ==.
    Pizzeria.prototype.checkPrice = function (_a) {
        var price = _a.price;
        if (typeof price === 'string') {
            console.log('price is string', price.toLowerCase());
        }
        else if (typeof price === 'number') {
            console.log('price is number', price.toFixed());
        }
    };
    //statyczne id
    Pizzeria.id = 0;
    return Pizzeria;
}());
exports.Pizzeria = Pizzeria;
