import {Pizzeria} from "./pizzeria";
import {Pizza} from "./pizza.model";

// dekorator wyświetlający log.
function PizzaCreated (target: Function){
    console.log('Polish pizza has been created! ')
}

// Oznaczenie klasy adnotacją dekoratora PizzaCreated!
@PizzaCreated
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
