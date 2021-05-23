// klasa TS struktura
var Pizzeria = /** @class */ (function () {
    // konstruktor
    function Pizzeria(name) {
        this._pizzasInOrder = [];
        this._maxPizzaIsOven = 10;
        this._recipes = [];
        this._manager = 'Kamil';
        this.name = name;
    }
    Object.defineProperty(Pizzeria.prototype, "pizzasInOrder", {
        //getteri i settery
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
    return Pizzeria;
}());
var laStrada = new Pizzeria('La Strada');
laStrada.order('Hawajska');
laStrada.manager = 'Mas';
console.log(laStrada);
