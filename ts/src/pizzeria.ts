// klasa TS - struktura
import {Orderable} from "./orderable";
import {Pizza, SizePizza, Status} from "./pizza.model";

type Size = 'small' | 'medium' | 'large';

export abstract class Pizzeria implements Orderable{
    //statyczne id
    static id: number = 0;
    id: number;
    //field - pola klasy
    readonly name: string;
    protected _pizzasInOrder: Pizza[] = [];   //zapis tablicy w TS
    private _maxPizzaIsOven: number = 10;
    private _recipes:string[] = [];          //zapis tablicy w TS
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

    //metody - konstruowanie metod w TS
    order(pizza: Pizza) {
        this._pizzasInOrder.push(pizza);
    }

    private isOvenFull():boolean {
        return this._pizzasInOrder.length > this._maxPizzaIsOven;
    }

    changeStatus(index: number, status: Status){
        this.pizzasInOrder[index].status = status;
    }

    changeSize(index: number, size: Size) {
        this.pizzasInOrder[index].size = size;
    }

    // metoda abstrakcyjna tylko w klasie abstrakcyjnej
    abstract bake(): void

}





