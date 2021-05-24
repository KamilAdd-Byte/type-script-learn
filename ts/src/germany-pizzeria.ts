import {Pizzeria} from "./pizzeria";

export class GermanyPizzeria extends Pizzeria{
    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }
    bake(): string {
        return 'still wait...';
    }
}
