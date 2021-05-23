import {Pizzeria} from "./pizzeria";

export class AmericanPizzeria extends Pizzeria {
    bake(): string {
        return 'pizza is being baked....wait!!!!';
    }
}
