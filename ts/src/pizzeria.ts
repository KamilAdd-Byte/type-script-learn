// klasa TS struktura
export abstract class Pizzeria {

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

//metody
    order(pizza) {
        this._pizzasInOrder.push(pizza);
    }

    private isOvenFull() {
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    }
    // metoda abstrakcyjna tylko w klasie abstrakcyjnej
    abstract bake()

}





