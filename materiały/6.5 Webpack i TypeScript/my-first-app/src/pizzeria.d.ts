import { Orderable } from './orderable';
import { Pizza, Status, SizeKey, PaymentMethod } from './pizza.model';
export declare abstract class Pizzeria implements Orderable {
    static id: number;
    id: number;
    name: string;
    pizzasInOrder: Pizza[];
    private maxPizzasInOven;
    protected recipes: string[];
    private _manager;
    constructor(name: string);
    manager: string;
    getPaymentMethod(payment: PaymentMethod): string;
    order(pizza: Pizza): void;
    changeStatus(index: number, status: Status): void;
    changeSize(index: number, size: SizeKey): void;
    checkPrice({price}: Pizza): void;
    isOvenFull(): boolean;
    abstract bake(): void;
}
