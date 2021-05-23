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
// klasa TS struktura
var Pizzeria = /** @class */ (function () {
    // konstruktor
    function Pizzeria(name) {
        this._pizzasInOrder = [];
        this._maxPizzaIsOven = 10;
        this._recipes = [];
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
    //metoda
    Pizzeria.prototype.order = function (pizza) {
        this._pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    };
    //statyczne id
    Pizzeria.id = 0;
    return Pizzeria;
}());
var PolishPizzeria = /** @class */ (function (_super) {
    __extends(PolishPizzeria, _super);
    function PolishPizzeria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolishPizzeria.prototype.bake = function () {
        return 'pizza is being baked';
    };
    return PolishPizzeria;
}(Pizzeria));
;
var AmericanPizzeria = /** @class */ (function (_super) {
    __extends(AmericanPizzeria, _super);
    function AmericanPizzeria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmericanPizzeria.prototype.bake = function () {
        return 'pizza is being baked....wait!!!!';
    };
    return AmericanPizzeria;
}(Pizzeria));
var laStrada = new PolishPizzeria('La Strada');
var americana = new PolishPizzeria('Americana');
var hawajska = new PolishPizzeria('Hawajska');
var diablo = new AmericanPizzeria('Diablo');
laStrada.order('Hawajska');
laStrada.manager = 'Mas';
diablo.manager = 'Amerikan Psycho';
// wyświetlanie
console.log(laStrada, americana, hawajska, diablo);
