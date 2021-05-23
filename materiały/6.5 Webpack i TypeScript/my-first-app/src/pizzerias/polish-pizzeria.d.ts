import { Pizzeria } from './pizzeria';
import { Pizza } from "../pizza.model";
export interface CancelablePizza {
    cancelable: boolean;
}
export declare class PolishPizzeria extends Pizzeria {
    openAtNight: boolean;
    constructor(name: string, openAtNight: boolean);
    order(pizza: Pizza & CancelablePizza): void;
    bake(): string;
}
