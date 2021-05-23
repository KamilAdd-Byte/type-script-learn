// klasa TS struktura
class Pizzeria {

    //field - pola klasy
    readonly name;
    private _pizzasInOrder = [];
    private _maxPizzaIsOven = 10;
    private _recipes = [];
    private _manager = 'Kamil';

    // konstruktor
    constructor(name) {
        this.name = name
    }

    //getteri i settery


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
    order(pizza){
        this._pizzasInOrder.push(pizza);
    }
    private isOvenFull(){
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    }
}
const laStrada = new Pizzeria('La Strada');
laStrada.order('Hawajska');
laStrada.manager = 'Mas'
console.log(laStrada);
