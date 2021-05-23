import {Pizzeria} from "./pizzeria";

export class PolishPizzeria extends Pizzeria {

    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }
    bake() {
        return 'pizza is being baked';
    }
}
