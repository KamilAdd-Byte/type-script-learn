import {Pizzeria} from "./pizzeria";
import {Pizza} from "./pizza.model";

export class PolishPizzeria extends Pizzeria {

    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }

    bake() {
        return 'pizza is being baked';
    }

    order(pizza: Pizza) {
        this._pizzasInOrder.push(pizza);
    }
}
