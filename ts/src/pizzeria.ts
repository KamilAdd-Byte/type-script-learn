// klasa TS - struktura
export abstract class Pizzeria {
    //statyczne id
    static id: number = 0;
    id: number;
    //field - pola klasy
    readonly name: string;
    private _pizzasInOrder: string[] = [];
    private _maxPizzaIsOven: number = 10;
    private _recipes:string[] = [];
    private _manager: string = 'Kamil';

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
    order(pizza: string) {
        this._pizzasInOrder.push(pizza);
    }

    private isOvenFull():boolean {
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    }
    // metoda abstrakcyjna tylko w klasie abstrakcyjnej
    abstract bake(): void

}





