// klasa TS struktura
abstract class Pizzeria {

    //statyczne id
    static id = 0;
    id;
    //field - pola klasy
    readonly name;
    private _pizzasInOrder = [];
    private _maxPizzaIsOven = 10;
    private _recipes = [];
    private _manager = 'Kamil';

    // konstruktor parent
    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name
    }

    //gettery i settery
    get pizzasInOrder(): any[] {
        return this._pizzasInOrder;
    }

    set pizzasInOrder(value: any[]) {
        this._pizzasInOrder = value;
    }

    get maxPizzaIsOven(): number {
        return this._maxPizzaIsOven;
    }

    set maxPizzaIsOven(value: number) {
        this._maxPizzaIsOven = value;
    }

    get recipes(): any[] {
        return this._recipes;
    }

    set recipes(value: any[]) {
        this._recipes = value;
    }

    get manager(): string {
        return this._manager;
    }

    set manager(value: string) {
        this._manager = value;
    }

//metoda
    order(pizza) {
        this._pizzasInOrder.push(pizza);
    }

    private isOvenFull() {
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    }
    // metoda abstrakcyjna tylko w klasie abstrakcyjnej
    abstract bake()

}

class PolishPizzeria extends Pizzeria {

    constructor(name, public openAtNight) {
        super(name);
    }
    bake() {
        return 'pizza is being baked';
    }
};

class AmericanPizzeria extends Pizzeria {
    bake() {
        return 'pizza is being baked....wait!!!!';
    }
}

const laStrada = new PolishPizzeria('La Strada',true);
const americana = new PolishPizzeria('Americana', false);
const hawajska = new PolishPizzeria('Hawajska', true);
const diablo = new AmericanPizzeria('Diablo');

laStrada.order('Hawajska');
laStrada.manager = 'Mas'
diablo.manager='Amerikan Psycho';

// wyświetlanie
console.log(laStrada,americana,hawajska,diablo);
